import { render } from "./renderView.js";
import { MainNewsState } from "../../../types/news.js";
import { getArraySubscribedCompanies } from "../../subscriptionButton/utils/localStorage.js";
import { getCompanyList } from "../../../apis/news.js";
import { GRID_ITEM_PER_PAGE } from "../constants/gridItemPerPage.js";

/**
 * @type {MainNewsState}
 */
const state = {
  currentView: "grid-view",
  currentDataType: "all-news-tab",
  currentTabId: null,
  totalTabNumber: 0,
  currentDataIndex: 0,
  companies: [],
};

const updateState = {
  ["list-view"]: {
    ["all-news-tab"]: {
      prev: () => selectCompanyInListViewAllTab(-1),
      next: () => selectCompanyInListViewAllTab(1),
    },
    ["subscribed-news-tab"]: {
      prev: () => selectCompanyInListViewSubscribedTab(-1),
      next: () => selectCompanyInListViewSubscribedTab(1),
      rerender: () => selectCompanyInListViewSubscribedTab(0),
    },
  },
  ["grid-view"]: {
    ["all-news-tab"]: {
      prev: () => selectGridViewPage(-1),
      next: () => selectGridViewPage(1),
      rerender: () => render(state),
    },
    ["subscribed-news-tab"]: {
      prev: () => selectGridViewPage(-1),
      next: () => selectGridViewPage(1),
      rerender: () => selectGridViewPage(0),
    },
  },
};

async function renderInit() {
  selectTab("grid-view", "currentView");
  selectTab("all-news-tab", "currentDataType");

  state.companies = await getCompanyList({ categoryId: state.currentTabId });

  render(state);
}

/**
 * 전체 언론사 보기 / 내가 구독한 언론사 보기 탭 선택 시
 * @param {MainNewsState.currentDataType} tabId
 */
async function switchCompanyData(tabId) {
  resetIndexes();
  selectTab(tabId, "currentDataType");

  state.companies =
    tabId === "all-news-tab"
      ? await getCompanyList({ categoryId: state.currentTabId })
      : (state.companies = getArraySubscribedCompanies());

  render(state);
}

/**
 * 리스트 뷰 / 그리드 뷰 탭 선택 시
 * @param {'list-view' | 'grid-view'} view
 */
async function switchCompanyView(view) {
  state.currentView = view;
  await switchCompanyData(state.currentDataType);
}

function updatePrev() {
  updateState[state.currentView][state.currentDataType].prev();
}

function updateNext() {
  updateState[state.currentView][state.currentDataType].next();
}

/** list view */

function selectCompanyInListViewSubscribedTab(companyIndex) {
  state.currentDataIndex = companyIndex;
  render(state);
}

async function selectCompanyTypeInListView(categoryId) {
  await updateData(categoryId);
  state.currentTabId = categoryId;
  render(state);
}

function selectCompanyInListViewSubscribedTab(offset) {
  state.currentDataIndex += offset;

  if (state.currentDataIndex < 0) {
    state.currentDataIndex = state.companies.length - 1;
  } else if (state.currentDataIndex >= state.companies.length) {
    state.currentDataIndex = 0;
  }

  render(state);
}

async function selectCompanyInListViewAllTab(offset) {
  state.currentDataIndex += offset;

  if (state.currentDataIndex < 0) {
    await updateData(((state.currentTabId - 2 + state.totalTabNumber) % state.totalTabNumber) + 1);
    state.currentDataIndex = state.companies.length - 1;
  } else if (state.currentDataIndex >= state.companies.length) {
    await updateData((state.currentTabId % state.totalTabNumber) + 1);
  }

  render(state);
}

function rerenderInSubscribedTab() {
  state.companies = getArraySubscribedCompanies();
  updateState[state.currentView]["subscribed-news-tab"].rerender();
}

/**
 * @param {number} total
 */
function setTotalTabNumberInListView(total) {
  state.totalTabNumber = total;
}

/* grid view */

function selectGridViewPage(offset) {
  const newIndex = state.currentDataIndex + offset * GRID_ITEM_PER_PAGE;

  if (newIndex < 0) {
    state.currentDataIndex =
      (Math.ceil(state.companies.length / GRID_ITEM_PER_PAGE) - 1) * GRID_ITEM_PER_PAGE;
  } else if (newIndex >= state.companies.length) {
    state.currentDataIndex = 0;
  } else {
    state.currentDataIndex = newIndex;
  }

  render(state);
}

function rerenderInGridView() {
  updateState["grid-view"][state.currentDataType].rerender();
}

/** utils */

function resetIndexes() {
  state.currentTabId = state.currentView === "list-view" ? 1 : null;
  state.currentDataIndex = 0;
}

function selectTab(elementId, stateKey) {
  const element = document.getElementById(elementId);
  if (element) {
    element.checked = true;
    state[stateKey] = elementId;
  }
}

async function updateData(categoryId) {
  state.companies = await getCompanyList({ categoryId });
  state.currentDataIndex = 0;
  state.currentTabId = categoryId;
}

export {
  renderInit,
  updatePrev,
  updateNext,
  switchCompanyData,
  switchCompanyView,
  selectCompanyInListViewSubscribedTab,
  selectCompanyTypeInListView,
  rerenderInGridView,
  rerenderInSubscribedTab,
  setTotalTabNumberInListView,
};
