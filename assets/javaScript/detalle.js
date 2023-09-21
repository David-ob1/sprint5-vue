 import { generarHtml } from "./modules/functions.js"

//capturar el objeto
const API_Eventos = "https://mindhub-xj03.onrender.com/api/amazing"
let parametro = location.search

// objeto url 
let params = new URLSearchParams(parametro)
console.log(params)

let idEvento = params.get("parametro")
    console.log(idEvento)

    //Dom 

 let contenedorMain = document.getElementById("contenedorDetalles")


    fetch(API_Eventos) //devuelve una promesa

    .then(respuesta => respuesta.json())
        .then( data =>{

            console.log(data)

            let evento = data.events.find(evento => evento._id  == idEvento)
            console.log(evento)

            generarHtml(contenedorMain,evento)

        })
    .catch()




   

    
//  function generarHtml(contenedor,objeto){
//     contenedor.innerHTML  +=`
//         <img src="${objeto.image}" alt="${objeto.name}" class="col-6">
            
//     <div class="info">
//         <h2>${objeto.name}</h2>
//         <p>date: ${objeto.date}</p>
//         <p>description: ${objeto.description}</p>
//         <p>category: ${objeto.category}</p>
//         <p>place: ${objeto.place}</p>
//         <p>capacity: ${objeto.capacity}</p>
//         <p>assistance: ${objeto.assistance}</p>
//         <p>price: ${objeto.price}</p>
    
//     </div>`
//  }

