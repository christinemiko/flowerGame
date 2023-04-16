/* BUTTON ROLL DICE START*/ 

const button  = document.getElementById("roll-dice");
const imageElement = document.getElementById("image-container");

function evenement() {

    // Générer un nombre aléatoire entre 1 et 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
 
    // Construire le chemin de l'image en fonction du nombre aléatoire
    const imageURL = "./images/des" + randomNumber +".png";

    // Créez un nouvel élément img et définissez son attribut src sur l'URL de l'image
    imageElement.setAttribute("src", imageURL);
}

button.addEventListener("click", evenement);

evenement();

/* BUTTON ROLL DICE END*/ 