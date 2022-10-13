function muestra() {
    var box = document.querySelector(".muestra");
    box.setAttribute("class", "box mostrado");
    var box2 = document.querySelector(".oculto");
    var button = document.querySelector(".button-28");
    if (box2 != null) {
        box2.setAttribute("class", "box muestra");
    } else {
        button.style.display = "none";
        var caja = document.createElement("div");
        caja.setAttribute("class", "box")
        let setImage = document.createElement("img")
        setImage.setAttribute("src", "https://media.giphy.com/media/keTwQbbQwlNM2RNJsW/giphy.gif")
        caja.appendChild(setImage);
        document.body.appendChild(caja);
    }
}