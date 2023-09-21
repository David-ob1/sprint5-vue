import {PrepararCheck,filtrarXnombre,filtrarXCat,imprimirHtml,arrayCart} from "./modules/functions.js"

const API_Eventos = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(API_Eventos)
  .then(response => response.json())
    .then(datos =>{
    let  data = datos
      const diaHoy = data.currentDate
      // const totalEventos = data.events
      // console.table(totalEventos)

        //filtando
      const totalEventos = data.events.filter(event => event.date < diaHoy)
      console.table(totalEventos)

      
    imprimirHtml(arrayCart(totalEventos),contenedorEv)
    imprimirHtml(PrepararCheck(data.events), contenedorCheck)

    contenedorCheck.addEventListener("change",()=>{
      let checked = document.querySelectorAll("input[type=checkbox]:checked")
      const checkedValues = Array.from(checked).map( checkbox => checkbox.value)
      console.log(checkedValues)

      let catUsuario = filtrarXCat(totalEventos,checkedValues)
      let buscarEvento = buscar.value
      let encontrado = filtrarXnombre(catUsuario,buscarEvento)
      console.table(encontrado)
      imprimirHtml(arrayCart(encontrado),contenedorEv)
      
  })

      lupita.addEventListener("click",()=>{
        let checked = document.querySelectorAll("input[type=checkbox]:checked")
        const checkedValues = Array.from(checked).map( checkbox => checkbox.value)
        console.log(checkedValues)

        let catUsuario = filtrarXCat(totalEventos,checkedValues)
        let buscarEvento = buscar.value
        let encontrado = filtrarXnombre(catUsuario,buscarEvento)
        console.log(encontrado)
        imprimirHtml(arrayCart(encontrado),contenedorEv)
      })
    
      return data
    })


  .catch(err => alert("error"))



  

const contenedorEv = document.querySelector(".eventos")
const contenedorCheck = document.querySelector(".checked")
const lupita = document.getElementById("lupa")
const buscar = document.getElementById("busqueda")
  


  

 



  


 
 