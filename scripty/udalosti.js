var udalost1 = document.getElementById("udalost1");
var cas1 = document.getElementById("cas1");

console.log("uuu uz se tesim");
var datum1 = new Date("Oct 30, 2025 13:30:00").getTime();
console.log(datum1);

udalost1.textContent = "simonovo galovo oslava narozenin";
cas1.textContent = "cas do oslavy";

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