function injectScript(path) {
    let element = document.createElement("script");
    element.setAttribute("src", path);
    element.setAttribute("tpye", "module");
    document.getElementsByTagName("body")[0].appendChild(element);
}

function injectCSS(path) {
    let element = document.createElement("link");
    element.setAttribute("href", path);
    element.setAttribute("rel", "stylesheet");
    document.getElementsByTagName("body")[0].appendChild(element);
}

if (window.location.pathname == "/community/entrystory/list") {
    injectScript(chrome.runtime.getURL("fetch.js"));
    injectScript(chrome.runtime.getURL("entrystory/entrystory.js"));
    injectCSS(chrome.runtime.getURL("entrystory/entrystory.css"));
}
