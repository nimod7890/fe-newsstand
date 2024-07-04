const stylesheets = [
  "src/style/global.css",
  "src/style/typography.css",
  "src/style/color.css",
  "src/style/layout.css",

  "src/components/button/button.css",
  "src/components/newsTicker/newsTicker.css",

  "src/components/overlays/overlay.css",
  "src/components/overlays/dialog/dialog.css",
  "src/components/overlays/toast/toast.css",

  "src/features/unsubscribeDialog/unsubscribeDialog.css",
];

stylesheets.forEach(loadCSS);

function loadCSS(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  document.head.appendChild(link);
}
