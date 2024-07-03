import { createNewsTicker } from "../../components/newsTicker/newsTicker.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-ticker-container");

  const left = createNewsTicker({ newsItems: leftNewsItems, tag: "연합뉴스" });
  const right = createNewsTicker({ newsItems: rightNewsItems, tag: "연합뉴스" }, 1);

  container.appendChild(left);
  container.appendChild(right);
});

// mock value
const leftNewsItems = [
  { id: 1, title: "[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출", link: "#" },
  { id: 2, title: "뉴스 항목 2", link: "#" },
  { id: 3, title: "연합뉴스: 뉴스 항목 3", link: "#" },
  { id: 4, title: "연합뉴스: 뉴스 항목 4", link: "#" },
  { id: 5, title: "연합뉴스: 뉴스 항목 5", link: "#" },
];

const rightNewsItems = [
  { id: 1, title: "뉴스 항목 1", link: "#" },
  { id: 2, title: "뉴스 항목 2", link: "#" },
  { id: 3, title: "뉴스 항목 3", link: "#" },
  { id: 4, title: "뉴스 항목 4", link: "#" },
  { id: 5, title: "뉴스 항목 5", link: "#" },
];
