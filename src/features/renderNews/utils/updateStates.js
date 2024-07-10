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
  currentCompanyIndex: 0,
  data: [],
};

/** todo: tab id data에서 가져와서 보완해야 함  */
function resetIndexes() {
  state.currentTabId = 1;
  state.currentCompanyIndex = 0;
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
    state.data = await getCompanyList({ categoryId: state.currentTabId });
  } else {
    state.data = getArraySubscribedCompanies();
  }
  resetIndexes();
  render(state);
}

/** 리스트 뷰 / 그리드 뷰 탭 선택 시 */
function switchCompanyView(view) {
  state.currentView = view;
  resetIndexes();
  render(state);
}

/** 리스트 뷰 내 언론사 type(종합/경제, IT 등) 탭 선택 시 */
async function updateCompanyType(categoryId) {
  await updateData(categoryId);
  state.currentTabId = categoryId;
  render(state);
}

/** 내가 구독한 언론사 페이지에서 company 선택 시 */
function updateCompany(companyIndex) {
  state.currentCompanyIndex = companyIndex;
  render(state);
}

const updateCompanyState = {
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
  state.data = await getCompanyList({ categoryId });
  state.currentCompanyIndex = 0;
  state.currentTabId = categoryId;
}

function updatePrev() {
  updateCompanyState[state.currentView][state.currentDataType].prev();
}

function updateNext() {
  updateCompanyState[state.currentView][state.currentDataType].next();
}

function updateListViewCompanyInSubscribedTab(offset) {
  state.data = getArraySubscribedCompanies();

  state.currentCompanyIndex += offset;
  if (state.currentCompanyIndex < 0) {
    state.currentCompanyIndex = state.data.length - 1;
  } else if (state.currentCompanyIndex >= state.data.length) {
    state.currentCompanyIndex = 0;
  }
  render(state);
}

async function updateListViewCompanyInAllTab(offset) {
  state.currentCompanyIndex += offset;

  if (state.currentCompanyIndex < 0) {
    await updateData(((state.currentTabId - 2 + state.totalTabNumber) % state.totalTabNumber) + 1);
    state.currentCompanyIndex = state.data.length - 1;
  } else if (state.currentCompanyIndex >= state.data.length) {
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
  updateCompanyType,
  switchCompanyTab,
  rerenderListViewCompanyInSubscribedTab,
  setTotalTabNumber,
};
