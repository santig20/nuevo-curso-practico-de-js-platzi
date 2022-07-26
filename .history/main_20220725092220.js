
const h1 = document.querySelector("h1")
const p= document.getElementsByClassName("p")
const parrafo = document.querySelector(".parrafo")
const parrafo1 = document.querySelector("#parrafo")
const input = document.querySelector("input")

console.log ({
    h1,
    p,
    parrafo,
    parrafo1,
    input
})
//cambiamos el texto del h1
h1.innerText = "curso practico de js"
//añadimos una clase al h1
h1.classList.add ("rojo");
// removemos la clase al h1
h1.classList.remove ("rojo")
//cambiamos el value del input
input.value = "hola";
//creamos nuevas etiquetas de html
document.createElement ("p");
//ejemp