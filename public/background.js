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

function parseKey(key) {
    console.log(`parseKey(${key})`);

    let title = key.replaceAll(/\[.*/g,'');
    let documentUrlPatterns = [];
    let targetUrlPatterns = [];

    let documentMatch = /\[document~([^\]]+)/g.exec(key);
    let targetMatch   = /\[target~([^\]]+)/g.exec(key);

    if (documentMatch) {
        documentUrlPatterns.push(documentMatch[1]);
    }

    if (targetMatch) {
        targetUrlPatterns.push(targetMatch[1]);
    }

    let params = {
        "id": key ,
        "title": title ,
        "documentUrlPatterns": documentUrlPatterns,
        "targetUrlPatterns": targetUrlPatterns,
        "contexts": ["image","link","page"]
    };

    console.log(params);

    return params;
}

chrome.storage.sync.get(null, (items) => {
    var allKeys = Object.keys(items);
    allKeys.forEach( key => {
        chrome.contextMenus.create(
            parseKey(key)
        );
        chrome.contextMenus.onClicked.addListener(openHandler);
    });
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {

        if (namespace === 'sync') {
            if (!oldValue) {
                // We have a new entry...
                chrome.contextMenus.create(
                    parseKey(key)
                ); 
                chrome.contextMenus.onClicked.addListener(openHandler);
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