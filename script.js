let current_mode = "dark";

// Toggles mode between light and dark
function toggle_color() {
    (current_mode === "dark" ? set_light() : set_dark());
};

// Modifies page styles to mimic light mode
function set_light() {
    document.body.style.backgroundColor = 'rgb(215, 215, 215)';
    document.getElementById("lightbulb").src = "img/light_off.png";
    document.querySelectorAll(".toggle").forEach(doc => doc.style.color = 'rgb(50, 50, 50)');
    document.querySelectorAll(".toggle-bg").forEach(doc => doc.style.backgroundColor = 'rgb(50, 50, 50)');
    document.querySelectorAll(".toggle-contrast").forEach(doc => doc.style.backgroundColor = 'rgb(150, 150, 150)');
    current_mode = "light";
}

// Modifies page styles to mimic dark mode
function set_dark() {
    document.body.style.backgroundColor = 'rgb(50, 50, 50)';
    document.getElementById("lightbulb").src = "img/light_on.png";
    document.querySelectorAll(".toggle").forEach(doc => doc.style.color = 'rgb(92, 230, 96)');
    document.querySelectorAll(".toggle-bg").forEach(doc => doc.style.backgroundColor = 'rgb(92, 230, 96)');
    document.querySelectorAll(".toggle-contrast").forEach(doc => doc.style.backgroundColor = 'rgb(215, 215, 215)');
    current_mode = "dark";
}