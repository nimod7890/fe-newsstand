import { allCompanies, subscribedCompanies } from "../../../data/news.js";
import { render } from "./renderView.js";
import { MainNewsState } from "../../../types/news.js";

/**
 * @type {MainNewsState}
 */
const state = {
  currentView: "list-view",
  currentTypeIndex: 0,
  currentCompanyIndex: 0,
  data: [],
};

function resetIndexes() {
  state.currentTypeIndex = 0;
  state.currentCompanyIndex = 0;
}

/**
 * 전체 언론사 보기 / 내가 구독한 언론사 보기 탭 선택 시
 * @param {"all-news-tab" | "subscribed-news-tab"} id
 */
function switchCompanyTab(id) {
  state.data = state.data = id === "all-news-tab" ? allCompanies : subscribedCompanies;
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
  state.currentTypeIndex = index;
  state.currentCompanyIndex = 0;
  render(state);
}

function updatePrev() {
  state.currentView == "list-view" && updateCompany(-1);
}

function updateNext() {
  state.currentView == "list-view" && updateCompany(1);
}

/** 리스트 뷰 상태일 때 prev, next button 클릭 시 */
function updateCompany(offset) {
  const currentType = state.data[state.currentTypeIndex];
  state.currentCompanyIndex += offset;

  if (state.currentCompanyIndex < 0) {
    state.currentTypeIndex = (state.currentTypeIndex - 1 + state.data.length) % state.data.length;
    state.currentCompanyIndex = state.data[state.currentTypeIndex].company.length - 1;
  } else if (state.currentCompanyIndex >= currentType.company.length) {
    state.currentTypeIndex = (state.currentTypeIndex + 1) % state.data.length;
    state.currentCompanyIndex = 0;
  }

  render(state);
}

export { switchCompanyView, updatePrev, updateNext, updateCompanyType, switchCompanyTab };
