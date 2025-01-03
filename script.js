function toggleMenu() {
    const upperGrid = document.querySelector(".upper-grid");
    upperGrid.classList.toggle("upper-grid-expanded");

    const header = document.querySelector("header");
    header.classList.toggle("black-header");

    const hamburgerIcon = document.querySelector(".hamburger-icon");

    if (header.classList.contains("black-header")) {
        hamburgerIcon.src = "images/icon-close.svg";
    } else {
        hamburgerIcon.src = "images/icon-hamburger.svg";
    }
}
