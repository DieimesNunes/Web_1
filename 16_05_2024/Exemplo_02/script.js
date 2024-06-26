const elemento = document.querySelectorAll("p");

elemento.forEach(function(teste){
    console.log(teste);
});

const alerta = document.querySelector(".btn-primary");

alerta.addEventListener("click", function(){
    alert("Palmeiras será campeão de novo em 2024");
});

const escuro = document.querySelector(".btn-dark");

escuro.addEventListener("click", function(){
    const pagina_escuro = document.querySelector("body");
    pagina_escuro.style.backgroundColor="black";
    pagina_escuro.style.color="white";
});

const branco = document.querySelector(".btn-light");

branco.addEventListener("click", function(){
    const pagina_branco = document.querySelector("body");
    pagina_branco.style.backgroundColor="white";
    pagina_branco.style.color="black";
});