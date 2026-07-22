const menu = document.querySelectorAll(".menu-item");

menu.forEach(item => {

    item.addEventListener("click", () => {

        menu.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});
