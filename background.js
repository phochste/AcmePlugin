function openTab(type,resource) {
    console.log(`openTab(${type})`);
    chrome.storage.sync.get([type], (result) => {
        let template = result[type].replaceAll(/{resource}/g,escape(resource));
        console.log(`redirecting to : ${template}`);
        chrome.tabs.create({
            url: template
        }); 
    });
}

function editHandler(e,tab) {
    var resource;

    if (e.linkUrl) {
        resource = e.linkUrl;
    }
    else if (e.srcUrl) {
        resource = e.srcUrl;
    }
    else if (e.pageUrl) {
        resource = e.pageUrl;
    }
    else {
        resource = tab.url;
    }

    if (resource) {
        openTab("editor",resource);
    }
}

function wacHandler(e,tab) {
    var resource;

    if (e.linkUrl) {
        resource = e.linkUrl;
    }
    else if (e.srcUrl) {
        resource = e.srcUrl;
    }
    else if (e.pageUrl) {
        resource = e.pageUrl;
    }
    else {
        resource = tab.url;
    }

    if (resource) {
        openTab("waceditor",resource);
    }
}

chrome.contextMenus.create({
    "title": "Editor",
    "contexts": ["link","page"],
    "onclick" : editHandler
});

chrome.contextMenus.create({
    "title": "WACEditor",
    "contexts": ["image","link","page"],
    "onclick" : wacHandler
});