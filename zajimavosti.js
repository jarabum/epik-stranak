console.log("jdeme informovat lidi");

const zajimavosti = [
    "den na venusi je delsi nez jeji rok",
    "japonci maji slovo 'tsundoku' co znamena si kupovat knihy co nikdy nectes",
    "kleopatra zila bliz k vynalezu iphonu nez k pyramidam",
    "mravenci preziji v mikrovlnce protoze jsou moc maly aby absorbovaly mikrovlny",
    "kocky nemohou chutnat sladkou chut",
    "slunce tvori 99.86% hmotnosti cele slunecni soustavy",
    "saturn by plaval ve vode protoze ma nizsi hustotu nez voda",
    "pocitacova mys se puvodne jmenovala 'indikátor polohy X-Y pro zobrazovací systém'",
    "google se prvne jmenoval 'backrub'",
    "v mongolsku je vice koni nez lidi",
    "vcely dokazou poznat oblicej cloveka"
];

function zajimavost() {
    const nahodnost = Math.floor(Math.random() * zajimavosti.length);
    document.getElementById('zajimavost').textContent = zajimavosti[nahodnost];
}