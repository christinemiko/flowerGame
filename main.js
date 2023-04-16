/* BUTTON ROLL DICE START*/ 

const button  = document.getElementById("roll-dice");
const loadScoreButton = document.getElementById("load-score");
const player1GlobalScoreElement = document.getElementById('player1-global-score');
const player2GlobalScoreElement = document.getElementById('player2-global-score');
const imageElement = document.getElementById("image-container");
const currentScoreElement = document.getElementById("cloud-number1");
const currentScoreElement2 = document.getElementById("cloud-number2");

// Ajouter une variable pour déterminer le joueur en cours
let currentPlayer = 1;
// Ajouter une variable pour stocker le score
let currentScore = 0;
let currentScore2 = 0;
let player1GlobalScore = 0;
let player2GlobalScore = 0;

function evenementPlayer() {

    // Générer un nombre aléatoire entre 1 et 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
 
    // Construire le chemin de l'image en fonction du nombre aléatoire
    const imageURL = `./images/des${randomNumber}.png`;

    // Créez un nouvel élément img et définissez son attribut src sur l'URL de l'image
    imageElement.setAttribute("src", imageURL);

      // Mettre à jour le score courant avec le nombre aléatoire
      if (currentPlayer === 1) {
        currentScore = randomNumber;
        currentScoreElement.textContent = currentScore;
    } else {
        currentScore2 = randomNumber;
        currentScoreElement2.textContent = currentScore2;
    }
}

function loadScorePlayer() {
    if (currentPlayer === 1) {
        // Mettre à jour le score global en ajoutant le score courant
        player1GlobalScore += currentScore;
        player1GlobalScoreElement.textContent = player1GlobalScore;

        // Réinitialiser le score courant
        currentScore = 0;
        currentScoreElement.textContent = currentScore;

        // Vérifier si le joueur a gagné
        if (player1GlobalScore >= 100) {
            // Afficher un message pour annoncer le gagnant
            alert('Le joueur 1 a gagné !');

            // Désactiver les boutons pour arrêter le jeu
            button.disabled = true;
            loadScoreButton.disabled = true;
        }
    } else {
        // Mettre à jour le score global en ajoutant le score courant
        player2GlobalScore += currentScore2;
        player2GlobalScoreElement.textContent = player2GlobalScore;

        // Réinitialiser le score courant
        currentScore2 = 0;
        currentScoreElement2.textContent = currentScore2;

        // Vérifier si le joueur a gagné
        if (player2GlobalScore >= 100) {
            // Afficher un message pour annoncer le gagnant
            alert('Le joueur 2 a gagné !');

            // Désactiver les boutons pour arrêter le jeu
            button.disabled = true;
            loadScoreButton.disabled = true;
        }
    }

    // Changer de joueur
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
}


button.addEventListener("click", evenementPlayer);
loadScoreButton.addEventListener("click", loadScorePlayer);

//evenement(); concerne le rechargement de page

/* BUTTON ROLL DICE END*/ 