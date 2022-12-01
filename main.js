const hamburg = document.querySelector(".hamburg");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        hamburg.classList.add("hamburg--hidden");
    } else {
        hamburg.classList.remove("hamburg--hidden");
    }

    lastScrollY = window.scrollY;
});