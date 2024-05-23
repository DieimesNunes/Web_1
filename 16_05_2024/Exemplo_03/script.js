const texto = document.querySelector("#texto");

texto.insertAdjacentHTML("beforebegin", "<p>Teste antes</p>");
texto.insertAdjacentHTML("afterend", "<p>Teste depois</p>" );