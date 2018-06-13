//exos 1

var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin','juillet','aout', 'septembre','octobre','novembre','decembre'];

//exos 2

console.log(mois[2]);

//exos 3

console.log(mois[5]);

//exos 4

console.log(mois[10]);

//exos 5

mois.splice(8,1,'août');
console.log(mois[8]);

//exos 6

for (var i = 0; i < mois.length; i++) {
console.log(mois[i]);
}

//exos 7

var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
console.log(array);
//exos 8

array.push('courgette');
console.log(array);
//exos 9

array[4].push('Citron');
console.log(array);

//exos 10
array.splice(1,1,);
console.log(array);

//exos 11

array.splice(2,0,'Poire');
console.log(array);
