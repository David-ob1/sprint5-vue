//impresion html

 export const imprimirHtml = (vector,elementoHtml)=>{
 
  elementoHtml.innerHTML = vector.join("")
  if(vector.length == 0){
    elementoHtml.innerHTML = `<h2 class="no-resul">No results were found</h2>`

  }
  
}

export const agregarHtml = (etiquetas,contenedor) =>{
  contenedor.innerHTML += etiquetas
}
//crear etiquetas html
const crearCheckbox = (nombre,indice) =>{
  return`<label><input type="checkbox" value="${nombre}" id="${indice}">${nombre}</label>`
  }

  const crearCart = (event)=>{

    return` <article class="cart">
    <img src="${event.image}" alt="${event.name}">
    <h2 class="titulo-dc">${event.name}</h2>
    <p>${event.description}</p>
    <div class="pre-anc">
      <h2>${event.price}</h2>
      <a href="./detail.html?parametro=${event._id}">Details</a>
    </div>
    </article>`
}

//array pre-html
 export const arrayCart = (listaEventos)=>{
  let cartas = []
  for(let i = 0; i<listaEventos.length; i++){
      cartas[i] = crearCart(listaEventos[i])
  }

  return cartas
}



// checkbox categorias
export const sinRepetidos = (array,propiedad) => {
    let arrayFinal = []

    for (let item of array){
      if (!arrayFinal.includes(item[propiedad])){
          arrayFinal.push(item[propiedad])
         // console.log(arrayFinal)
      }
    }

    return arrayFinal
 }
 
 export  function   ararCheck(lista){
    let cadaCat = Array.from(lista)
    let categorias = sinRepetidos(cadaCat,"category")
   // console.table(categorias)
      listaToCode(categorias)

      return categorias
  }

 export function listaToCode(array){
   for(let i = 0; i< array.length; i++){
        array[i] = crearCheckbox(array[i], i)

   }
}

//filtros de busqueda
export function filtrarXnombre (eventos,valorUsuario){
    console.table(valorUsuario)
    let valorUsuarioM = valorUsuario.toLowerCase()

      if(valorUsuarioM.length == 0){
        return eventos
      }

    let filtrado = eventos.filter((evento) => evento["name"].toLowerCase().includes(valorUsuarioM))
    return filtrado
  }

  export  function filtrarXCat(eventos,catSeleccionadas){
    if(catSeleccionadas.length == 0){
      return eventos
    }
    let filtrado = eventos.filter((evento) =>  catSeleccionadas.includes(evento["category"]))
    return filtrado
  }

  export function generarHtml(contenedor,objeto){
    contenedor.innerHTML  +=`
        <img src="${objeto.image}" alt="${objeto.name}" class="col-6">
            
    <div class="info">
        <h2>${objeto.name}</h2>
        <p>date: ${objeto.date}</p>
        <p>description: ${objeto.description}</p>
        <p>category: ${objeto.category}</p>
        <p>place: ${objeto.place}</p>
        <p>capacity: ${objeto.capacity}</p>
        <p>assistance: ${objeto.assistance}</p>
        <p>price: ${objeto.price}</p>
    
    </div>`
 }

 export function PrepararCheck(lista){
  let cadaCat = Array.from(lista)
  let categorias = sinRepetidos(cadaCat,"category")
 // console.table(categorias)
    listaToCode(categorias)

    return categorias
}


// html tablas

export function filaTabla1(l,mid,r){
    
  return`<td>${l.name} ${l.porcentaje}%</td>
         <td>${mid.name} ${mid.porcentaje}%</td>
         <td>${r.name} ${r.capacity}</td>
         `
  
}

 export function filaTabla2Y3(cat,dato){
   
              return`<tr><td>${cat}</td>
              <td> $ ${dato.ganancia}</td>
              <td> ${dato. porcentaje}%</td> </tr>`
 }

