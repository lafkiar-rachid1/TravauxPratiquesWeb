function changerTexte() {
  const paragraphe = document.querySelector("#texte1");
  paragraphe.innerText = "Texte modifie !";
}

function changerCouleur() {
  const titre = document.querySelector("#titre2");
  titre.style.color = "red";
}

function changerCouleurVert() {
  const titre = document.querySelector("#titre2");
  titre.style.color = "green";
}

function changerCouleurBleu() {
  const titre = document.querySelector("#titre2");
  titre.style.color = "blue";
}

function ajouterContenu() {
  const conteneur = document.querySelector("#conteneur3");
  conteneur.innerHTML = "<h4>Nouveau titre</h4><p>Nouveau paragraphe</p>";
}

function effacerContenu() {
  const conteneur = document.querySelector("#conteneur3");
  conteneur.innerHTML = "";
}

function ajouterClasse() {
  const paragraphe = document.querySelector("#paragraphe4");
  paragraphe.classList.add("rouge", "grand-texte");
}

function enleverClasse() {
  const paragraphe = document.querySelector("#paragraphe4");
  paragraphe.classList.remove("rouge", "grand-texte");
}

function basculerClasse() {
  const paragraphe = document.querySelector("#paragraphe4");
  paragraphe.classList.toggle("bordure");
}

function colorierTous() {
  const items = document.querySelectorAll(".item");
  for (let i = 0; i < items.length; i += 1) {
    items[i].classList.add("fond-jaune");
  }
}

function numeroteTous() {
  const items = document.querySelectorAll(".item");
  for (let i = 0; i < items.length; i += 1) {
    const texte = items[i].innerText.replace(/^\d+\.\s*/, "");
    items[i].innerText = `${i + 1}. ${texte}`;
  }
}

function changerFond(couleur, boiteCliquee) {
  document.querySelector("body").style.backgroundColor = couleur;

  const boites = document.querySelectorAll(".boite");
  for (let i = 0; i < boites.length; i += 1) {
    boites[i].classList.remove("actif");
  }

  if (boiteCliquee) {
    boiteCliquee.classList.add("actif");
  }
}

function reinitialiserFond() {
  document.querySelector("body").style.backgroundColor = "#f5f5f5";

  const boites = document.querySelectorAll(".boite");
  for (let i = 0; i < boites.length; i += 1) {
    boites[i].classList.remove("actif");
  }
}

function afficherNom() {
  const nom = document.querySelector("#nom").value.trim();
  const affichage = document.querySelector("#affichage7");

  if (nom === "") {
    affichage.innerText = "Votre nom apparaitra ici";
  } else {
    affichage.innerText = `Bonjour ${nom} !`;
  }
}

function appliquerCouleur() {
  const couleur = document.querySelector("#couleur").value;
  const affichage = document.querySelector("#affichage7");
  affichage.style.color = couleur;
}

function ajouterTache() {
  const champ = document.querySelector("#tache");
  const liste = document.querySelector("#listeTaches");
  const texte = champ.value.trim();

  if (texte === "") {
    return;
  }

  liste.innerHTML += `<li>${texte} <button onclick="supprimerTache(this)">X</button></li>`;
  champ.value = "";
}

function supprimerTache(bouton) {
  bouton.parentElement.remove();
}

function effacerTout() {
  const liste = document.querySelector("#listeTaches");
  liste.innerHTML = "";
}

let compteurValeur = 0;

function incrementer() {
  compteurValeur += 1;
  const compteur = document.querySelector("#compteur");
  compteur.innerText = compteurValeur;
  ajusterCouleur(compteurValeur);
}

function decrementer() {
  compteurValeur -= 1;
  const compteur = document.querySelector("#compteur");
  compteur.innerText = compteurValeur;
  ajusterCouleur(compteurValeur);
}

function reinitialiser() {
  compteurValeur = 0;
  const compteur = document.querySelector("#compteur");
  compteur.innerText = compteurValeur;
  ajusterCouleur(compteurValeur);
}

function ajusterCouleur(valeur) {
  const compteur = document.querySelector("#compteur");

  if (valeur > 0) {
    compteur.style.color = "green";
  } else if (valeur < 0) {
    compteur.style.color = "red";
  } else {
    compteur.style.color = "black";
  }
}

function afficherOnglet(numero) {
  const contenus = document.querySelectorAll(".contenu-onglet");
  for (let i = 0; i < contenus.length; i += 1) {
    contenus[i].classList.remove("visible");
    contenus[i].classList.add("cache");
  }

  const contenuActif = document.querySelector(`#contenu${numero}`);
  if (contenuActif) {
    contenuActif.classList.remove("cache");
    contenuActif.classList.add("visible");
  }

  const boutons = document.querySelectorAll(".onglet");
  for (let i = 0; i < boutons.length; i += 1) {
    boutons[i].classList.remove("actif");
  }

  if (boutons[numero - 1]) {
    boutons[numero - 1].classList.add("actif");
  }
}
