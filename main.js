/* BUTTON ROLL DICE START*/ 

const button  = document.getElementById("roll-dice");
const loadScoreButton = document.getElementById("load-score");
const newGameButton = document.getElementById("newGameButton");
const player1GlobalScoreElement = document.getElementById('player1-global-score');
const player2GlobalScoreElement = document.getElementById('player2-global-score');
const imageElement = document.getElementById("image-container");
const currentScoreElement = document.getElementById("cloud-number1");
const currentScoreElement2 = document.getElementById("cloud-number2");
const winnerMessageElement = document.getElementById("winnerMessage");
const messageElement = document.getElementById("losemessage");

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

     // Si le nombre aléatoire est égal à 1, réinitialisez le score courant et changez de joueur
     if (randomNumber === 1) {
        if (currentPlayer === 1) {
            currentScore = 0;
            currentScoreElement.textContent = currentScore;
            messageElement.textContent = "Passez votre tour! Vous avez un dé de 1!";
            messageElement.style.display = "block";
        } else {
            currentScore2 = 0;
            currentScoreElement2.textContent = currentScore2;
            messageElement.textContent = "Passez votre tour! Vous avez un dé de 1!";
            messageElement.style.display = "block";
        }

     // Changer de joueur
     currentPlayer = (currentPlayer === 1) ? 2 : 1;
    } else {
        // Mettre à jour le score courant avec le nombre aléatoire
        if (currentPlayer === 1) {
            currentScore = randomNumber;
            currentScoreElement.textContent = currentScore;
           
        } else {
            currentScore2 = randomNumber;
            currentScoreElement2.textContent = currentScore2;
           
        }
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
            winnerMessageElement.textContent = 'Le joueur 1 a gagné !';
            winnerMessageElement.style.display = 'block';

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
            winnerMessageElement.textContent = 'Le joueur 2 a gagné !';
            winnerMessageElement.style.display = 'block';

            // Désactiver les boutons pour arrêter le jeu
            button.disabled = true;
            loadScoreButton.disabled = true;
        }
    }

    // Changer de joueur
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
}

button.addEventListener("click", () =>{
    messageElement.style.display = "none";
    evenementPlayer();
});

loadScoreButton.addEventListener("click",() =>{
    messageElement.style.display = "none";
    loadScorePlayer();
});

// Fonction pour réinitialiser les compteurs des joueurs
function resetCounters() {

  // Mettez les compteurs de joueur à zéro ici
  // Par exemple :
  currentScore = 0;
  currentScore2 = 0;
  player1GlobalScore = 0;
  player2GlobalScore = 0;

    // Mettre à jour les éléments HTML pour afficher les nouveaux scores
    currentScoreElement.textContent = currentScore;
    currentScoreElement2.textContent = currentScore2;
    player1GlobalScoreElement.textContent = player1GlobalScore;
    player2GlobalScoreElement.textContent = player2GlobalScore;

    button.disabled = false;
    loadScoreButton.disabled = false;
    winnerMessageElement.style.display = 'none';
 
}

newGameButton.addEventListener("click", () => {
  resetCounters();

});



/* BUTTON ROLL DICE END*/ 