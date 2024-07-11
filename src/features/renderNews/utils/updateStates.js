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

function resetIndexes() {
  state.currentTabId = state.currentView === "list-view" ? 1 : null;
  state.currentDataIndex = 0;
}

async function renderInit() {
  const viewTab = document.getElementById("grid-view");
  viewTab.checked = true;
  state.currentView = "grid-view";

  const dataTab = document.getElementById("all-news-tab");
  dataTab.checked = true;
  state.currentDataType = "all-news-tab";
  state.companies = await getCompanyList({ categoryId: state.currentTabId });

  render(state);
}

/**
 * 전체 언론사 보기 / 내가 구독한 언론사 보기 탭 선택 시
 * @param {MainNewsState.currentDataType} tabId
 */
async function switchCompanyTab(tabId) {
  resetIndexes();
  state.currentDataType = tabId;
  if (tabId === "all-news-tab") {
    state.companies = await getCompanyList({ categoryId: state.currentTabId });
  } else {
    state.companies = getArraySubscribedCompanies();
  }
  render(state);
}

/**
 * 리스트 뷰 / 그리드 뷰 탭 선택 시
 * @param {'list-view' | 'grid-view'} view
 */
async function switchCompanyView(view) {
  state.currentView = view;
  await switchCompanyTab(state.currentDataType);
}

const updateState = {
  ["list-view"]: {
    ["all-news-tab"]: {
      prev: () => updateListViewCompanyInAllTab(-1),
      next: () => updateListViewCompanyInAllTab(1),
    },
    ["subscribed-news-tab"]: {
      prev: () => updateListViewCompanyInSubscribedTab(-1),
      next: () => updateListViewCompanyInSubscribedTab(1),
    },
  },
  ["grid-view"]: {
    ["all-news-tab"]: {
      prev: () => updateGridViewCompany(-1),
      next: () => updateGridViewCompany(1),
    },
    ["subscribed-news-tab"]: {
      prev: () => updateGridViewCompany(-1),
      next: () => updateGridViewCompany(1),
    },
  },
};

async function updateData(categoryId) {
  state.companies = await getCompanyList({ categoryId });
  state.currentDataIndex = 0;
  state.currentTabId = categoryId;
}

function updatePrev() {
  updateState[state.currentView][state.currentDataType].prev();
}

function updateNext() {
  updateState[state.currentView][state.currentDataType].next();
}

/** list view */

/** 리스트 뷰 내 내가 구독한 언론사 페이지에서 company 선택 시 */
function updateCompany(companyIndex) {
  state.currentDataIndex = companyIndex;
  render(state);
}

async function updateListViewCompanyType(categoryId) {
  await updateData(categoryId);
  state.currentTabId = categoryId;
  render(state);
}

function updateListViewCompanyInSubscribedTab(offset) {
  state.currentDataIndex += offset;
  if (state.currentDataIndex < 0) {
    state.currentDataIndex = state.companies.length - 1;
  } else if (state.currentDataIndex >= state.companies.length) {
    state.currentDataIndex = 0;
  }
  render(state);
}

async function updateListViewCompanyInAllTab(offset) {
  state.currentDataIndex += offset;

  if (state.currentDataIndex < 0) {
    await updateData(((state.currentTabId - 2 + state.totalTabNumber) % state.totalTabNumber) + 1);
    state.currentDataIndex = state.companies.length - 1;
  } else if (state.currentDataIndex >= state.companies.length) {
    await updateData((state.currentTabId % state.totalTabNumber) + 1);
  }
  render(state);
}

function rerenderListViewCompanyInSubscribedTab() {
  updateListViewCompanyInSubscribedTab(0);
}

/** grid view */
function updateGridViewCompany(offset) {
  state.currentDataIndex += offset * GRID_ITEM_PER_PAGE;
  if (state.currentDataIndex < 0) {
    state.currentDataIndex =
      Math.floor(state.companies.length / GRID_ITEM_PER_PAGe) * GRID_ITEM_PER_PAGE;
  } else if (state.currentDataIndex >= state.companies.length) {
    state.currentDataIndex = 0;
  }

  render(state);
}

/**
 * @param {number} total
 */
function setTotalTabNumber(total) {
  state.totalTabNumber = total;
}

export {
  renderInit,
  updateCompany,
  switchCompanyView,
  updatePrev,
  updateNext,
  updateListViewCompanyType,
  switchCompanyTab,
  rerenderListViewCompanyInSubscribedTab,
  setTotalTabNumber,
};
