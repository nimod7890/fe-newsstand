const stylesheets = [
  "src/style/global.css",
  "src/style/typography.css",
  "src/style/color.css",
  "src/style/layout.css",

  "src/components/button/button.css",
  "src/components/newsTicker/newsTicker.css",
  "src/components/switcher/switcher.css",
  "src/components/icon/icon.css",

  "src/components/overlays/overlay.css",
  "src/components/overlays/dialog/dialog.css",
  "src/components/overlays/toast/toast.css",

  "src/features/unsubscribeDialog/unsubscribeDialog.css",

  "src/features/renderNews/components/@common/companyNavButton/companyNavButton.css",
  "src/features/renderNews/components/list/company/company.css",
];

stylesheets.forEach(loadCSS);

function loadCSS(url) {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<link rel='stylesheet' type='text/css' href='${url}'/>`
  );
}
