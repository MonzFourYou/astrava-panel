/**
 * ==========================================
 * Astrava Panel
 * File      : app.js
 * Version   : 1.0.0
 * Author    : MonzFourYou
 * ==========================================
 */

// ==========================================
// Toast Notification
// ==========================================

export function showToast(message, type = "success") {

    let toast = document.getElementById("astrava-toast");

    if (!toast) {

        toast = document.createElement("div");
        toast.id = "astrava-toast";
        document.body.appendChild(toast);

    }

    toast.className = `toast ${type}`;
    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

// ==========================================
// Loading Button
// ==========================================

export function buttonLoading(button, text = "Loading...") {

    button.dataset.originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = text;

}

export function buttonReset(button) {

    button.disabled = false;

    if (button.dataset.originalText) {

        button.innerHTML = button.dataset.originalText;

    }

}

// ==========================================
// Confirm Dialog
// ==========================================

export function confirmAction(message) {

    return confirm(message);

}

// ==========================================
// Validator
// ==========================================

export function isEmpty(value) {

    return value.trim() === "";

}

export function isPhone(number) {

    return /^62[0-9]{8,15}$/.test(number);

}

export function isUrl(url) {

    if (url.trim() === "") return true;

    try {

       