const { createApp } = Vue 
const Api = "https://mindhub-xj03.onrender.com/api/amazing" 



createApp({
    data() {
      return {
       eventos:[],
       porcentajes:[],
       capacityL:{},
       categorias:[],
       assistance:[],
       tablaU:{},
       tablaP:{},
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
       let eventosFuturos = this.eventos.filter(item => item.date >= diaHoy)
      console.log(eventosFuturos)
       
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
        
      //capacidad 
        let capacidad = this.ordenarLista(this.eventos,"capacity")
        console.table(capacidad)

        this.capacityL = capacidad[0]

        //categorias
        let catF = eventosFuturos.map(item => item["category"])
        let catP = eventosPasados.map(item => item["category"])
    

      this.categoriasF = this.sinRepetidos(catF)
      let arrayAux = []
   
      for (let categoria of this.categoriasF){
      let pertenece = this.gananciaHTML(eventosFuturos,categoria,"estimate")
        console.table(pertenece)
        arrayAux.push(pertenece) 
      }

      this.tablaU = arrayAux


      
      this.categoriasP = this.sinRepetidos(catP)
      let arrayAuxP = []
   
      for (let categoria of this.categoriasF){
      let pertenece = this.gananciaHTML(eventosPasados,categoria,"assistance")
        console.table(pertenece)
        arrayAuxP.push(pertenece) 
      }

      this.tablaP = arrayAuxP



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

        },

         gananciaHTML(objeto,categoria,POF){
          let eventosCorrespondientes =  this.filtrarXCat(objeto,categoria)
          console.table(eventosCorrespondientes)
          console.table(POF)
          let gananciaEinfo = this.calcularObjeto(eventosCorrespondientes,POF)
          // console.log()
          return gananciaEinfo
         

           
      },

        calcularObjeto (objetos,momento){
        console.log(momento)
       
         let ganancia = 0 
         let assistance = 0
         let capacity = 0
         let categoria =""
         console.log(objetos)

          

        for (let evento of objetos){
            categoria = evento.category
            ganancia += (evento.price * evento[momento])
            console.log(ganancia)
            assistance  += evento[momento]
            console.log(assistance) 
            capacity += evento.capacity 
            console.log(capacity)
        }
        
        let percentage = (assistance / capacity * 100).toFixed(2)
     
         
         let datos ={
             categoria: categoria,
             ganancia:ganancia,
             porcentaje: percentage

         }

         console.table(datos)
         return datos
     },

     filtrarXCat(eventos,catSeleccionadas){
      if(catSeleccionadas.length == 0){
        return eventos
      }
      let filtrado = eventos.filter((evento) =>  catSeleccionadas.includes(evento["category"]))
      return filtrado
    }



     }
      
    


    

    




  }).mount('#app')
