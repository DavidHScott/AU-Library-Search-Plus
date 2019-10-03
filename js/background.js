/* parent and children - sample code from https://developer.chrome.com/extensions/examples/api/contextMenus/basic/sample.js
 * var parent = chrome.contextMenus.create({"title": "Test parent item"});
 * var child1 = chrome.contextMenus.create({"title": "Child 1", "parentId": parent, "onclick": genericOnClick});
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
        title: 'Search Archive.org for "%s"',
        url: "https://archive.org/details/texts?and%5B%5D=%s"
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

/* Populate instances of %s with whatever is highlighted in the current tab */

chrome.contextMenus.onClicked.addListener(function (info, tab) {

    var searchObj = searches[info.menuItemId - 1];
    if (typeof searchObj === "undefined")
        return;

    //open new tab with search results
    chrome.tabs.create({
        "url": searchObj.url.replace("%s", encodeURIComponent(info.selectionText))
    });
});
