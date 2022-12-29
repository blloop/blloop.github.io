let current_mode = "dark";

let white_rgb = 'rgb(215, 215, 215)';
let grey_rgb = 'rgb(150, 150, 150)';
let dark_grey_rgb = 'rgb(50, 50, 50)';
let green_rgb = 'rgb(92, 230, 96)';

// Toggles mode between light and dark
function toggle_color() {
    (current_mode === "dark" ? set_light() : set_dark());
};

// Modifies page styles to mimic light mode
function set_light() {
    document.body.style.backgroundColor = white_rgb;
    document.getElementById("lightbulb").src = "img/light_off.png";
    document.querySelectorAll(".toggle").forEach(doc => doc.style.color = dark_grey_rgb);
    document.querySelectorAll(".toggle-bg").forEach(doc => doc.style.backgroundColor = dark_grey_rgb);
    document.querySelectorAll(".toggle-contrast").forEach(doc => doc.style.backgroundColor = grey_rgb);
    current_mode = "light";
}

// Modifies page styles to mimic dark mode
function set_dark() {
    document.body.style.backgroundColor = dark_grey_rgb;
    document.getElementById("lightbulb").src = "img/light_on.png";
    document.querySelectorAll(".toggle").forEach(doc => doc.style.color = green_rgb);
    document.querySelectorAll(".toggle-bg").forEach(doc => doc.style.backgroundColor = green_rgb);
    document.querySelectorAll(".toggle-contrast").forEach(doc => doc.style.backgroundColor = white_rgb);
    current_mode = "dark";
}

window.addEventListener("load", () => {
    set_dark();
});