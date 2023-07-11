/*jshint esversion: 6 */
var human = [];
var citizens = 0;
var DNA = {
	1: "A",
	2: "C",
	3: "G",
	4: "T"
};
var men = [];
var women = [];
var cheaters = [];
var children = [];
function randomGaussian(mean, standardDeviation) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * standardDeviation + mean;
}
const mascNames = [ 'Achilleus', 'Acrisius', 'Adonis', 'Aeneas', 'Agapios', 'Agathias', 'Alcander', 'Alexandros', 'Amphion', 'Anaximander', 'Andromache', 'Apollon', 'Apostolos', 'Aristarchos', 'Aristeas', 'Aristides', 'Atreus', 'Bellerophon', 'Cassander', 'Cepheus', 'Chryses', 'Cimon', 'Democritus', 'Dionysios', 'Eirene', 'Epaphroditus', 'Ephraim', 'Eubulus', 'Eudoxia', 'Euphrosyne', 'Evander', 'Helios', 'Hephaestus', 'Heracles', 'Hermes', 'Hippocrates', 'Hyperion', 'Ion', 'Lysander', 'Megaera', 'Miltiades', 'Narcissus', 'Nestor', 'Nikodemos', 'Nikolaos', 'Odysseus', 'Olympios', 'Orion', 'Pandora', 'Paris', 'Penelope', 'Perseus', 'Philemon', 'Phoenix', 'Plutarch', 'Polyxeni', 'Pythagoras', 'Sotiris', 'Stavros', 'Tatianos', 'Theodore', 'Theodosios', 'Theophanes', 'Xenophon', 'Zetes', 'Achaea', 'Adrastos', 'Agapios', 'Agathon', 'Aglaea', 'Akakios', 'Alcestis', 'Aletheios', 'Aletes', 'Alkaios', 'Amphitryon', 'Anastasios', 'Andreas', 'Antheios', 'Antonios', 'Apollonios', 'Aristaios', 'Aristarchos', 'Aristokles', 'Ariston', 'Aristophanes', 'Aristotelis', 'Artemon', 'Asklipios', 'Atreides', 'Chariton', 'Chrysanthos', 'Damianos', 'Dimitrios', 'Dionysios', 'Eleutherios', 'Epaminondas', 'Ephraim', 'Eugenios', 'Euthymios', 'Evangelos', 'Galenos', 'Georgios', 'Gregorios', 'Hektor', 'Hermogenes', 'Iason', 'Isidoros', 'Kleisthenes', 'Konstantinos', 'Lazaros', 'Leonidas', 'Leontios', 'Menelaos', 'Nereus', 'Nikandros', 'Niketas', 'Orestes', 'Petros', 'Philemon', 'Philotheos', 'Pyrrhos', 'Sebastianos', 'Sotirios', 'Spyridon', 'Stamatios', 'Theodoros', 'Xenokrates', 'Zephyros' ];
const femNames = [ 'Acantha', 'Adrasteia', 'Aegina', 'Agape', 'Aglaia', 'Agrippa', 'Akakia', 'Alcestis', 'Alexandra', 'Althea', 'Amara', 'Anastasia', 'Anemone', 'Antheia', 'Antigone', 'Apollonia', 'Arete', 'Ariadne', 'Artemisia', 'Aspasia', 'Athena', 'Cassandra', 'Chloe', 'Cora', 'Danae', 'Demetria', 'Dione', 'Eirene', 'Elara', 'Elysia', 'Eudora', 'Eugenia', 'Eunice', 'Euphemia', 'Euphrasia', 'Gaiane', 'Harmonia', 'Helene', 'Hero', 'Ianthe', 'Iphigenia', 'Kalliope', 'Kassia', 'Kleopatra', 'Kyriake', 'Lamia', 'Leda', 'Leontios', 'Leto', 'Lydia', 'Megaera', 'Melina', 'Melissa', 'Narcissa', 'Nausicaa', 'Nefeli', 'Nikolina', 'Ophelia', 'Pandora', 'Penelope', 'Persephone', 'Phaedra', 'Philea', 'Phoebe', 'Polyxena', 'Sappho', 'Seraphina', 'Sibylla', 'Sophia', 'Theodora', 'Theodosia', 'Theophania', 'Xanthia', 'Zoe', 'Achaea', 'Agapi', 'Agathoklea', 'Aglaea', 'Akilina', 'Alkmene', 'Amphitrite', 'Anastasia', 'Andromache', 'Antheia', 'Antonina', 'Aphrodite', 'Arete', 'Artemis', 'Astraea', 'Chrysanthe', 'Cleopatra', 'Cybele', 'Daphne', 'Despina', 'Dorothea', 'Eirene', 'Elpis', 'Eudokia', 'Eugenia', 'Eunike', 'Euphrosyne', 'Galene', 'Harmonia', 'Helena', 'Hermione', 'Iolanthe', 'Isidora', 'Kallista', 'Kassiane', 'Kleio', 'Kleonike', 'Lamia', 'Leda', 'Leontia', 'Melaina', 'Nausicaa', 'Nefeli', 'Nikoleta', 'Olympias', 'Pandora', 'Penelope', 'Persephone', 'Phaedra', 'Philea', 'Phoebe', 'Polyxena', 'Sappho', 'Seraphina', 'Sibylla', 'Sophia', 'Theodora', 'Theodosia', 'Theophania', 'Xanthia', 'Zoe', 'Achaea', 'Agapi', 'Agathoklea', 'Aglaea', 'Akilina', 'Alkmene', 'Amphitrite', 'Anastasia', 'Andromache', 'Antheia', 'Antonina', 'Aphrodite', 'Arete', 'Artemis', 'Astraea', 'Chrysanthe', 'Cleopatra', 'Cybele', 'Daphne', 'Despina', 'Dorothea', 'Eirene', 'Elpis', 'Eudokia', 'Eugenia', 'Eunike', 'Euphrosyne', 'Galene', 'Harmonia', 'Helena', 'Hermione', 'Iolanthe', 'Isidora', 'Kallista', 'Kassiane', 'Kleio', 'Kleonike', 'Lamia', 'Leda', 'Leontia', 'Melaina', 'Nausicaa', 'Nefeli', 'Nikoleta', 'Olympias', 'Pandora', 'Penelope', 'Persephone', 'Phaedra', 'Philea', 'Phoebe', 'Polyxena', 'Sappho', 'Seraphina', 'Sibylla', 'Sophia', 'Theodora', 'Theodosia', 'Theophania', 'Xanthia', 'Zoe' ];
const lastNames = [ 'Alexandropoulos', 'Antoniadis', 'Apostolou', 'Argyropoulos', 'Athanasopoulos', 'Chrysostomou', 'Constantinidis', 'Demetriou', 'Eleftheriou', 'Georgiou', 'Kalogeropoulos', 'Kouros', 'Laskaris', 'Makris', 'Nikolaou', 'Papadakis', 'Papadopoulos', 'Papanikolaou', 'Papathanasiou', 'Pappas', 'Patelis', 'Sakellaropoulos', 'Samaras', 'Sotiropoulos', 'Stamatopoulos', 'Theodorou', 'Vlachos', 'Zervos', 'Zografos', 'Aggelopoulos', 'Anastasiadis', 'Andreadis', 'Antonopoulos', 'Avgeropoulos', 'Chrysanthopoulos', 'Dimitriadis', 'Doulis', 'Economou', 'Fotopoulos', 'Gavrilidis', 'Ioannidis', 'Karamanlis', 'Karatzaferis', 'Karatzas', 'Kasidiaris', 'Kavvadias', 'Kokkalis', 'Korakis', 'Kosmas', 'Lazopoulos', 'Markopoulos', 'Michalopoulos', 'Nikolaidis', 'Papadiamantis', 'Papadimitriou', 'Papakonstantinou', 'Papandreou', 'Papazoglou', 'Pavlou', 'Polydorou', 'Samaris', 'Savvidis', 'Sofokleous', 'Stefanopoulos', 'Tsiolis', 'Tsipras', 'Vassilopoulos', 'Xenakis', 'Zachariou', 'Zafeiropoulos', 'Ziogas', 'Zolotas' ];
const skillDictionary = {
  A: {archery: 20, running: 19, navigation: 18, drunkeness: 17, charisma: 16, quarrying: 15, endurance: 14, grit: 13, hunger: 12, intelligence: 11, luck: 10, kindness: 9, music: 8, faith: 7, promiscuous: 6, strength:5, teaching: 4, weaving: 3, yield: 2, virtue:1},
  R: {running: 20, navigation: 19, drunkeness: 18, charisma: 17, quarrying: 16, endurance: 15, grit: 14, hunger: 13, intelligence: 12, luck: 11, kindness: 10, music: 9, faith: 8, promiscuous: 7, strength:6, teaching: 5, weaving: 4, yield: 3, virtue: 2, archery:1},
  N: {navigation: 20, drunkeness: 19, charisma: 18, quarrying: 17, endurance: 16, grit: 15, hunger: 14, intelligence: 13, luck: 12, kindness: 11, music: 10, faith: 9, promiscuous: 8, strength:7, teaching: 6, weaving: 5, yield: 4, virtue: 3, archery: 2, running:1},
  D: {drunkeness: 20, charisma: 19, quarrying: 18, endurance: 17, grit: 16, hunger: 15, intelligence: 14, luck: 13, kindness: 12, music: 11, faith: 10, promiscuous: 9, strength:8, teaching: 7, weaving: 6, yield: 5, virtue: 4, archery: 3, running: 2, navigation:1},
  C: {charisma: 20, quarrying: 19, endurance: 18, grit: 17, hunger: 16, intelligence: 15, luck: 14, kindness: 13, music: 12, faith: 11, promiscuous: 10, strength:9, teaching: 8, weaving: 7, yield: 6, virtue: 5, archery: 4, running: 3, navigation: 2, drunkeness:1},
  Q: {quarrying: 20, endurance: 19, grit: 18, hunger: 17, intelligence: 16, luck: 15, kindness: 14, music: 13, faith: 12, promiscuous: 11, strength:10, teaching: 9, weaving: 8, yield: 7, virtue: 6, archery: 5, running: 4, navigation: 3, drunkeness: 2, charisma:1},
  E: {endurance: 20, grit: 19, hunger: 18, intelligence: 17, luck: 16, kindness: 15, music: 14, faith: 13, promiscuous: 12, strength:11, teaching: 10, weaving: 9, yield: 8, virtue: 7, archery: 6, running: 5, navigation: 4, drunkeness: 3, charisma: 2, quarrying:1},
  G: {grit: 20, hunger: 19, intelligence: 18, luck: 17, kindness: 16, music: 15, faith: 14, promiscuous: 13, strength:12, teaching: 11, weaving: 10, yield: 9, virtue: 8, archery: 7, running: 6, navigation: 5, drunkeness: 4, charisma: 3, quarrying: 2, endurance:1},
  H: {hunger: 20, intelligence: 19, luck: 18, kindness: 17, music: 16, faith: 15, promiscuous: 14, strength:13, teaching: 12, weaving: 11, yield: 10, virtue: 9, archery: 8, running: 7, navigation: 6, drunkeness: 5, charisma: 4, quarrying: 3, endurance: 2, grit:1},
  I: {intelligence: 20, luck: 19, kindness: 18, music: 17, faith: 16, promiscuous: 15, strength:14, teaching: 13, weaving: 12, yield: 11, virtue: 10, archery: 9, running: 8, navigation: 7, drunkeness: 6, charisma: 5, quarrying: 4, endurance: 3, grit: 2, hunger:1},
  L: {luck: 20, kindness: 19, music: 18, faith: 17, promiscuous: 16, strength:15, teaching: 14, weaving: 13, yield: 12, virtue: 11, archery: 10, running: 9, navigation: 8, drunkeness: 7, charisma: 6, quarrying: 5, endurance: 4, grit: 3, hunger: 2, intelligence:1},
  K: {kindness: 20, music: 19, faith: 18, promiscuous: 17, strength:16, teaching: 15, weaving: 14, yield: 13, virtue: 12, archery: 11, running: 10, navigation: 9, drunkeness: 8, charisma: 7, quarrying: 6, endurance: 5, grit: 4, hunger: 3, intelligence: 2, luck:1},
  M: {music: 20, faith: 19, promiscuous: 18, strength:17, teaching: 16, weaving: 15, yield: 14, virtue: 13, archery: 12, running: 11, navigation: 10, drunkeness: 9, charisma: 8, quarrying: 7, endurance: 6, grit: 5, hunger: 4, intelligence: 3, luck: 2, kindness:1},
  F: {faith: 20, promiscuous: 19, strength:18, teaching: 17, weaving: 16, yield: 15, virtue: 14, archery: 13, running: 12, navigation: 11, drunkeness: 10, charisma: 9, quarrying: 8, endurance: 7, grit: 6, hunger: 5, intelligence: 4, luck: 3, kindness: 2, music:1},
  P: {promiscuous: 20, strength:19, teaching: 18, weaving: 17, yield: 16, virtue: 15, archery: 14, running: 13, navigation: 12, drunkeness: 11, charisma: 10, quarrying: 9, endurance: 8, grit: 7, hunger: 6, intelligence: 5, luck: 4, kindness: 3, music: 2, faith:1},
  S: {strength:20, teaching: 19, weaving: 18, yield: 17, virtue: 16, archery: 15, running: 14, navigation: 13, drunkeness: 12, charisma: 11, quarrying: 10, endurance: 9, grit: 8, hunger: 7, intelligence: 6, luck: 5, kindness: 4, music: 3, faith: 2, promiscuous:1},
  T: {teaching:20, weaving: 19, yield: 18, virtue: 17, archery: 16, running: 15, navigation: 14, drunkeness: 13, charisma: 12, quarrying: 11, endurance: 10, grit: 9, hunger: 8, intelligence: 7, luck: 6, kindness: 5, music: 4, faith: 3, promiscuous: 2, strength:1},
  W: {weaving: 20, yield: 19, virtue: 18, archery: 17, running: 16, navigation: 15, drunkeness: 14, charisma: 13, quarrying: 12, endurance: 11, grit: 10, hunger: 9, intelligence: 8, luck: 7, kindness: 6, music: 5, faith: 4, promiscuous: 3, strength:2, teaching:1},
  Y: {yield: 20, virtue: 19, archery: 18, running: 17, navigation: 16, drunkeness: 15, charisma: 14, quarrying: 13, endurance: 12, grit: 11, hunger: 10, intelligence: 9, luck: 8, kindness: 7, music: 6, faith: 5, promiscuous: 4, strength:3, teaching: 2, weaving:1},
  V: {virtue: 20, archery: 19, running: 18, navigation: 17, drunkeness: 16, charisma: 15, quarrying: 14, endurance: 13, grit: 12, hunger: 11, intelligence: 10, luck: 9, kindness: 8, music: 7, faith: 6, promiscuous: 5, strength:4, teaching: 3, weaving: 2, yield:1}
};
const skills = [ "archery", "running", "navigation", "drunkeness", "charisma", "quarrying", "endurance", "grit", "hunger", "intelligence", "luck", "kindness", "music", "faith", "promiscuous", "strength", "teaching", "weaving", "yield", "virtue" ];
const codonTable = {
  'TTT': 'F', 'TTC': 'F', 'TTA': 'L', 'TTG': 'L',
  'TCT': 'S', 'TCC': 'S', 'TCA': 'S', 'TCG': 'S',
  'TAT': 'Y', 'TAC': 'Y', 'TAA': '*', 'TAG': '*',
  'TGT': 'C', 'TGC': 'C', 'TGA': '*', 'TGG': 'W',
  'CTT': 'L', 'CTC': 'L', 'CTA': 'L', 'CTG': 'L',
  'CCT': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
  'CAT': 'H', 'CAC': 'H', 'CAA': 'Q', 'CAG': 'Q',
  'CGT': 'R', 'CGC': 'R', 'CGA': 'R', 'CGG': 'R',
  'ATT': 'I', 'ATC': 'I', 'ATA': 'I', 'ATG': 'M',
  'ACT': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
  'AAT': 'N', 'AAC': 'N', 'AAA': 'K', 'AAG': 'K',
  'AGT': 'S', 'AGC': 'S', 'AGA': 'R', 'AGG': 'R',
  'GTT': 'V', 'GTC': 'V', 'GTA': 'V', 'GTG': 'V',
  'GCT': 'A', 'GCC': 'A', 'GCA': 'A', 'GCG': 'A',
  'GAT': 'D', 'GAC': 'D', 'GAA': 'E', 'GAG': 'E',
  'GGT': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G',
};
//A, R, N, D, C, Q, E, G, H, I, L, K, M, F, P, S, T, W, Y, V
function new1(){
	for (let i=0; i < 10; i++){
		new2(0,null,true,null,null);
	}
	let ohpointfive = [];
	let OPFCount = 0;

	for (let i=0; i < citizens; i++){
		if (human[i].generation == 0.5) {
			let temp = human[i];
			ohpointfive.push(temp);
			OPFCount++;
		}

		for (let j=0; j < citizens; j++){
			if (human[i].fullName == human[j].spouce){
				human[i].spouce = human[j].fullName;
			}
		}
	}
	for (let i = 0; i < OPFCount; i++){
		let p1 = ohpointfive[i];
		let p2 = p1.spouce;
		for (let j = 0; j < citizens; j++){
			if (p2 == human[j].fullName){
				p2 = human[j];
			}
		}
		console.log(p1);
		if (p1.isFertile == true && p2.isFertile == true){
			for (let j = 0; j < randomGaussian(3,3); j++)
				makeNew(p1, p2);
		} else {
			console.log("the fertile check isn't working.");
			console.log(p2);
			console.log(p2.isHead);
			console.log(p1.SN);
		}
	}
	console.log(children);

}



