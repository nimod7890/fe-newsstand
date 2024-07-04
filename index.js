import { createNewsTicker } from "./src/components/newsTicker/newsTicker.js";
import { leftNewsItems, rightNewsItems } from "./src/data/headlineNews.js";

/* render headline news ticker */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-ticker-container");

  const left = createNewsTicker({ newsItems: leftNewsItems, tag: "연합뉴스" });
  const right = createNewsTicker({ newsItems: rightNewsItems, tag: "연합뉴스" }, 1);

  container.appendChild(left);
  container.appendChild(right);
});
