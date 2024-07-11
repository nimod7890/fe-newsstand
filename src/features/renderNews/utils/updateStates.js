import { render } from "./renderView.js";
import { MainNewsState } from "../../../types/news.js";
import { getArraySubscribedCompanies } from "../../subscriptionButton/utils/localStorage.js";
import { getCompanyList } from "../../../apis/news.js";

/**
 * @type {MainNewsState}
 */
const state = {
  currentView: "list-view",
  currentDataType: "all-news-tab",
  currentTabId: 1,
  totalTabNumber: 0,
  currentDataIndex: 0,
  companies: [],
};

function resetIndexes() {
  state.currentTabId = 1;
  state.currentDataIndex = 0;
}

/**
 * 전체 언론사 보기 / 내가 구독한 언론사 보기 탭 선택 시
 * @param {MainNewsState.currentDataType} tabId
 */
async function switchCompanyTab(tabId) {
  const tab = document.getElementById(tabId);
  tab.checked = true;

  state.currentDataType = tabId;
  if (tabId === "all-news-tab") {
    state.companies = await getCompanyList({ categoryId: state.currentTabId });
  } else {
    state.companies = getArraySubscribedCompanies();
  }
  resetIndexes();
  render(state);
}

/**
 * 리스트 뷰 / 그리드 뷰 탭 선택 시
 * @param {'list-view' | 'grid-view'} view
 */
function switchCompanyView(view) {
  state.currentView = view;

  resetIndexes();
  render(state);
}

/** 내가 구독한 언론사 페이지에서 company 선택 시 */
function updateCompany(companyIndex) {
  state.currentDataIndex = companyIndex;
  render(state);
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

async function updateListViewCompanyType(categoryId) {
  await updateData(categoryId);
  state.currentTabId = categoryId;
  render(state);
}

function updateListViewCompanyInSubscribedTab(offset) {
  state.companies = getArraySubscribedCompanies();

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

/**
 * @param {number} total
 */
function setTotalTabNumber(total) {
  state.totalTabNumber = total;
}

export {
  updateCompany,
  switchCompanyView,
  updatePrev,
  updateNext,
  updateListViewCompanyType,
  switchCompanyTab,
  rerenderListViewCompanyInSubscribedTab,
  setTotalTabNumber,
};
