

const url = 'https://pokeapi.co/api/v2/';
const caja = document.querySelector("#poke")
const cantidaddepokemones = 16;


const fetchpokemones = async () => {
for(let i=1 ; i<fetchpokemones; i++){
await getpokemon(i);
}
};

const getpokemon = (id) => {
    try {const response = awaitfetch(`${url} /pokemon/ ${id} `)
        
    } catch (error) {
        
    }

}