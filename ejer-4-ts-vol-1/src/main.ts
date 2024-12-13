const hamburgerMenu = document.querySelector(".hamburger-menu") as HTMLInputElement
const links = document.querySelector(".links") as HTMLDivElement

hamburgerMenu.addEventListener("click", () => links.classList.toggle("mobile-hidden"))

