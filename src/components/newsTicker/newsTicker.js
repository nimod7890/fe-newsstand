/**
 * @typedef {Object} NewsItemProps
 * @property {number} id
 * @property {string} title
 * @property {string} url
 */

/**
 * @param {{tag?:string,newsItems:NewsItemProps[]}} newsTickerProps
 * @param {number?} [scrollDelay=0]
 * @returns {HTMLUListElement}
 */
export function createNewsTicker({ tag, newsItems }, scrollDelay = 0) {
  const ticker = document.createElement("ul");
  ticker.className = `news-ticker border-box`;

  newsItems.forEach((item, index) => {
    const newsItem = createNewsItem(item, tag);
    newsItem.classList.add(index === 0 ? "visible" : "hidden");
    ticker.appendChild(newsItem);
  });

  if (scrollDelay > 0) {
    ticker.style.animationDelay = `${scrollDelay}s`;
  }

  startTicker(ticker, scrollDelay);
  return ticker;
}

/**
 * @param {NewsItemProps} newsItem
 * @param {string} [tag='']
 * @returns {string}
 */
function createNewsItem({ title, url }, tag) {
  const container = document.createElement("li");

  if (tag?.length > 0) {
    container.insertAdjacentHTML("beforeend", `<p class='display-bold14'>${tag}</p>`);
  }

  container.insertAdjacentHTML(
    "beforeend",
    `<a href=${url} class='available-medium14 ellipsis'>${title}</a>`
  );

  return container;
}

/**
 * @param {HTMLUListElement} ticker
 * @param {number} scrollDelay
 */
function startTicker(ticker, scrollDelay) {
  const items = ticker.querySelectorAll("li");
  let currentIndex = 0;

  setInterval(() => {
    if (ticker.classList.contains("paused")) {
      return;
    }

    const { current, nextIndex, next } = getTickerElements(items, currentIndex);

    updateTickerClasses(current, next);
    currentIndex = nextIndex;
    handleTransitionEnd(current, next, nextIndex);
  }, 5000 + scrollDelay * 1000); // Interval duration + delay

  addTickerEventListeners(ticker);
}

/**
 * @param {NodeListOf<HTMLLIElement>} items
 * @param {number} currentIndex
 * @returns {{current: HTMLLIElement, nextIndex: number, next: HTMLLIElement}}
 */
function getTickerElements(items, currentIndex) {
  const current = items[currentIndex];
  const nextIndex = (currentIndex + 1) % items.length;
  const next = items[nextIndex];
  return { current, nextIndex, next };
}

/**
 * @param {HTMLLIElement} current
 * @param {HTMLLIElement} next
 */
function updateTickerClasses(current, next) {
  current.classList.remove("visible");
  current.classList.add("exiting");

  next.classList.remove("hidden");
  next.classList.add("visible");
}

/**
 * @param {HTMLLIElement} current
 * @param {HTMLLIElement} next
 * @param {number} nextIndex
 */
function handleTransitionEnd(current, next, nextIndex) {
  setTimeout(() => {
    current.classList.remove("exiting");
    current.classList.add("hidden");
    current.style.display = "none";
    next.style.display = "flex";

    next.classList.add("reset");
    setTimeout(() => next.classList.remove("reset"), 10);
  }, 1000);
}

/**
 * @param {HTMLUListElement} ticker
 */
function addTickerEventListeners(ticker) {
  ticker.addEventListener("mouseenter", () => ticker.classList.add("paused"));
  ticker.addEventListener("mouseleave", () => ticker.classList.remove("paused"));
}
