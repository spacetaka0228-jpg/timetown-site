"use strict";

const button = document.getElementById("menuButton");
const drawer = document.getElementById("drawerNav");

button.addEventListener("click", () => {
    drawer.classList.toggle("is-open");
});