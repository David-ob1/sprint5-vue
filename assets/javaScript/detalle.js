const { createApp } = Vue


createApp({

    data(){
        return{
            eventos:[],
            evento:{},

        }

        
    },

    created(){
            fetch("https://mindhub-xj03.onrender.com/api/amazing") //devuelve una promesa
            .then(respuesta => respuesta.json())
            .then( data =>{
                    console.log(data)
                    this.eventos = data.events
                    


            let parametro = location.search
            let params = new URLSearchParams(parametro)
            console.log(params)

            let idEvento = params.get("parametro")
            console.log(idEvento)

            this.evento = this.eventos.find(evento => evento._id  == idEvento)
                console.log(this.evento)

        })
    .catch()

    }



}).mount('#app')

//capturar el objeto





   

    
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

