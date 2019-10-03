/*
AU Library Discover: http://0-search.ebscohost.com.aupac.lib.athabascau.ca/login.aspx?direct=true&searchMode=And&site=eds-live&bquery=(search+term)
Microsoft Academic : https://academic.microsoft.com/search?q=(search+term)
Google Scholar: https://scholar.google.com/scholar?q=(search+term)
https://0-scholar-google-ca.aupac.lib.athabascau.ca/scholar?q=(search+term)
Semantic Scholar: https://www.semanticscholar.org/search?q=(search%20term)
Archive.org https://archive.org/details/texts?and%5B%5D=(search+term)


*/
const au = document.querySelector("#aulib");
const scholar = document.querySelector("#scholar");
const microsoft = document.querySelector("#microsoft");
const semantic = document.querySelector("#semantic");
const archiveorg = document.querySelector("#archive");

const searchbtn = document.querySelector("#searchtime");


function performSearch(e) {

    const searchstring = document.querySelector("#search").value;
    //console.log(searchstring);
    const searchstringplus = searchstring.replace(/ /g, "+");
    const searchstringspace = searchstring.replace(/ /g, "%20");

    if (au.checked) {
        var newAuURL = 'http://0-search.ebscohost.com.aupac.lib.athabascau.ca/login.aspx?direct=true&searchMode=And&site=eds-live&bquery=' + searchstringplus;
        chrome.tabs.create({
            url: newAuURL
        });

    };
    if (scholar.checked) {
        var newScholarURL = 'https://0-scholar-google-com.aupac.lib.athabascau.ca/scholar?hl=en&as_sdt=0,5&q=' + searchstringspace;
        //console.log(newScholarURL);
        chrome.tabs.create({
            url: newScholarURL
        });
    };
    if (microsoft.checked) {
        var newMicrosoftURL = 'https://academic.microsoft.com/search?q=' + searchstringplus;
        chrome.tabs.create({
            url: newMicrosoftURL
        });
    };
    if (semantic.checked) {
        var newSemanticURL = 'https://www.semanticscholar.org/search?q=' + searchstringspace;
        chrome.tabs.create({
            url: newSemanticURL
        });
    };
    if (archiveorg.checked) {
        var newArchiveURL = 'https://archive.org/details/texts?and%5B%5D=' + searchstringplus;
        chrome.tabs.create({
            url: newArchiveURL
        });
    };
}
/* call the function on click */
searchbtn.onclick = performSearch;
