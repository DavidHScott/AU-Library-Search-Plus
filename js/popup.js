/****************************************************/
// Filename: popup.js
// Author: David Scott
// Version: 0.4
// Extension: AU Library Search Plus 
// Date: 2020-04-23
/****************************************************/
const aulib = document.querySelector("#aulib");
const arxiv = document.querySelector("#arxiv");
const base = document.querySelector("#base");
const bioone = document.querySelector("#bioone");
const citeseer = document.querySelector("#citeseer");
const core = document.querySelector("#core");
const eric = document.querySelector("#eric");
const scholar = document.querySelector("#scholar");
const scholarx = document.querySelector("#scholarx");
const archiveorg = document.querySelector("#archiveorg");
const microsoft = document.querySelector("#microsoft");
const pubmed = document.querySelector("#pubmed");
const researchgate = document.querySelector("#researchgate");
const semantic = document.querySelector("#semantic");
const scinapse = document.querySelector("#scinapse");



const searchbtn = document.querySelector("#searchtime");



//show only selected search engines in the popup

document.body.onload = function () {
    chrome.storage.sync.get("engines", function (result) {
       if(result.engines) {
             eng1 = result.engines;
            
        } else {
       eng1 = ["aulib","scholar","microsoft","semantic"];
            }
        //console.log(eng1);
            eng1.forEach(function (cls, index) {
                var clss = "."+cls;
                console.log(clss);
                document.querySelector(clss).style.display='block';
            });
    });
};


function performSearch(e) {

    const searchstring = document.querySelector("#search").value;
    //console.log(searchstring);
    const searchstringplus = searchstring.replace(/ /g, "+");
    const searchstringspace = searchstring.replace(/ /g, "%20");

    if ((aulib)&&(aulib.checked)) {
        var newAuURL = 'http://0-search.ebscohost.com.aupac.lib.athabascau.ca/login.aspx?direct=true&searchMode=And&site=eds-live&bquery=' + searchstringplus;
        chrome.tabs.create({
            url: newAuURL
        });

    };
    if ((arxiv!=null) && (arxiv.checked)) {
        var newArxivURL = 'https://arxiv.org/search/?searchtype=all&query=' + searchstringplus;
        chrome.tabs.create ({
            url:newArxivURL
        });
    };
    
    if ((base)&&(base.checked)) {
        var newBaseURL = 'https://www.base-search.net/Search/Results?type=all&lookfor=' + searchstringplus;
        chrome.tabs.create({
            url: newBaseURL
        });
    };
        if ((bioone)&&(bioone.checked)) {
        var newBiooneURL = 'https://bioone.org/search?term=' + searchstringplus;
        chrome.tabs.create({
            url: newBiooneURL
        });
    };
       
        if ((citeseer)&&(citeseer.checked)) {
        var newCiteseerURL = 'http://citeseerx.ist.psu.edu/search?q=' + searchstringplus;
        chrome.tabs.create({
            url: newCiteseerURL
        });
    };
        if ((core)&&(core.checked)) {
        var newCoreURL = 'https://core.ac.uk/search?q=' + searchstringplus;
        chrome.tabs.create({
            url: newCoreURL
        });
    };
    if ((eric)&&(eric.checked)) {
        var newEricURL = 'https://eric.ed.gov/?q=' + searchstringplus;
        chrome.tabs.create({
            url: newEricURL
        });
    };

          if ((scholar)&&(scholar.checked)) {
        var newScholarURL = 'https://0-scholar-google-com.aupac.lib.athabascau.ca/scholar?hl=en&as_sdt=0,5&q=' + searchstringspace;
        chrome.tabs.create({
            url: newScholarURL
        });
    };
            if ((scholarx)&&(scholarx.checked)) {
        var newScholarxURL = 'https://scholar.google.com/scholar?hl=en&q=' + searchstringplus;
        chrome.tabs.create({
            url: newScholarxURL
        });
    };
    
        if ((archiveorg)&&(archiveorg.checked)) {
        var newArchiveURL = 'https://archive.org/details/texts?and%5B%5D=' + searchstringplus;
        chrome.tabs.create({
            url: newArchiveURL
        });
    };
    
    if ((microsoft)&&(microsoft.checked)) {
        var newMicrosoftURL = 'https://academic.microsoft.com/search?q=' + searchstringplus;
        chrome.tabs.create({
            url: newMicrosoftURL
        });
    };
        if ((pubmed)&&(pubmed.checked)) {
        var newPubmedURL = 'https://www.ncbi.nlm.nih.gov/pubmed/?term=' + searchstringplus;
        chrome.tabs.create({
            url: newPubmedURL
        });
    };
    
     if ((researchgate)&&(researchgate.checked)) {
        var newResearchgateURL = 'https://www.researchgate.net/search.Search.html?type=publication&query=' + searchstringplus;
        chrome.tabs.create({
            url: newResearchgateURL
        });
    };
    
    if ((semantic)&&(semantic.checked)) {
        var newSemanticURL = 'https://www.semanticscholar.org/search?q=' + searchstringspace;
        chrome.tabs.create({
            url: newSemanticURL
        });
    };
    if ((scinapse)&&(scinapse.checked)) {
        var newScinapseURL = 'https://scinapse.io/search?page=1&sort=RELEVANCE&query=' + searchstringspace;
        chrome.tabs.create({
            url: newScinapseURL
        });
    };
}
/* call the function on click */
searchbtn.onclick = performSearch;
