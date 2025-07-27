console.log("tik tak ubiha ti cas tak na co tu cucis");

let intervalID;
const zivotnost = 72;

function zacitOdpocet() {
    clearInterval(intervalID);
    const narozeni = new Date(document.getElementById('datum_narozeni').value);
    console.log(narozeni)
    if (isNaN(narozeni) || narozeni == "Invalid Date") {
        document.getElementById('odpocet').textContent = "spatnej datum narozeni";
        return;
    }
    const datumsmrti = new Date(narozeni);
    datumsmrti.setFullYear(datumsmrti.getFullYear() + zivotnost);

    function updatniOdpocet() {
        const ted = new Date();
        let diff = datumsmrti - now;
        if (diff < 0) diff = 0;
        const vteriny = Math.floor(diff / 1000);
        document.getElementById('odpocet').textContent = `${vteriny.toLocaleString()} vterin zbiva`;

        const tick = document.getElementById('tick');
        tick.currentTime = 0;
        tick.play();
      }
      updatniOdpocet();
      intervalId = setInterval(updatniOdpocet, 1000);
}