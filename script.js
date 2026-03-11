"use strict";

const button = document.getElementById("menuButton");
const drawer = document.getElementById("drawerNav");

button.addEventListener("click", () => {
    drawer.classList.toggle("is-open");

    if (button.classList.contains("is-open")) {
        button.classList.remove("is-open");
        button.classList.add("is-close");
    } else {
        button.classList.remove("is-close");
        button.classList.add("is-open");
    }
});