import { render } from "./renderView.js";
import { MainNewsState } from "../../../types/news.js";
import { getArraySubscribedCompanies } from "../../subscriptionButton/utils/localStorage.js";
import { getCompanyList } from "../../../apis/news.js";
import { GRID_ITEM_PER_PAGE } from "../constants/gridItemPerPage.js";

// Constants
const LIST_VIEW = "list-view";
const GRID_VIEW = "grid-view";

const ALL_NEWS_TAB = "all-news-tab";
const SUBSCRIBED_NEWS_TAB = "subscribed-news-tab";

/**
 * @type {MainNewsState}
 */
const state = {
  viewTabId: GRID_VIEW,
  dataTabId: ALL_NEWS_TAB,
  categoryId: null,
  totalTabNumber: 0,
  companyIndex: 0,
  companies: [],
};

const updateState = {
  [LIST_VIEW]: {
    [ALL_NEWS_TAB]: {
      prev: () => selectAdjacentCompanyInListViewAllTab(-1),
      next: () => selectAdjacentCompanyInListViewAllTab(1),
    },
    [SUBSCRIBED_NEWS_TAB]: {
      prev: () => selectAdjacentCompanyInListViewSubscribedTab(-1),
      next: () => selectAdjacentCompanyInListViewSubscribedTab(1),
      rerender: () => selectAdjacentCompanyInListViewSubscribedTab(0),
    },
  },
  [GRID_VIEW]: {
    [ALL_NEWS_TAB]: {
      prev: () => navigateGridViewPage(-1),
      next: () => navigateGridViewPage(1),
      rerender: () => render(state),
    },
    [SUBSCRIBED_NEWS_TAB]: {
      prev: () => navigateGridViewPage(-1),
      next: () => navigateGridViewPage(1),
      rerender: () => navigateGridViewPage(0),
    },
  },
};

async function renderInit() {
  selectTab(GRID_VIEW, "viewTabId");
  selectTab(ALL_NEWS_TAB, "dataTabId");

  state.companies = await getCompanyList({ categoryId: state.categoryId });

  render(state);
}

/**
 * 전체 언론사 보기 / 구독한 언론사 보기 탭 선택 시
 * @param {Object} props
 * @param {"all-news-tab" | "subscribed-news-tab"} dataTabId
 * @param {'list-view' | 'grid-view' | undefined} [view]
 */
async function switchCompanyData({ dataTabId, view }) {
  const viewTabId = view ?? (dataTabId === ALL_NEWS_TAB ? GRID_VIEW : LIST_VIEW);
  const categoryId = viewTabId === LIST_VIEW ? 1 : null;

  selectTab(dataTabId, "dataTabId");
  selectTab(viewTabId, "viewTabId");

  state.companyIndex = 0;
  state.categoryId = categoryId;
  state.companies =
    dataTabId === ALL_NEWS_TAB
      ? await getCompanyList({ categoryId })
      : getArraySubscribedCompanies();
  console.log(state);
  render(state);
}

/**
 * 리스트 뷰 / 그리드 뷰 탭 선택 시
 * @param {'list-view' | 'grid-view'} view
 */
async function switchCompanyView(view) {
  await switchCompanyData({ dataTabId: state.dataTabId, view });
}

/* 이전/다음 버튼 클릭 시 */

function updatePrev() {
  updateState[state.viewTabId][state.dataTabId].prev();
}

function updateNext() {
  updateState[state.viewTabId][state.dataTabId].next();
}

/** list view */

async function selectCompanyTypeInListView(categoryId) {
  await updateData(categoryId);
  state.categoryId = categoryId;
  render(state);
}

function selectCompanyByIndexInListView(companyIndex) {
  state.companyIndex = companyIndex;
  render(state);
}

async function selectAdjacentCompanyInListViewAllTab(offset) {
  state.companyIndex += offset;

  if (state.companyIndex < 0) {
    await updateData(((state.categoryId - 2 + state.totalTabNumber) % state.totalTabNumber) + 1);
    state.companyIndex = state.companies.length - 1;
  } else if (state.companyIndex >= state.companies.length) {
    await updateData((state.categoryId % state.totalTabNumber) + 1);
  }

  render(state);
}

function selectAdjacentCompanyInListViewSubscribedTab(offset) {
  state.companyIndex += offset;

  if (state.companyIndex < 0) {
    state.companyIndex = state.companies.length - 1;
  } else if (state.companyIndex >= state.companies.length) {
    state.companyIndex = 0;
  }

  render(state);
}

function rerenderInSubscribedTab() {
  state.companies = getArraySubscribedCompanies();
  updateState[state.viewTabId][SUBSCRIBED_NEWS_TAB].rerender();
}

/**
 * @param {number} total
 */
function setTotalTabNumberInListView(total) {
  state.totalTabNumber = total;
}

/* grid view */

function navigateGridViewPage(offset) {
  const newIndex = state.companyIndex + offset * GRID_ITEM_PER_PAGE;

  if (newIndex < 0) {
    state.companyIndex =
      (Math.ceil(state.companies.length / GRID_ITEM_PER_PAGE) - 1) * GRID_ITEM_PER_PAGE;
  } else if (newIndex >= state.companies.length) {
    state.companyIndex = 0;
  } else {
    state.companyIndex = newIndex;
  }

  render(state);
}

function rerenderInGridView() {
  updateState[GRID_VIEW][state.dataTabId].rerender();
}

/** utils */

function selectTab(elementId, stateKey) {
  const element = document.getElementById(elementId);
  if (element) {
    element.checked = true;
    state[stateKey] = elementId;
  }
}

async function updateData(categoryId) {
  state.companies = await getCompanyList({ categoryId });
  state.companyIndex = 0;
  state.categoryId = categoryId;
}

export {
  renderInit,
  updatePrev,
  updateNext,
  switchCompanyData,
  switchCompanyView,
  selectCompanyByIndexInListView,
  selectCompanyTypeInListView,
  setTotalTabNumberInListView,
  rerenderInGridView,
  rerenderInSubscribedTab,
};
