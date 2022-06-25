function editHandler(e) {
    var resource;

    if (e.linkUrl) {
        resource = e.linkUrl;
    }
    else if (e.srcUrl) {
        resource = e.srcUrl;
    }
    else {
        resource = e.pageUrl;
    }

    chrome.tabs.create({
        url : 'https://solideditor.patrickhochstenbach.net/?resource=' + escape(resource)
    });
}

function wacHandler(e) {
    var resource;

    if (e.linkUrl) {
        resource = e.linkUrl;
    }
    else if (e.srcUrl) {
        resource = e.srcUrl;
    }
    else {
        resource = e.pageUrl;
    }

    if (resource) {
        chrome.tabs.create({
            url : 'https://waceditor.patrickhochstenbach.net/?resource=' + escape(resource)
        }); 
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