var a = document.getElementById("1");
function new2(generation, lastName, isHead, spouce, sex) {
    let isAlive = true;
    let code = [];
    for (let i = 0; i < 300; i++) {
        let rand = (Math.floor(Math.random() * 4) + 1);
        let hold = DNA[rand];
        code.push(hold);
    }
    let proteinArray = [];
    let counter = 0;
    for (let i = 0; i < 100; i++) {
        let temp1 = [];
        for (let j = 0; j < 3; j++) {
            let temp = code[counter];
            temp1.push(temp);
            counter++;
        }
        temp1 = temp1.join('');
        proteinArray.push(temp1);
    }
    let proLetterArray = [];
    for (let i = 0; i < 100; i++) {
        let temp = proteinArray[i];
        temp = codonTable[temp];
        if (temp == '*' && i != 0) {
            let j = i - 1;
            temp = proLetterArray[j];
        } else if (temp == '*' && i == 0) {
            //input stillbirth code here
            isAlive = false;
        }
        proLetterArray.push(temp);
    }
    let totalSkill = [];
    for (let i = 0; i < 20; i++) {
        let skill = skills[i];
        let temp1 = 0;
        for (let j = 0; j < 5; j++) {
            let num = i * 5 + j;
            let codon = proLetterArray[num];
            if (codon == "*") {
                let codonKeys = Object.keys(codonTable);
                let randomIndex = Math.floor(Math.random() * codonKeys.length);
                let randomLetter = codonTable[codonKeys[randomIndex]];
                codon = randomLetter;
            }
            if (codon in skillDictionary && skill in skillDictionary[codon]) {
                let temp = skillDictionary[codon][skill];
                temp1 += temp;
            } else {
                console.log(`Invalid codon or skill: ${codon}, ${skill}`);
            }
        }
        totalSkill.push(temp1);
    }
        if (generation == 0) {
            sex = Math.floor(Math.random() * 2);
            if (sex == 0) {
                sex = "female";
            } else if (sex == 1) {
                sex = "male";
            }
        }
    
    let firstName;
    if (sex == "female"){
            	firstName = femNames[Math.floor(Math.random()*femNames.length)];
            } else if (sex == "male"){
            	firstName = mascNames[Math.floor(Math.random()*mascNames.length)];
            } else {
            	console.log("error 1: no sex (virgin ass ho)");
            }
    let age;
    if (generation == 0.5) {
        age = (Math.floor(Math.random()*30))+45;
    }
    let fullName;
    if (generation == 0) {

        age = (Math.floor(Math.random()*30))+45;
        lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        fullName = firstName + " " + lastName;
        let tempRand = Math.floor(Math.random() * 10);
        if (tempRand < 7) {
            let spouceSex = "female";
            if (spouceSex == sex) {
                spouceSex = "male";
            }
            new2(0.5, lastName, false, fullName, spouceSex);
        }
    }
    if (age < 45){
    	age = 45;
    }
    fullName = firstName + " " + lastName;
let isFertile = true;
let promiscuous = totalSkill[14];
if (promiscuous < 10 && age > 50) {
    isFertile = false;
}

let power = 0;
for (let i=0; i < 20; i++){
	let temp = totalSkill[i];
	power = power + temp;
}
let faith = totalSkill[13];

let object = {
    DNA: code,
    proteins: proLetterArray,
    isAlive: isAlive,
    skills: totalSkill,
    sex: sex,
    archery: totalSkill[0],
    running: totalSkill[1],
    navigation: totalSkill[2],
    drunkeness: totalSkill[3],
    charisma: totalSkill[4],
    quarrying: totalSkill[5],
    endurance: totalSkill[6],
    grit: totalSkill[7],
    hunger: totalSkill[8],
    intelligence: totalSkill[9],
    luck: totalSkill[10],
    kindness: totalSkill[11],
    music: totalSkill[12],
    faith: totalSkill[13],
    promiscuous: totalSkill[14],
    strength: totalSkill[15],
    teaching: totalSkill[16],
    weaving: totalSkill[17],
    yield: totalSkill[18],
    virtue: totalSkill[19],
    generation: generation,
    firstName: firstName,
    lastName: lastName,
    isHead: isHead,
    isFertile: isFertile,
    spouce: spouce,
    fullName: fullName,
    power: power,
    citizenNum: citizens,
    age: age
	};
if (faith < 80 && promiscuous > 70){
	cheaters.push(object);
}

human.push(object);
citizens++;
}

