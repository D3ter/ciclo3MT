function onInit() {
  document.getElementById("header").innerHTML =
    '<object type="text/html" data="components/header/header.html" id="headerObj" style="width: 100%; height: 100%;"></object>';
    document.getElementById("sidebar").innerHTML =
    '<object type="text/html" data="components/sidebar/sidebar.html" id="sidebarObj" style="width: 100%; height: 100%;"></object>';
    document.getElementById("content").innerHTML =
    '<object type="text/html" data="pages/home/home.html" id="contentObj" style="width: 100%; height: 100%;"></object>';
}

onInit();
