chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Raid Report',
        "contexts": ["link"],
        "id": "raid_link",
        "documentUrlPatterns": ["*://*.bungie.net/en/ClanV2/PublicFireteam?*"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if(tab) {
        var str = info.linkUrl,
            rmv = "https://www.bungie.net/7/en/User/Profile/";
        str = str.replace(rmv, '');
        var char1 = str.charAt(0);
        str = str.replace(char1 +'/', '');
        
        chrome.tabs.create({  
            url: "https://raid.report/pc/" + encodeURIComponent(str),
            active: false
        });
    } 
});