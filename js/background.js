/****************************************************/
// Filename: background.js
// Author: David Scott
// Version: 0.4
// Extension: AU Library Search Plus 
// Date: 2020-04-22
/****************************************************/




document.body.onload = function () {
    chrome.storage.sync.get("engines", function (result) {
        if(result.engines < 0) {
             eng1 = result.engines;
            
        } else {
       eng1 = ["aulib","scholar","microsoft","semantic"];
            }
    });
       
};



chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
 chrome.runtime.openOptionsPage()
 }
 }); 
                                       
 /* parent and children 
// https://developer.chrome.com/extensions/examples/api/contextMenus/basic/sample.js
*/                                      
var parent = chrome.contextMenus.create({
    "title": "AU Library Search+",
    "id": "0",
    "contexts": ["selection"]
});


var searches = [{
        title: 'Search AU Library for "%s"',
        url: "http://0-search.ebscohost.com.aupac.lib.athabascau.ca/login.aspx?direct=true&searchMode=And&site=eds-live&bquery=%s"
    },
    {
        title: 'Search Google Scholar for "%s"',
        url: "https://0-scholar-google-com.aupac.lib.athabascau.ca/scholar?hl=en&as_sdt=0,5&q=%s"
    },
    {
        title: 'Search Microsoft Academic for "%s"',
        url: "https://academic.microsoft.com/search?q=%s"
    },
    {
        title: 'Search Semantic Scholar for "%s"',
        url: "https://www.semanticscholar.org/search?q=%s"
    },
    {
        title: 'Search Scinapse for "%s"',
        url: "https://scinapse.io/search?page=1&sort=RELEVANCE&query=%s"
    }
  ];

searches.forEach(function (obj) {
    var contextMenuId = chrome.contextMenus.create({
        "title": obj.title,
        "parentId": parent,
        "contexts": ["selection"],
        "id": (searches.indexOf(obj) + 1).toString()
    });
});

/* Populate %s with whatever is highlighted in the current tab */

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    var searchObj = searches[info.menuItemId - 1];
    if (typeof searchObj === "undefined")
        return;
    chrome.tabs.create({
        "url": searchObj.url.replace("%s", encodeURIComponent(info.selectionText))
    });
});
