

// Fonction pour changer la couleur du texte du paragraphe à chaque clic
function changeTextColor() {
    var p = document.getElementById("about").getElementsByTagName("p")[0];
    var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "brown", "grey", "white", "cyan", "magenta", "silver", "gold"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.color = randomColor;
}

// Ajout d'un gestionnaire d'événement pour le clic sur le paragraphe
document.getElementById("about").getElementsByTagName("p")[0].addEventListener("mouseover", changeTextColor);


