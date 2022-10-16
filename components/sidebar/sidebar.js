document.readyState === "complete" ? init() : window.addEventListener("load", init);
let content = null;
function init() {
  content = parent.document.getElementById("content");
}

function loadPage($event, page) {
  document.getElementsByClassName("active")[0].classList.remove("active");
  $event.target.classList.add("active");
  content.innerHTML = `<object type="text/html" data="pages/${page}/${page}.html" id="content" style="width: 100%; height: 100%;"></object>`;
}
