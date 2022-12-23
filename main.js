window.addEventListener("scroll", () => {
    if(window.scrollY <= 50) {
        document.getElementById("arrowdown").classList.remove("faded")
    }
    else{
        document.getElementById("arrowdown").classList.add("faded")
    }
});

function ImgClick(n){
    document.getElementById("im"+n).classList.toggle("imgtoggle")
    document.getElementById("tx"+n).classList.toggle("desctoggle")
}

function MenuClick(){
    document.getElementById("menupopup").classList.toggle("menu_pop_open")
    document.getElementById("menupopupside").classList.toggle("menu_pop_side_open")
    document.getElementById("menupopupbox").classList.toggle("menu_pop_box_open")
    document.body.classList.toggle("stop_scroll");
}