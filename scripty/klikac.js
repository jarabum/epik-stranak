console.log("jdeme klikat");

document.getElementById("cislo").style.visibility = "hidden";
let cislo = 0;

function pridejcislo() {
    cislo++;
    document.getElementById("cislo").style.visibility = "visible";
    document.getElementById("cislo").textContent = cislo;
    console.log("klik")
}

function odecti() {
    cislo--
    document.getElementById("cislo").style.visibility = "visible";
    document.getElementById("cislo").textContent = cislo;
    console.log("odecteno");
}