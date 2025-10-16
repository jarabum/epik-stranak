var textik = document.getElementById("textik")
console.log("hlavne se uklidnime jo")

textik.textContent = "hlavne neklikej nic to neudela";
let kliky = 0;

function kliknuti(){
    kliky += 1;
    if (kliky == 1) {
        textik.textContent = "hele nema to cenu vazne to nic neudela";
    };
    if (kliky == 5) {
        textik.textContent = "nevim proc furt klikas kamo";
    };
    if (kliky == 20) {
        textik.textContent = "vazne se nic nestane";
    };
    if (kliky == 50) {
        textik.textContent = "plz prestan fakt to boli";
    };
    if (kliky == 100) {
        textik.textContent = "jauvajs";
    };
    if (kliky == 150) {
        textik.textContent = "hele frajere ihned prestan protoze se nic nestane";
    };
    if (kliky == 235) {
        textik.textContent = "oukej oukej";
    };
    if (kliky == 275) {
        textik.textContent = "muzeme se dohodnout";
    };
    if (kliky == 320) {
        textik.textContent = "no takze";
    };
    if (kliky == 400) {
        textik.textContent = "prestanes a ja ti neco dam";
    };
    if (kliky == 405) {
        textik.textContent = "okok delal jsem si srandu";
    };
    if (kliky == 475) {
        textik.textContent = "pokud neprestanes tak se stane neco hrozneho";
    };
    if (kliky == 550) {
        textik.textContent = "fakt jako to vazne nechces videt";
    };
    if (kliky == 615) {
        textik.textContent = "btw vis ze si uz klikl vic nez 600 krat to je vazne hodne a vazne to boli";
    };
    if (kliky == 650) {
        textik.textContent = "ok jdeme na to";
    };
    if (kliky == 666) {
        textik.textContent = "gg myslel jsem si ze vazne prestanes";
    };
    if (kliky == 725) {
        textik.textContent = "plz stop";
        window.open("https://www.youtube.com/watch?v=l60MnDJklnM", "_self");
    };
    if (kliky == 800) {
        textik.textContent = "pokud neprestanes tak te budu muset vratit";
    };
    if (kliky == 850) {
        textik.textContent = "ok zbohem";
    };
    if (kliky == 855) {
        kliky = 0;
        textik.textContent = "hlavne neklikej nic to neudela";
        window.open("index.html", "_self");
    };
    console.log(kliky);
};