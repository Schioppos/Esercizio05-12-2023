let bottoneConserva = document.querySelector("#Conserva")
let bottoneRimuovi = document.querySelector("#Rimuovi")
let nome = document.querySelector("#nome")

 bottoneConserva.addEventListener("click", () => {
    let valoreNome = nome.value
    localStorage.setItem("valoreSalvato", valoreNome)
 })


 bottoneRimuovi.addEventListener("click", () => {
    localStorage.removeItem("valoreSalvato")
 })


let contatore = sessionStorage.getItem("contatore") || 0;

function aggiornaContatore() {
    contatore++;
    sessionStorage.setItem("contatore", contatore);
    document.getElementById("contatore").innerText = contatore;
}

setInterval(aggiornaContatore, 1000);

