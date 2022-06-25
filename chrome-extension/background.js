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

function openHandler(e,tab) {
    console.log("openHandler: %O", e);

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
        openTab(e.menuItemId,resource);
    }
}

chrome.storage.sync.get(null, (items) => {
    var allKeys = Object.keys(items);
    allKeys.forEach( key => {
        chrome.contextMenus.create({
            "id": key,
            "title": key ,
            "contexts": ["image","link","page"],
            "onclick": openHandler
        });
    });
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {

        if (namespace === 'sync') {
            if (!oldValue) {
                // We have a new entry...
                chrome.contextMenus.create({
                    "id": key,
                    "title": key ,
                    "contexts": ["image","link","page"],
                    "onclick": openHandler
                }); 
            }
            else if (!newValue) {
                // An entry was deleted...
                chrome.contextMenus.remove(key); 
            }
            else {
                // Some edit of an existing key..
                // Ok don't do anything..
            }
        }

        console.log(
          `Storage key "${key}" in namespace "${namespace}" changed.`,
          `Old value was "${oldValue}", new value is "${newValue}".`
        );
    }
});