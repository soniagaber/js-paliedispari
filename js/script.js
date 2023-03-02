
parolaButtonEl=document.getElementById("parolaButton");
parolaRisultatoEl=document.getElementById("parolaRisultato")

parolaButtonEl.addEventListener("click", function(){
    let pali=true;
    parola=document.getElementById("parola");
    let i;
    let l;
    for(i=0, l=parola.value.length-1; i<parola.value.length, l>=0; i++, l--){
            if(parola.value[i]!==parola.value[l]){
                pali=false;
            }
        }
        if(pali){
            parolaRisultatoEl.innerHTML="La parola che hai inserito è palindroma"
        } else{
            parolaRisultatoEl.innerHTML="La parola che hai inserito NON è palindroma"
        }
    }
)

//-----------------pari o dispari-------------------------------------------------

let pariodisp=document.getElementById("pariodisp");
let numeroUtenteEl=document.getElementById("numeroUtente");
let pariodispButtonEl=document.getElementById("pariodispButton");
let generatoEl=document.getElementById("generato");
let sommaEl=document.getElementById("somma");
let vintoEl=document.getElementById("vinto");


pariodispButtonEl.addEventListener("click", function(){
    if(pariodisp.value !== "pari" &&pariodisp.value !== "dispari"){
        alert("devi inserire \"pari\" o \"dispari\"!")
    } else if(numeroUtenteEl.value<1 || numeroUtenteEl.value>5){
        alert("devi inserire un numero da 1 a 5!");
    }else if(isNaN(numeroUtenteEl.value)){
        alert("devi inserire un numero!");
    } else{
        let numeroPc=parseInt(genera()) ;

    generatoEl.innerText=`per il pc è stato generato il numero ${numeroPc}`;
    let sommaNumeri= numeroPc + parseInt(numeroUtenteEl.value);
    sommaEl.innerHTML="la somma dei due numeri è: " + sommaNumeri;
    let risultato= pariODispari(sommaNumeri);
    let vincitore;
    if(risultato == pariodisp.value){
        vincitore="hai vinto tu!"
    }else{
        vincitore="ha vinto il pc"
    }
    vintoEl.innerHTML= "La somma è " + risultato + ". Quindi " + vincitore;
    }
})

function genera(){
    let numeroEstratto= Math.floor(Math.random() * 5 + 1);
    return numeroEstratto;
};

function pariODispari (num){
    let res;
    if(num % 2 ==0){
        res="pari";
    } else{
        res="dispari";
    }
    return res;
}

