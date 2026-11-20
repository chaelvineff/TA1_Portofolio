
// ==================================
// 1. PESAN SAMBUTAN
// ==================================

console.log("Selamat datang di Portofolio Chaelvin!");


// ==================================
// 2. MENUTUP NAVBAR DI HP
// ==================================

const menuLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navbarMenu = document.getElementById(
            "navbarMenu"
        );

        if (navbarMenu.classList.contains("show")) {

            const menu = bootstrap.Collapse.getOrCreateInstance(
                navbarMenu
            );

            menu.hide();
        }

    });

});


// ==================================
// 3. MENANDAI MENU YANG AKTIF
// ==================================

const sections = document.querySelectorAll("section[id]");

function updateActiveMenu() {

    let currentSection = "home";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {

            currentSection = section.getAttribute("id");

        }

    });

    menuLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveMenu);

updateActiveMenu();
