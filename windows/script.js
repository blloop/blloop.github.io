// Script file for interactive components
// document.querySelectorAll("body").imageSmoothingEnabled = false;

// Render desktop icons from icon.js file
output = "";
for (i in icons) {
    output += `<div class='icon' id="${i}" onclick="select(${i})">`;
    output += `<img src="img/${icons[i].img}">`;
    output += `<p>${icons[i].title}</p>`;
    output += "</div>";
}
document.getElementById("icons").innerHTML = output;

// Highlights selected icon with a border

var selected = undefined;

function select(num) {
    if (selected !== num) {
        if (selected !== undefined) {
            document.getElementById(selected).classList.remove('select');
        }        
        if (num !== undefined) {
            document.getElementById(num).classList.add('select');
        }        
        selected = num;
    }
};

// Clears selected icons by clicking outside on the desktop
// Currently not functioning

function clearSelect() {
    // if (selected !== undefined) {
    //     document.getElementById(selected).classList.remove('select');
    // }
    // selected = undefined;
    
}

// Toggles start panel with start button

var startOpen = false;

function toggleStart() {

    if (startOpen) {
        document.getElementById("start_panel").classList.remove('start_open');
        document.getElementById("start").classList.remove('start_clicked');
    }
    else {
        document.getElementById("start_panel").classList.add('start_open');
        document.getElementById("start").classList.add('start_clicked');
    }
    startOpen = !startOpen;
}

// Sets system time to the browser's time
var current = new Date();

if (current.getHours() > 12) {
    current.setHours(current.getHours() - 12);
    ampm = "PM";
} else {
    ampm = "AM";
}

var time = `${current.getHours()}:`;
if (current.getMinutes() < 10) {
    time += "0";
}
time += current.getMinutes() + ampm;
console.log("System Time: " + time);

time = "<img src='img/speaker.png'><div>" + time + '</div';
document.getElementById("time").innerHTML = time;