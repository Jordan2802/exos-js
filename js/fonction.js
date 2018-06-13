//exos 1

function test() {
  return true;
};
console.log(test());

//exos 2

function testDeux(chaine) {
  return chaine;
};
console.log(testDeux("salut"));

//exos 3

function testTrois(chaine1 , chaine2) {
  return chaine1+chaine2;
};

console.log(testTrois("salut"," ça va"));

//exos 4

function testQuatre(nbr1, nbr2) {
if (nbr1>nbr2) {
  console.log('Le premier nombre est plus grand');
}else if (nbr1<nbr2) {
  console.log('Le premier nombre est plus petit ');
}else {
  console.log('Les deux nombres sont identiques');
}
}

testQuatre(3,5);

//exos 5

 function testCinq(nbr, string) {
   return nbr + string
 }
 console.log(testCinq(2,'salut'));

 //exos 6

 function testSix(nom, prenom, age) {
   return "Bonjour " + nom + " " + prenom + ", tu as " + age + " ans.";
 }
 console.log(testSix("oudot", "jordan", 32));

 //exos 7

 function testSept(age, genre) {
   if (genre == "homme" && age>=18) {
     console.log("Vous êtes un homme et vous êtes majeur");
   }else if (genre == "homme" && age<18) {
     console.log("Vous êtes un homme et vous êtes mineur");
   }else if (genre == "femme" && age>=18) {
     console.log("Vous êtes une femme et vous êtes majeur");
   }else if (genre == "femme" && age<18) {
     console.log("Vous êtes une femme et vous êtes mineur");
   }else {
     console.log("desoler");
   }
 }

 testSept(12, "femme");
