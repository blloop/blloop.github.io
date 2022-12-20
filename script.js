let current_mode = "dark";

function toggle_color() {

    (current_mode === "dark" ? set_light() : set_dark());

};

function set_light() {
    document.getElementById("lightbulb").src = "img/light_off.png";
    document.body.style.backgroundColor = 'rgb(215, 215, 215)';
    // document.getElementById("toggle_button").style.backgroundColor = 'rgb(50, 50, 50)';
    document.querySelectorAll("*").forEach(doc => doc.style.color = 'rgb(50, 50, 50)');
    document.querySelectorAll("hr").forEach(doc => doc.style.backgroundColor = 'rgb(50, 50, 50)');
    current_mode = "light";
}

function set_dark() {
    document.getElementById("lightbulb").src = "img/light_on.png";
    document.body.style.backgroundColor = 'rgb(50, 50, 50)';
    // document.getElementById("toggle_button").style.backgroundColor = 'rgb(215, 215, 215)';
    document.querySelectorAll("*").forEach(doc => doc.style.color = 'rgb(92, 230, 96)');
    document.querySelectorAll("hr").forEach(doc => doc.style.backgroundColor = 'rgb(92, 230, 96)');
    current_mode = "dark";
}