function makeNew(parent1, parent2){
	let isAlive = true;
    let code = [];
	for (let i =0; i < 300; i++){
		let rand = Math.floor(Math.random()*2);
		let letter;
		if (rand == 0){
			letter = parent1.DNA[i];
		} else if (rand == 1) {
			letter = parent2.DNA[i];
		}
		code.push(letter);
	}
	let proteinArray = [];
    let counter = 0;
    for (let i = 0; i < 100; i++) {
        let temp1 = [];
        for (let j = 0; j < 3; j++) {
            let temp = code[counter];
            temp1.push(temp);
            counter++;
        }
        temp1 = temp1.join('');
        proteinArray.push(temp1);
    }
    let proLetterArray = [];
    for (let i = 0; i < 100; i++) {
        let temp = proteinArray[i];
        temp = codonTable[temp];
        if (temp == '*' && i != 0) {
            let j = i - 1;
            temp = proLetterArray[j];
        } else if (temp == '*' && i == 0) {
            //input stillbirth code here
            isAlive = false;
        }
        proLetterArray.push(temp);
    }
    let totalSkill = [];
    for (let i = 0; i < 20; i++) {
        let skill = skills[i];
        let temp1 = 0;
        for (let j = 0; j < 5; j++) {
            let num = i * 5 + j;
            let codon = proLetterArray[num];
            if (codon == "*") {
                let codonKeys = Object.keys(codonTable);
                let randomIndex = Math.floor(Math.random() * codonKeys.length);
                let randomLetter = codonTable[codonKeys[randomIndex]];
                codon = randomLetter;
            }
            if (codon in skillDictionary && skill in skillDictionary[codon]) {
                let temp = skillDictionary[codon][skill];
                temp1 += temp;
            } else {
                console.log(`Invalid codon or skill: ${codon}, ${skill}`);
            }
        }
        totalSkill.push(temp1);
    }
	let mother;
	let father;
	if (parent2.sex == "female"){
		mother = parent2.fullName;
	} else {
		father = parent2.fullName;
	}
	if (parent1.sex == "female"){
		mother = parent1.fullName;
	} else {
		father = parent1.fullName;
	}

	let lastName = parent1.lastName;
	let youngestParent = parent1.age;
	if (parent1.age > parent2.age){
		youngestParent = parent2.age;
	} else if (parent2.age > parent1.age){
		youngestParent = parent1.age;
	}
	let age = (Math.floor(Math.random()*30))+15;
	if (age > youngestParent-15){
		age = youngestParent-15;
	}
	if (age < 15){
		age = 15;
	}



	let object = {
		DNA: code,
		isAlive: isAlive,
		citizenNum: citizens,
		lastName: lastName,
		mother: mother,
		father: father,
    	proteins: proLetterArray,
    	archery: totalSkill[0],
	    running: totalSkill[1],
	    navigation: totalSkill[2],
	    drunkeness: totalSkill[3],
	    charisma: totalSkill[4],
	    quarrying: totalSkill[5],
	    endurance: totalSkill[6],
	    grit: totalSkill[7],
	    hunger: totalSkill[8],
	    intelligence: totalSkill[9],
	    luck: totalSkill[10],
	    kindness: totalSkill[11],
	    music: totalSkill[12],
	    faith: totalSkill[13],
	    promiscuous: totalSkill[14],
	    strength: totalSkill[15],
	    teaching: totalSkill[16],
	    weaving: totalSkill[17],
	    yield: totalSkill[18],
	    virtue: totalSkill[19],
	    generation: 1,
	    age: age,
	    youngestParent: youngestParent



	};
	let faith = totalSkill[13];
	let promiscuous = totalSkill[14];
	if (faith < 80 && promiscuous > 70){
	cheaters.push(object);
	}
	children.push(object);
	human.push(object);
	citizens++;
	}
