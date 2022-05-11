//PASOS PARA CONSUMIR UN API CON JS PURO

//1. DECLARO LA URI (pa donde voy)
const URI= "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US"

//2. DECLARO LOS PARAMETROS DE LA PETICION(QUE VOY A HACER)

const TOKEN="Bearer BQBnzIIK3K3QjQ_opB74Fg8bJBxymHKgdnGhDe-1bHzOW6G4RasZ6dDJl-3v5-dWgxJ-4u56_uZTHMZ-Hm_B262hShArI48vVz93B-6pFBFl1kxkHKsaFpWFdl3cmtIud9SZGogZX4f1Lr4e9J1DrvUQYb3NnRdgFSQ"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//3. DECLARO EL FETCH( VOY AL SERVIDOR OME)
fetch(URI, PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //respuesta es un objeto 
    console.log(respuesta.tracks) //
    respuesta

    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url) 
})
.catch(function(respuesta){
    console.log(respuesta)
})


