/*
=========================================
 Astrava Panel
 Bot Manager
 Version : 1.0.0
=========================================
*/

// ===============================
// Element
// ===============================

const botName = document.getElementById("botName");
const prefix = document.getElementById("prefix");
const mode = document.getElementById("mode");
const autoRead = document.getElementById("autoRead");
const welcome = document.getElementById("welcome");

// ===============================
// Save
// ===============================

function saveBot() {

    const botData = {

        botName: botName.value,

        prefix: prefix.value,

        mode: mode.value,

        autoRead: autoRead.value,

        welcome: welcome.value

    };

    localStorage.setItem(
        "astrava_bot",
        JSON.stringify(botData)
    );

    alert("✅ Pengaturan Bot berhasil disimpan!");

}

// ===============================
// Load
// ===============================

function loadBot() {

    const data = JSON.parse(
        localStorage.getItem("astrava_bot")
    );

    if (!data) return;

    botName.value = data.botName || "";

    prefix.value = data.prefix || ".";

    mode.value = data.mode || "public";

    autoRead.value = data.autoRead || "on";

    welcome.value = data.welcome || "on";

}

// ===============================
// Auto Load
// ===============================

window.onload = loadBot;