/****************************************************/
// Filename: options.js
// Author: David Scott
// Version: 0.4
// Extension: AU Library Search Plus 
// Date: 2020-04-22
/****************************************************/

document.body.onload = function () {
    chrome.storage.sync.get("engines", function (result) {
        eng1 = result.engines;
        console.log(eng1);
eng1.forEach(function (item, index) {
  console.log(item, index);
  document.getElementById(item).checked = true;
  
});
    });
       
};

/* 
Get info on selected checkboxes and put in an array
*/

document.querySelector("#saveconfig").onclick = function (e) {
    chrome.storage.sync.set({engines: []});
   var selengine = []
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

for (var i = 0; i < checkboxes.length; i++) {
  selengine.push(checkboxes[i].value)
}
    chrome.storage.sync.set({
        "engines": selengine
    }, function () {
        window.location.reload(true);

    });
    e.preventDefault();
}



/* Check if item in the array

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}



*/


