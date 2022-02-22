let formulario = document.querySelector("#form");
let input = document.querySelector("#name");
let response = document.querySelector("#response");
let valorIngresado = "";

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    valorIngresado = input.value;
    response.innerHTML = `<strong>${valorIngresado}</strong>`;
    input.value = "";
});
