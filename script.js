"use strict";

const button = document.getElementById("menuButton");
const drawer = document.getElementById("drawerNav");

button.addEventListener("click", () => {
    button.classList.toggle("is-open");
    drawer.classList.toggle("is-open");
});