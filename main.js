/* BUTTON ROLL DICE START*/ 

const button  = document.getElementById("roll-dice");
const loadScoreButton = document.getElementById("load-score");
const newGameButton = document.getElementById("newGameButton");
const turnMessageElement = document.getElementById("turn-message");
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

// Fonction pour mettre à jour le message du tour du joueur

function updateTurnMessage() {
    turnMessageElement.textContent = `Jeu du Joueur ${currentPlayer}`;
  }
  
  // Appelez la fonction pour définir le message initial

  updateTurnMessage();

  // Fonction pour Bouton Lancer les dès

function evenementPlayer() {

    // Générer un nombre aléatoire entre 1 et 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
 
    // Construire le chemin de l'image en fonction du nombre aléatoire
    const imageURL = `./images/des${randomNumber}.png`;

    // Créez un nouvel élément img et définition de l'attribut src sur l'URL de l'image
    imageElement.setAttribute("src", imageURL);

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('icon-margin');
    iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-emoji-smile-upside-down-fill" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zM4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM10 8c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5 1-.672 1-1.5S10.552 8 10 8z"/>
  </svg>`;

     // Si le nombre aléatoire est égal à 1, réinitialisez le score courant et changez de joueur
     if (randomNumber === 1) {
        if (currentPlayer === 1) {
            currentScore = 0;
            currentScoreElement.textContent = currentScore;
            messageElement.textContent = `Joueur${currentPlayer}, passez votre tour ! Vous avez un dé de 1 !`;
            messageElement.appendChild(iconSpan);
            messageElement.style.display = "block";
        } else {
            currentScore2 = 0;
            currentScoreElement2.textContent = currentScore2;
            messageElement.textContent = `Joueur${currentPlayer}, passez votre tour ! Vous avez un dé de 1 !`;
            messageElement.appendChild(iconSpan);
            messageElement.style.display = "block";
        }

     // Changer de joueur
     currentPlayer = (currentPlayer === 1) ? 2 : 1;
     updateTurnMessage();
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

 // Fonction pour bouton Charger le score

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
            const winnerIconSpan = document.createElement('span');
            winnerIconSpan.classList.add('winner-icon-margin');
            winnerIconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
            </svg>`;
            winnerMessageElement.textContent = 'Le joueur 1 a gagné !';
            winnerMessageElement.appendChild(winnerIconSpan);
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
            const winnerIconSpan = document.createElement('span');
            winnerIconSpan.classList.add('winner-icon-margin');
            winnerIconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
            </svg>`;
            winnerMessageElement.textContent = 'Le joueur 2 a gagné !';
            winnerMessageElement.appendChild(winnerIconSpan);
            winnerMessageElement.style.display = 'block';

            // Désactiver les boutons pour arrêter le jeu
            button.disabled = true;
            loadScoreButton.disabled = true;
        }
    }

    // Changer de joueur
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    updateTurnMessage();
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

  // Mettre les compteurs de joueur à zéro 
 
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