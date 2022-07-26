
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

h1.innerText = "curso practico de js"
//añadimos una clase al h1
h1.classList.add ("rojo");
// remevemos la clase al a
h1.classList.remove ("rojo")