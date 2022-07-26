
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
//sintaxis parea nuevas etiquetas de html
document.createElement ("p");
//ejemplo
//creamos una nueva variable , que guarde la etiqueta de html que queremos qgregar
const img =document.createElement("img") ;
//seteamos los atributos de la etiqueta  img, en este caso el src y le pasamos la url de la imagen
img.setAttribute("src", "https://yt3.ggpht.com/yti/APfAmoFOJFykSOBURXOaTO64JSG3MPMo8OtQL_gfS7t-AQ=s88-c-k-c0x00ffffff-no-rj-mo")
parrafo1.appendChild(img);