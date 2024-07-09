import { allCompanies } from "../../../data/companies.js";
import { render } from "./renderView.js";
import { MainNewsState } from "../../../types/news.js";
import { getArraySubscribedCompanies } from "../../subscriptionButton/utils/localStorage.js";

/**
 * @type {MainNewsState}
 */
const state = {
  currentView: "list-view",
  currentDataType: "all-news-tab",
  currentCategoryIndex: 0,
  currentCompanyIndex: 0,
  data: [],
};

function resetIndexes() {
  state.currentCategoryIndex = 0;
  state.currentCompanyIndex = 0;
}

/**
 * 전체 언론사 보기 / 내가 구독한 언론사 보기 탭 선택 시
 * @param {MainNewsState.currentDataType} id
 */
function switchCompanyTab(id) {
  const tab = document.getElementById(id);
  tab.checked = true;

  state.currentDataType = id;
  state.data = id === "all-news-tab" ? allCompanies : getArraySubscribedCompanies();
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
function updateCompanyType(index) {
  state.currentCategoryIndex = index;
  state.currentCompanyIndex = 0;
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

function updatePrev() {
  updateCompanyState[state.currentView][state.currentDataType].prev();
}

function updateNext() {
  updateCompanyState[state.currentView][state.currentDataType].next();
}

function updateListViewCompanyInSubscribedTab(offset = 0) {
  state.data = getArraySubscribedCompanies();

  state.currentCompanyIndex += offset;
  if (state.currentCompanyIndex < 0) {
    state.currentCompanyIndex = state.data.length - 1;
  } else if (state.currentCompanyIndex >= state.data.length) {
    state.currentCompanyIndex = 0;
  }
  render(state);
}

function updateListViewCompanyInAllTab(offset) {
  const currentType = state.data[state.currentCategoryIndex];
  state.currentCompanyIndex += offset;

  if (state.currentCompanyIndex < 0) {
    state.currentCategoryIndex =
      (state.currentCategoryIndex - 1 + state.data.length) % state.data.length;
    state.currentCompanyIndex = state.data[state.currentCategoryIndex].companies.length - 1;
  } else if (state.currentCompanyIndex >= currentType.companies.length) {
    state.currentCategoryIndex = (state.currentCategoryIndex + 1) % state.data.length;
    state.currentCompanyIndex = 0;
  }

  render(state);
}

export {
  updateCompany,
  switchCompanyView,
  updatePrev,
  updateNext,
  updateCompanyType,
  switchCompanyTab,
  updateListViewCompanyInSubscribedTab,
};
