/*
====================================
 Astrava Panel
 app.js
====================================
*/

// ================================
// Logout
// ================================

function logout() {

    const confirmLogout = confirm("Yakin ingin logout?");

    if (confirmLogout) {
        window.location.href = "../index.html";
    }

}

// ================================
// Card Hover Animation
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ================================
// Greeting
// ================================

const hour = new Date().getHours();

let greeting = "Welcome";

if (hour < 12) {

    greeting = "🌤 Good Morning";

} else if (hour < 18) {

    greeting = "☀ Good Afternoon";

} else {

    greeting = "🌙 Good Evening";

}

console.log(greeting + " Administrator");

// ================================
// Version
// ================================

const PANEL_VERSION = "1.0.0";

console.log("Astrava Panel v" + PANEL_VERSION);