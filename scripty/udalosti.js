var udalost1 = document.getElementById("udalost1");
var cas1 = document.getElementById("cas1");
var udalost2 = document.getElementById("udalost2");
var cas2 = document.getElementById("cas2");

console.log("uuu uz se tesim");
var datum1 = new Date("Oct 30, 2025 13:30:00").getTime();
console.log(datum1);

var datum2 = new Date("June 30, 2026 8:45:00").getTime();
console.log(datum2);

udalost1.textContent = "simonovo galovo oslava narozenin";
cas1.textContent = "cas do oslavy";
udalost2.textContent = "konec skolniho roku";
cas2.textContent = "cas do konce";

var x1 = setInterval(function() {

  var ted = new Date().getTime();

  var zajakdlouho = datum1 - ted;

  var days = Math.floor(zajakdlouho / (1000 * 60 * 60 * 24));
  var hours = Math.floor((zajakdlouho % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((zajakdlouho % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((zajakdlouho % (1000 * 60)) / 1000);

  document.getElementById("cas1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (zajakdlouho < 0) {
    clearInterval(x);
    document.getElementById("cas1").innerHTML = "je to tu!!!";
  }
}, 1000);

var x2 = setInterval(function() {

  var ted = new Date().getTime();

  var zajakdlouho = datum2 - ted;

  var days = Math.floor(zajakdlouho / (1000 * 60 * 60 * 24));
  var hours = Math.floor((zajakdlouho % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((zajakdlouho % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((zajakdlouho % (1000 * 60)) / 1000);

  document.getElementById("cas2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (zajakdlouho < 0) {
    clearInterval(x);
    document.getElementById("cas2").innerHTML = "je to tu!!!";
  }
}, 1000);