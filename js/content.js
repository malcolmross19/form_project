// Declare Variables
let sizes = document.querySelector('#sizes');
let size = document.querySelector('.size');
let colors = document.querySelector('#colors');

// Event Listeners
sizes.addEventListener('click', function(e) {
    if(e.target.className == 'size' || e.target.parentElement.nodeName == 'DIV'){
        if(e.target.id !== ""){
            toggleColor(e.target.id);
        } else {
            toggleColor(e.target.parentElement.id);
        }
    }
}, false);

colors.addEventListener('click', function(e) {
    if(e.target.className == 'color' || e.target.parentElement.nodeName == 'DIV'){
        if(e.target.id !== ""){
            toggleColor(e.target.id);
        } else {
            toggleColor(e.target.parentElement.id);
        }
    }
}, false);


// Functions
function toggleColor(divId){
    if(document.getElementById(divId).style.border == 'none' || document.getElementById(divId).style.border == ''
    || document.getElementById(divId).style.border == 'medium none'){
        document.getElementById(divId).style.border = '3px solid blue';
    } else {
        document.getElementById(divId).style.border = 'none';
    }
}