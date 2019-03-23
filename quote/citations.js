
// Projet de Free Code Camp, random quote machine, 5 janvier 2018


//Création de la liste d'objets de citation
var listeCitations = [];

//constructeur de l'objet Citation
function Citation(phrase, auteur) {
	this.phrase = phrase;
}

//Création des objets
var citation0 = new Citation("Cela semble toujours impossible, jusqu'à ce qu'on le fasse - Nelson Mandela");
var citation1 = new Citation("L'éducation est votre arme la plus puissante pour changer le monde - Nelson Mandela");
var citation2 = new Citation("Il ne peut y avoir plus vive révélation de l'âme d'une société que la manière dont elle traite ses enfants - Nelson Mandela");
var citation3 = new Citation("La victoire sur soi est la plus grande des victoires - Platon");
var citation4 = new Citation("L'essentiel n'est pas de vivre, mais de bien vivre - Platon");
var citation5 = new Citation("Chacun, parce qu'il pense, est seul responsable de la sagesse ou de la folie de sa vie, c'est-à-dire de sa destinée - Platon");
var citation6 = new Citation("La connaissance des mots conduit à la connaissance des choses - Platon");
var citation7 = new Citation("La règle d'or de la conduite est la tolérance mutuelle, car nous ne penserons jamais tous de la même façon, nous ne verrons qu'une partie de la vérité et sous des angles différents - Ghandi");
var citation8 = new Citation("Que la force me soit donnée de supporter ce qui ne peut être changé et le courage de changer ce qui peut l'être mais aussi la sagesse de distinguer l'un de l'autre - Marc Aurèle");
var citation9 = new Citation("C'est une erreur de croire nécessairement faux ce qu'on ne comprend pas - Ghandi");
var citation10 = new Citation("Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours -Gandhi");
var citation11 = new Citation("Vous devez être le changement que vous voulez voir dans ce monde - Gandhi");
var citation12 = new Citation("L'homme ordinaire est exigeant avec les autres. L'homme exceptionnel est exigeant avec lui-même - Marc Aurèle");
var citation13 = new Citation("Tout ce qui paraît au-dessus de tes forces n'est pas forcément impossible ; mais tout ce qui est possible à l'homme ne peut être au-dessus de tes forces - Marc Aurèle");
var citation14 = new Citation("Qui vit en paix avec lui-même vit en paix avec l'univers - Marc Aurèle");
var citation15 = new Citation("On n'est pas moins fautif en ne faisant pas ce qu'on doit faire qu'en faisant ce qu'on ne doit pas faire - Marc Aurèle");
var citation16 = new Citation("Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés - Confucius");
var citation17 = new Citation("Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie - Confucius");
var citation18 = new Citation("Lorsque l'on se cogne la tête contre un pot et que cela sonne creux, ça n'est pas forcément le pot qui est vide - Confucius");
var citation19 = new Citation("L'homme de bien ne demande rien qu'à lui-même ; l'homme de peu demande tout aux autres - Confucius");
var citation20 = new Citation("L'expérience est une lanterne attachée dans notre dos, qui n'éclaire que le chemin parcouru - Confucius");
var citation21 = new Citation("Quand un homme a faim, mieux vaut lui apprendre à pêcher que de lui donner un poisson - Confucius");
var citation22 = new Citation("Celui qui ne progresse pas chaque jour, recule chaque jour - Confucius");
var citation23 = new Citation("La vie est une succession de leçons qu'il faut avoir vécues pour les comprendre - Hélène Keller");
var citation24 = new Citation("Quand une porte du bonheur se ferme, une autre s'ouvre, mais souvent nous regardons si longtemps la porte fermée que nous ne voyons pas celle qu'on a ouverte pour nous - Hélène Keller");
var citation25 = new Citation("Le principal fléau de l'humanité n'est pas l'ignorance, mais le refus de savoir - Simone de Beauvoir");
var citation26 = new Citation("N'oubliez jamais qu'il suffira d'une crise politique, économique ou religieuse pour que les droits des femmes soient remis en question - Simone de Beauvoir");
var citation27 = new Citation("Qui se marie pour l'argent gagne chaque centime - Anonyme");


//Publicaiton des objets dans la liste
listeCitations.push(citation0);
listeCitations.push(citation1);
listeCitations.push(citation2);
listeCitations.push(citation3);
listeCitations.push(citation4);
listeCitations.push(citation5);
listeCitations.push(citation6);
listeCitations.push(citation7);
listeCitations.push(citation8);
listeCitations.push(citation9);
listeCitations.push(citation10);
listeCitations.push(citation11);
listeCitations.push(citation12);
listeCitations.push(citation13);
listeCitations.push(citation14);
listeCitations.push(citation15);
listeCitations.push(citation16);
listeCitations.push(citation17);
listeCitations.push(citation18);
listeCitations.push(citation19);
listeCitations.push(citation20);
listeCitations.push(citation21);
listeCitations.push(citation22);
listeCitations.push(citation23);
listeCitations.push(citation24);
listeCitations.push(citation25);
listeCitations.push(citation26);
listeCitations.push(citation27);



//Création de citations au hasard



function citeMoi() {
  var randomCitation = listeCitations[Math.floor(Math.random()*listeCitations.length)].phrase ;
	document.getElementById("quote").innerHTML = randomCitation.toString();
}


//fait fonctionner le bouton "Nouvelle citation"
document.getElementById("bouton").addEventListener("click", citeMoi);

//fait fonctionner le bouton "Tweet moi"
document.getElementById("bouton2").addEventListener("click", function(){
    var monTexte = document.getElementById("quote").innerHTML;
  var link= "https://twitter.com/intent/tweet?text="+ monTexte +"&hashtags=citation";
    window.open(link,'_blank');
});

//appel de la fonction
citeMoi();


//fait changer le titre du document

function changeTitre() {
	document.getElementById("titre").innerHTML = "Partage ta citation préférée sur Twitter!";
}

function changeTitre2() {
	document.getElementById("titre").innerHTML = "Mes citations préférées";
}

document.querySelector("h1").addEventListener("mouseenter", changeTitre);
document.querySelector("h1").addEventListener("mouseleave", changeTitre2);

