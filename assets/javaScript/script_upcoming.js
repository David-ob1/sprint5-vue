const { createApp } = Vue 

createApp({

  //aca se crean las propiedades reactivas
  data() {
    return {
      message: 'Hello Vue!',
      eventos:[],
      inputValue: "",
      filtrados: [],
      categorias:[],
      checked: []
    }
  },
  created(){  
      
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then(respuesta =>respuesta.json())
      .then(data => {
        this.diaHoy = data.currentDate
        this.eventos = data.events.filter(item => item.date >= this.diaHoy)
        console.log(this.eventos)
        
        //para mostrarlos todos en primera vuelta
        this.filtrados = this.eventos

        let todasCat = this.eventos.map( evento => evento.category)
         console.table(todasCat)

        this.categorias = this.sinRepetidos(todasCat)
        
        console.log(this.categorias)
      })
      .catch(error => console.log(error))

},  
  methods:{
      sinRepetidos(lista){
          return Array.from(new Set (lista))
      },

      filtroInput(eventos,inputSearchvalue){
       return eventos.filter(evento => evento.name.toLowerCase().includes(inputSearchvalue.toLowerCase()))
      
      },

      filtroCheck(eventos,catSeleccionadas){
        if(catSeleccionadas.length == 0){
          return eventos
        }
        return eventos.filter((evento) =>  catSeleccionadas.includes(evento["category"]))
         
      },
      
      filtroCruzado(){
        const filtradoXSearch = this.filtroInput(this.eventos,this.inputValue)
        const filtradoXCat = this.filtroCheck(filtradoXSearch, this.checked)
        this.filtrados = filtradoXCat

      }

  },

  // computed:{
  //   filtrarPorSearch(){
  //     this.filtrados = this.eventos.filter(evento => evento.name.toLowerCase().includes(this.inputValue.toLowerCase()))
   
  //   },

    // filtrarXCat(){
    //   this.checked = this.filtrados.filter(evento => evento) 
    //   // let filtrado = eventos.filter((evento) =>  catSeleccionadas.includes(evento["category"]))
 
    // }

 //}

}).mount('#app')


  


 
 


 
 