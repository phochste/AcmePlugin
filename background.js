function editHandler(e) {
    var url = e.linkUrl;
    chrome.tabs.create({
        url : 'https://solideditor.patrickhochstenbach.net/?resource=' + escape(url)
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

    if (resource) {
        chrome.tabs.create({
            url : 'https://waceditor.patrickhochstenbach.net/?resource=' + escape(resource)
        }); 
    }
}

chrome.contextMenus.create({
    "title": "Editor",
    "contexts": ["link"],
    "onclick" : editHandler
});

chrome.contextMenus.create({
    "title": "WACEditor",
    "contexts": ["image","link"],
    "onclick" : wacHandler
});