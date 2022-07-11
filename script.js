// Script file for interactive components

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

// Sets system time to the browser's time
var current = new Date();
var time = "<img src='img/speaker.png'>";

if (current.getHours() > 12) {
    current.setHours(current.getHours() - 12);
    ampm = "PM";
} else {
    ampm = "AM";
}

time += `<div>${current.getHours()}:`;
if (current.getMinutes() < 10) {
    time += "0";
}
time += current.getMinutes() + ampm + "</div>";
console.log(time);

document.getElementById("time").innerHTML = time;