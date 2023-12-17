chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "title": 'Dungeon Report',
        "contexts": ["link"],
        "id": "dungeon_link",
        "documentUrlPatterns": ["*://*.bungie.net/7/*/Fireteams/*"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (tab) {
        var str = info.linkUrl
        frags = str.split('/')

        var finalUrl = "https://dungeon.report/"
        if (frags[7] === "1") {
            finalUrl = finalUrl + "xb/"
        } else if (frags[7] === "2") {
            finalUrl = finalUrl + "ps/"
        } else if (frags[7] === "6") {
            finalUrl = finalUrl + "epic/"
        } else {
            finalUrl = finalUrl + "pc/"
        }
        finalUrl = finalUrl + frags[8]

        chrome.tabs.create({
            url: finalUrl,
            active: false
        })
    }
})