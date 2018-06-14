
var sec=0; // initialise les secondes
var min=0; //initialise les minutes
var heures=0; //initialise les heures

function chrono(){
sec++;
if (sec>59){
  sec=0;
  min++
}

if (min>59){
  min=0;
  heures++
}

if (heures>23) {
  heures=0;
}
document.timer.s.value=" "+sec
document.timer.m.value=" "+min
document.timer.h.value=" "+heures
compte = setTimeout('chrono()',1000)

}

function rasee(){
clearTimeout(compte)
sec=0;
min=0;
heures=0;
document.timer.s.value=" "+sec
document.timer.m.value=" "+min
document.timer.h.value=" "+heures
}
