const { createApp } = Vue 
const Api = "https://mindhub-xj03.onrender.com/api/amazing" 



createApp({
    data() {
      return {
       eventos:[],
       porcentajes:[],
       capacity:[],
       categorias:[],
       revenuesU: [],
       assistance:[],
       revenuesP:[],
       categoriasP:[],
       categoriasF:[],
       highest:{},
       lowest:{}

      }
    },

created(){
    fetch(Api)
    .then(respuesa => respuesa.json())
    .then(data => {
        let diaHoy = data.currentDate
        this.eventos = data.events

        //separacion x fechas
       let eventosPasados = this.eventos.filter(item => item.date < diaHoy)
       let theventosFuturos = this.eventos.filter(item => item.date >= diaHoy)

       
        //categorias
    //   this.categorias = sinRepetidos()

       this.porcentajes =  eventosPasados.map((item) =>{
        let nombre = item.name
        let capacidad = item.capacity 
        let assistance = item.assistance
        let promedio =  (assistance / capacidad * 100).toFixed(2)
    
         let evento = {
             name:nombre,
             porcentaje: promedio    
         }
         
         console.log(evento)    
        return evento
      })

     
      this.porcentajes = this.ordenarLista(this.porcentajes,"porcentaje")
      console.table(this.porcentajes)
     
        this.highest = this.porcentajes[0]
        
        this.lowest = this.porcentajes[this.porcentajes.length - 1]
        

    })


    },

    methods:{

        sinRepetidos(lista){
           return  Array.from(new Set(lista)) 
        },

      ordenarLista(array,propiedad){
          let aux = Array.from(array)
          aux.sort((a,b) =>  b[propiedad] - a[propiedad])
          return aux

        }



        // sacarCategorias(lista){
        //     for( item  of lista){
                
        //     }


        // }

        

    }




  }).mount('#app')













































// import {filaTabla1,filaTabla2Y3,agregarHtml, sinRepetidos, filtrarXCat} from "./modules/functions.js"
 
// const Api = "https://mindhub-xj03.onrender.com/api/amazing" 

//     //primer tabla
//     const Tabla1location = document.querySelector('.statistics-info')


// fetch(Api)
//     .then(event=> event.json())
//         .then(datos =>{
//             let data = datos
//             const diaHoy = data.currentDate
//             const eventos = data.events
            
//             // tabla 1
//             const eventosPasados = eventos.filter(item => item.date < diaHoy)
         
//          let porcentaje =  eventosPasados.map((item) =>{
//                let nombre = item.name
//                let capacidad = item.capacity 
//                let assistance = item.assistance
//                let promedio =  assistance / capacidad * 100
           
//                 let evento = {
//                     name:nombre,
//                     porcentaje: promedio    
//                 }
                
//                 console.log(evento)    
//                return evento
//             })

//            //toFixed(2)
//             console.log(porcentaje)
//      //porcentaje
//             let ordenPorcentaje = ordenarPorcentaje(porcentaje)
//             console.table(ordenPorcentaje)
//             let highest = ordenPorcentaje[0]
//             let lowest = ordenPorcentaje[ordenPorcentaje.length - 1]

//                 console.log(ordenPorcentaje)
//                 console.log(highest)
//                 console.log(lowest)

//      //capacidad

//               let eventoMayorCapacidad =  ordenarXCapacidad(eventos)

//               console.log(eventoMayorCapacidad)

//            agregarHtml(filaTabla1(highest,lowest,eventoMayorCapacidad), Tabla1location)
        

//              //tabla 2
        
//         const eventosFuturos = eventos.filter(item => item.date >= diaHoy)
//          const upcomingStatistics = document.querySelector(".statistics-by-category")
//          //todas las categorias
//             let categoriasF = sinRepetidos(eventosFuturos,"category")
            
//         //crear array con los nombres de las categorias
            
//             for (let categoria of categoriasF){
//              let pertenece = gananciaHTML(eventosFuturos,categoria,"estimate")
//              let etiquetasHtml = filaTabla2Y3(categoria,pertenece)
//              agregarHtml(etiquetasHtml,upcomingStatistics)

//                 console.table(pertenece)
//                 console.table(etiquetasHtml)
//             }

//             //tabla 3
//            // const eventosPasados = eventos.filter(item => item.date < diaHoy)
//            let categoriasP = sinRepetidos(eventosPasados,"category")
//             const PastStContainer = document.querySelector(".past-statistics")
            

//            for (let categoria of categoriasP){
//             let pertenece = gananciaHTML(eventosPasados,categoria,"assistance")
//             let etiquetasHtml = filaTabla2Y3(categoria,pertenece)
//             console.log(etiquetasHtml)
            
//               agregarHtml(etiquetasHtml,PastStContainer)
//            }


//              //funciones
//         // function mostrarClaves (array,propiedad){
//         //     console.log(array[0])
//         //   let aux = []
//         //     for (let item of array) {
                
//         //         aux.push(item[propiedad])
//         //     }

//         //     return aux
//         //    }

//         function ordenarPorcentaje(array){
//         let aux = Array.from(array)
//             aux.sort((a,b) =>{return  b.porcentaje - a.porcentaje})
            
//             return aux
//         }


//       //  function ordenarNumeros(a,b) {return  b.porcentaje - a.porcentaje}// descendente


//         function ordenarXCapacidad(arrayEventos){
//             let aux = Array.from(arrayEventos)
//                 aux.sort((a,b) =>{return b.capacity - a.capacity})

//                 return aux[0]

//         }

//         function gananciaHTML(objeto,categoria,POF){
//             let eventosCorrespondientes =  filtrarXCat(objeto,categoria)
//            // console.table(eventosCorrespondientes)
//             let gananciaEinfo = calcularObjeto (eventosCorrespondientes,POF)
         
//             return gananciaEinfo


//           // console.log(gananciaEvento)
          
//         }

//         function calcularObjeto (objetos,momento){
//             let ganancia = 0 
//             let assistance = 0
//             let capacity = 0
//             console.log(objetos)
//             for (let evento of objetos){
//                 ///   console.table (evento.price + " y " + evento.estimate)
//                 ganancia += (evento.price * evento[momento])
//                 assistance  += evento[momento]
//                 capacity += evento.capacity

                
//             }
            

//                 let percentage = assistance / capacity * 100
//                // console.log(percentage)
                
//                 let datos ={
//                     ganancia:ganancia,
//                     porcentaje: percentage

//                 }
//                 return datos
//             }

//         })//fin then
    
//         //obtener porcentaje y el nombre del evento
//     .catch()    


