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

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("hamburg").style.backgroundColor = "black";
//   } else {
//     document.getElementById("hamburg").style.backgroundColor = "white";
//   }
//   prevScrollpos = currentScrollPos;
// }