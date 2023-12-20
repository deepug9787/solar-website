"use strict"

/* Site menu */
const hamburgerMenuBtn = document.querySelector(".hamburger-menu-btn")
const closeMenuBtn = document.querySelector(".close-menu-btn")
const siteHeaderNav = document.querySelector(".site-header__nav")
const menuOverlay = document.querySelector(".menu-overlay")

function showMenu() {
    siteHeaderNav.classList.add("show")
    menuOverlay.classList.add("show")
}

function hideMenu() {
    siteHeaderNav.classList.remove("show")
    menuOverlay.classList.remove("show")
}

hamburgerMenuBtn.addEventListener("click", () => showMenu())
closeMenuBtn.addEventListener("click", () => hideMenu())
menuOverlay.addEventListener("click", () => hideMenu())
/* Site menu end */

/* Contact form */
const form = document.querySelector("#contact-form")

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        alert(
            "Sorry, the action you've performed cannot be completed because this website has been built for demo purposes."
        )
    })
}
