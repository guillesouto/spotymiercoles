//PASOS PARA CONSUMIR UN API CON JS PURO

//1. DECLARO LA URI (pa donde voy)
const URI= "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US"
//const URI= "https://api.spotify.com/v1/artists/4W3fa7tiXGVXl3KilbACqt/top-tracks?market=US"

//2. DECLARO LOS PARAMETROS DE LA PETICION(QUE VOY A HACER)

const TOKEN="Bearer BQBURzqBjDD0j_8pe9PV7wz1OnWNQiyaevWDZNb4SWueYsUNapJB_Hf0ChD-4dEyMKlG8WE0h1tQGf84CrLvYOtJJWvXU2AMFNybbSohpAumQD8xW6ow9KRHlb-Rt5WcMgrH4KS4Y5AVmU4JrTqQ-1rrQQ-yR7Cx-ZE"
//const TOKEN="Bearer BQBOVAXzjv6yinVR-q_w70MkV-SAdGiOy1sAkqoZA4XSL5S-crL6bRxgDgdPPWTb3S14ypop01sFLuvop1vt7vJW0fGhMeNgLkPF7xcInP83VUnhVED0Khwz6QhwElRwYaGbQ5oAlL1J2svvyp7vX9PqoAcbag-QKUc"


const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//RUTINA PARA CONSUMIR API CON METODO POST
//1. PARA DONDE VAMOS
 const URIPOST = "https://accounts.spotify.com/api/token"

 //2. almaceno los datos que voy a enviar (datos de thunderbird o postman)
 let dato1='grant_type=client_credentials'
 let dato2='client_id=9d3d71ffb1004e0fa671c12aad898013'
 let dato3='client_secret=6437d8f2a0614b5292107c4677eb5eff'

 //3. configuro la PETICION
 const PETICIONPOST={
     method:"POST",
     headers:{
         "Content-type":"application/x-www-form-urlencoded"
     },
     body: dato1+'&'+dato2+'&'+dato3
 }

//4. voy al servidor A CONSUMIR EL SERVICIO 
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token= respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})



//3. DECLARO EL FETCH( VOY AL SERVIDOR OME)
/*fetch(URI, PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //respuesta es un objeto 
    console.log(respuesta.tracks) //arreglo de 10 canciones
    pintarCanciones(respuesta.tracks)


})
.catch(function(respuesta){
    console.log(respuesta)
})

// funcion para recorrer un arreglo

function pintarCanciones(canciones){

    let fila= document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //rutina para llenado
        //PINTAMOS LA COLUMNA DONDE PONER LAS TARJETAS
        let columna= document.createElement("div")
        columna.classList.add("col")

        //CREAMOS LA TARJETA DONDE PINTAR
        let tarjeta= document.createElement("div")
        tarjeta.classList.add("card","mb-3","h-100","w-100","shadow")

        //-------------------------------------------------------------------------------------------------------
        //CREAMOS UNA SUBDIVICION PARA LA IMAGEN
        let contimagen= document.createElement("div")
        contimagen.classList.add("col-md-4")

        //CREAMOS UNA SUBDIVICION PARA el Relleno
        let contText= document.createElement("div")
        contText.classList.add("col-md-8")

        //-------------------------------------------------------------------------------------------------------

        // COLOCAMOS LA IMAGEN//----///////////-------------------////////////////////---------------////////////////
        ///*
        let portada= document.createElement("img")
        portada.classList.add("w-100","fluid")
        portada.src=cancion.album.images[0].url //*
        

        //PINTAMOS EL NOMBRE //----///////////-------------------////////////////////---------------////////////////
        let nombre= document.createElement("h5")
        nombre.classList.add("w-100","fluid")
        nombre.textContent=cancion.name

        //COLOCAMOS EL AUDIO //----///////////-------------------////////////////////---------------////////////////
        let audio= document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        //PADRES E HIJOS
        tarjeta.appendChild(portada)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(audio)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })


}*/