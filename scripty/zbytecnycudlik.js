textik = document.getElementById("textik")
console.log("hlavne se uklidnime jo")

textik.textContent = "hlavne neklikej nic to neudela";
let kliky = 0;

function kliknuti(){
    kliky += 1;
    console.log(kliky)
};