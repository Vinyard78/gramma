/*var trouverNoyau = (data) => {
	let res = [];
	for(let mot of data) {

	}
	return res;
};

var decouperDonnees = (data) => {
	data = data.split(" ");
	for(let element of data) {
		if(data.find(",")){

		}
	}
};

var groupes : {
	[
		{
			type: "mot",
			valeur:"un",
			catgram:""
		},{
			type: "Groupe",
			categorie: "nominal",
			abreviation: "GN",
			{
				type: "mot",
				valeur:"grand",
				catgram:""
			}
		},{
			type: "mot",
			valeur:"voyage",
			catgram:""
		}

	]
}

{
	type : "groupe",
	categorie : "nominal",
	abreviation : "GN",
	indiceNoyau : 2,
	composants : [
		{
			type: "mot",
			valeur: "un"
		},{
			type: "groupe",
			categorie : "adjectival",
			abreviation : "GAdj",
			indiceNoyau: 0,
			composants : [
				{
					type: "mot",
					valeur: "grand"
				}
			]
		},{
			type: "mot",
			valeur: "voyage"
		}
	]
}

class mot {
	constructor(){
		this.
	}  
}

class groupe {
	constructor(){

	}
}

composantFactory


recherche de noyaux potentiels
verification si noyau d'un groupe ou non et identification des groupes

recherche de la categorie
correspondance avec categorie des groupes
recherche de groupe de base*/

