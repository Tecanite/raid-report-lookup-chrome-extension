chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "title": 'Raid Report',
        "contexts": ["link"],
        "id": "raid_link",
        "documentUrlPatterns": ["*://*.bungie.net/7/en/Fireteams/*"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (tab) {
        var str = info.linkUrl,
            rmv = "https://www.bungie.net/7/en/User/Profile/"
        str = str.replace(rmv, '')
        var char1 = str.charAt(0)
        str = str.replace(char1 + '/', '')

        var finalUrl = "https://raid.report/"
        if (char1 === "1") {
            finalUrl = finalUrl + "xb/"
        } else if (char1 === "2") {
            finalUrl = finalUrl + "ps/"
        } else if (char1 === "6") {
            finalUrl = finalUrl + "epic/"
        } else {
            finalUrl = finalUrl + "pc/"
        }
        finalUrl = finalUrl + str

        chrome.tabs.create({
            url: finalUrl,
            active: false
        })
    }
})