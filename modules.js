
/*Menu Function */

var menuic = document.getElementById("menu-icon");
menuic.setAttribute("onclick","OpenMenu()");
var body = document.getElementsByTagName("body")[0];
var bg = document.getElementById("background");
bg.setAttribute("onclick","OpenMenu()");
SetHandler();
document.addEventListener("DOMMouseScroll", function (event) {
	return ScrollTo(event);
},false);

var lastEvent;
let position = "#bio";
let lastScrollValue=0;
function ScrollTo(event){
    console.log(event.detail);
    if(event.detail == 3){
        if(lastEvent == undefined || event.timeStamp > lastEvent.timeStamp+100){
            scrollDown();
        }else{
            window.location.hash = position;
        }
    }else{
        if(lastEvent == undefined || event.timeStamp > lastEvent.timeStamp+100){
            scrollUp();
        }else{
            window.location.hash = position;
        }
    }

    lastEvent = event;
}

function scrollDown(){
    switch (position){
        case "#bio":
            window.location.hash ="#Education";
            position="#Education";
            break;
        case "#Education":
            window.location.hash ="#Experience";
            position="#Experience";
            break;
        case "#Experience":
            window.location.hash ="#Activities";
            position="#Activities";
            break;
        case "#Activities":
            window.location.hash ="#bio";
            position="#bio";
            break;
        default:
            window.location.hash ="#bio";
            break;
    }
}
function scrollUp(){
    switch (position){
        case "#bio":
            window.location.hash ="#Activities";
            position="#Activities";
            break;
        case "#Education":
            window.location.hash ="#bio";
            position="#bio";
            break;
        case "#Experience":
            window.location.hash ="#Education";
            position="#Education";
            break;
        case "#Activities":
            window.location.hash ="#Experience";
            position="#Experience";
            break;
        default:
            window.location.hash ="#bio";
            break;
    }
}


function SetHandler() {
	var jobsqares = document.getElementsByClassName("job-square");
	for(var i=0;i<jobsqares.length;i++){

		var selected = jobsqares[i];
		console.log(selected);
		selected.addEventListener("click", function (event) {
			event.stopPropagation();
			//console.log(event.target);
            return Selection(this);

        });
	}
}

function OpenMenu(){
    console.log("Menu Opening");
    document.getElementById("title").classList.toggle("shift");


    var bg = document.getElementById("background");
    var navmenu = document.getElementById("menu");
    navmenu.classList.toggle("nav-hidden");
    navmenu.classList.toggle("nav-visible");
    body.classList.toggle("no-scroll");
    bg.classList.toggle("bgColor");
}


function Selection(firer){
	firer.childNodes[3].classList.toggle("minied");
	//console.log(firer.childNodes);
}