var data = {
	"mots":[{"results":[{"_id":"5b17c02d07290503dbdf8616","valeur":"la","indicateur":["invariable"],"genre":"masculin","catgram":"nom","definitions":[{"division":[{"contenu":[{"texte":"Note de musique, sixième degré de la gamme d'<i>ut</i>."}]},{"contenu":[{"texte":"Diapason dont la fréquence oscille autour de 440 Hz."}]}]}],"references":{"forme":1,"orthographe":1,"variante":1,"motRef":"la"}},{"_id":"5b17c02d07290503dbdf89d5","valeur":"la","genre":"féminin","nombre":"singulier","catgram":"article défini","origine":"latin <i>ille, illa, illi</i>, ce, cette, ces","definitions":[{"division":[{"contenu":[{"texte":"Déterminant défini d'un groupe nominal, dont il indique le genre et le nombre","exemples":["L'homme est mortel.","La voiture démarre."]}]}]}],"references":{"forme":2,"orthographe":1,"variante":1,"motRef":"le"}},{"_id":"5b17c02d07290503dbdf89d8","valeur":"la","genre":"féminin","nombre":"singulier","catgram":"pronom personnel","definitions":[{"division":[{"contenu":[{"texte":"Pronom atone avant le verbe (ou l'auxiliaire), complément d'objet direct ou attribut (Il s'élide en <i>l'</i>devant une voyelle ou un <i>h</i> muet.)","exemples":["Tu n'es pas compétent, mais tu le deviendras."]}]}]}],"references":{"forme":2,"orthographe":1,"variante":1,"motRef":"le"}}],"index":0},{"results":[{"_id":"5b17c02e07290503dbe04af8","valeur":"voiture","genre":"féminin","catgram":"nom","origine":"latin <i>vectura, </i>de <i>vehere, </i>transporter","definitions":[{"division":[{"contenu":[{"texte":"Véhicule susceptible de conduire, porter ou transporter des personnes ou des marchandises","exemples":["Voiture à bras.","Voiture hippomobile."]}]},{"contenu":[{"texte":"Automobile","exemples":["Il change de voiture tous les ans."]}]},{"contenu":[{"texte":"Véhicule ferroviaire destiné au transport des voyageurs (par opposition au wagon, utilisé pour le transport des marchandises)."}]},{"contenu":[{"texte":"Chargement d'un véhicule, d'un camion, etc.","exemples":["Une voiture de pierres."]}]}]}],"references":{"forme":1,"orthographe":1,"variante":1,"motRef":"voiture"}}],"index":1},{"results":[{"_id":"5b17c02d07290503dbdfff4b","valeur":"roule","genre":"féminin","catgram":"nom","definitions":[{"division":[{"contenu":[{"texte":"Synonyme de enrouloir."}]}]}],"references":{"forme":1,"orthographe":1,"variante":1,"motRef":"roule"}}],"index":2},{"results":[{"_id":"5b17c02e07290503dbe03a55","valeur":"vers","catgram":"préposition","origine":"latin <i>versus</i>, du côté de, de <i>vertere</i>, tourner","definitions":[{"textePresentatif":"Indique :","division":[{"contenu":[{"texte":"la direction dans laquelle un mouvement se fait","exemples":["Il se tourna vers moi."]}]},{"contenu":[{"texte":"l'orientation, le point, le côté vers lesquels est orienté quelque chose","exemples":["La façade de l'immeuble regarde vers le sud."]}]},{"contenu":[{"texte":"l'orientation des idées, des aspirations de quelqu'un, le terme ou le sens de l'évolution de quelque chose, d'un processus","exemples":["Être porté vers l'action.","Le temps évolue vers le beau."]}]},{"contenu":[{"texte":"l'approximation, devant l'expression d'une heure, d'une date","exemples":["Cette fête a lieu vers la mi-juin."]}]},{"contenu":[{"texte":"la région proche, voisine, les alentours devant l'expression d'un lieu","exemples":["Vers 2 000 m d'altitude, la végétation se raréfie."]}]}]}],"references":{"forme":1,"orthographe":1,"variante":1,"motRef":"vers"}},{"_id":"5b17c02e07290503dbe03a56","valeur":"vers","genre":"masculin","catgram":"nom","origine":"latin <i>versus</i>","definitions":[{"division":[{"contenu":[{"texte":"Assemblage de mots, mesurés selon certaines règles (coupe, rime, etc.), rythmés d'après la quantité des syllabes, comme chez les Grecs et les Latins <i>(vers métriques)</i>, d'après leur nombre, comme en France <i>(vers syllabiques)</i>, ou d'après l'accentuation comme chez les Anglais et les Allemands <i>(vers rythmiques)</i>."}]}]}],"references":{"forme":1,"orthographe":1,"variante":1,"motRef":"vers"}}],"index":3},{"results":[{"_id":"5b17c02d07290503dbdf8616","valeur":"la","indicateur":["invariable"],"genre":"masculin","catgram":"nom","definitions":[{"division":[{"contenu":[{"texte":"Note de musique, sixième degré de la gamme d'<i>ut</i>."}]},{"contenu":[{"texte":"Diapason dont la fréquence oscille autour de 440 Hz."}]}]}],"references":{"forme":1,"orthographe":1,"variante":1,"motRef":"la"}},{"_id":"5b17c02d07290503dbdf89d5","valeur":"la","genre":"féminin","nombre":"singulier","catgram":"article défini","origine":"latin <i>ille, illa, illi</i>, ce, cette, ces","definitions":[{"division":[{"contenu":[{"texte":"Déterminant défini d'un groupe nominal, dont il indique le genre et le nombre","exemples":["L'homme est mortel.","La voiture démarre."]}]}]}],"references":{"forme":2,"orthographe":1,"variante":1,"motRef":"le"}},{"_id":"5b17c02d07290503dbdf89d8","valeur":"la","genre":"féminin","nombre":"singulier","catgram":"pronom personnel","definitions":[{"division":[{"contenu":[{"texte":"Pronom atone avant le verbe (ou l'auxiliaire), complément d'objet direct ou attribut (Il s'élide en <i>l'</i>devant une voyelle ou un <i>h</i> muet.)","exemples":["Tu n'es pas compétent, mais tu le deviendras."]}]}]}],"references":{"forme":2,"orthographe":1,"variante":1,"motRef":"le"}}],"index":4},{"results":[{"_id":"5b17c02e07290503dbe04ae8","valeur":"ville","genre":"féminin","catgram":"nom","origine":"latin <i>villa,</i> maison de campagne","definitions":[{"division":[{"contenu":[{"texte":"Agglomération relativement importante et dont les habitants ont des activités professionnelles diversifiées. (Sur le plan statistique, une ville compte au moins 2 000 habitants agglomérés.)"}]},{"contenu":[{"texte":"Ensemble des habitants de cette agglomération","exemples":["Toute la ville est en émoi."]}]},{"contenu":[{"texte":"Les habitants des villes, par opposition aux gens de la campagne ou, jadis, de la Cour."}]},{"contenu":[{"texte":"Vie que l'on mène en ville","exemples":["Préférer la ville à la campagne."]}]},{"contenu":[{"texte":"Administration de la ville","exemples":["Être chauffé par la ville."]}]},{"contenu":[{"texte":"Partie d'une agglomération constituant une entité particulière","exemples":["La vieille ville."]}]}]}],"references":{"forme":1,"orthographe":1,"variante":1,"motRef":"ville"}}],"index":5}],"motsTab":["la","voiture","roule","vers","la","ville"],
	"motsTab": ["la","voiture","roule","vers","la","ville"]
};

var listeDeterminants = [
	"article indéfini",
    "article défini",
    "article",
    "adjectif démonstratif",
    "adjectif numéral cardinal",
    "adjectif numéral ordinal",
    "adjectif indéfini",
    "adjectif numéral",
    "adjectif possessif",
    "adjectif exclamatif",
    "adjectif interrogatif",
];

var isDeterminant = function(mot){
	let res = false;
	mot.results.forEach((result)=>{
		if(listeDeterminants.indexOf(result.catgram) > -1) res = true;
	});
	return res;
};

var isNom = function(mot){
	let res = false; 
	mot.results.forEach((result)=>{
		if(result.catgram === "nom") res = true;
	});
	return res;
};

// Recherche des groupes nominaux de base
var rechercheGN = function(mots){
	mots.forEach((mot)=>{
		if(isNom(mot) && mots[mot.index-1] && isDeterminant(mots[mot.index-1])){
			console.dir(`${mots[mot.index-1].results[0].valeur} ${mot.results[0].valeur}`);
		}
	});
};

rechercheGN(data.mots);