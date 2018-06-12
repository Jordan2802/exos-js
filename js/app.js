//exo 1
/*
var a = 2;
a = a - 1;//1
a++;//3 4 5 6...
var b = 8;
b += 2;//10 12 14...
var c = a + b * b;//66
var d = a * b + b;//24
var e = a * (b + b);//32
var f = a * b / a;//8
var g = b / a * a;//8
*/

//exos 2
/*
var prenom = prompt("quel est mon prénom ?");

alert(prenom);
*/

//exos 3
/*
var prixHorsTaxe = parseInt(prompt("donnez moi un prix hors taxe : "));
var prixTTC = (prixHorsTaxe+(prixHorsTaxe*20/100));
alert(prixTTC);
*/

//exos4
/*
var degre = parseInt(prompt("donner une température en degre: "));
var far = (degre*1.8)+32;

alert("une température de "+ degre + "°C est egal à " + far + "°F");
*/


//exos 5
/*
var monDiv = document.getElementsByTagName('div')[0];
console.log(monDiv);
monDiv.setAttribute('id','test');
console.log(monDiv);
monDiv.classList.add('maClasse');
*/

//exos 6
/*
var chgtDiv = document.getElementsByTagName('div');

chgtDiv[0].style.color = "blue";

var inverser = chgtDiv[0].textContent;
chgtDiv[0].innerHTML = chgtDiv[1].innerHTML;
chgtDiv[1].innerHTML = inverser;

//chgtDiv[1].style.textAlign = "right";
chgtDiv[1].style.float = "right";
*/

//exos 7
/*
var monDiv = document.getElementsByTagName('div');

monDiv[0].style.color = "red";
monDiv[0].style.float = "left";
monDiv[1].style.color = "green";
monDiv[1].style.float = "left";
monDiv[2].style.color = "blue";
monDiv[2].style.float = "left";
*/

//exos 8
var image = document.getElementById("image");
var srcImage = image.getAttribute('src');
console.log(srcImage);
