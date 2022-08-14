const listaVideos = [
    {
        idVideo: "V08k_8SbJsY",
        imagen: "hq720",
        titulo: "Mitos que aún CREES sobre APRENDER INGLÉS",
        canal: "Platzi | Freddy Vegas",
        texto: " ¿Qué te detiene de aprender inglés?",
        categoria: "Consejos",
        etiqueta: "",
    },    

]


function crearLista(registro) {
    return `
<div class="ficha-video-item">
    <figure>
        <img onclick='crearVideos("https://www.youtube.com/embed/${registro.idVideo}")'
            src="https://i.ytimg.com/vi/${registro.idVideo}/${registro.imagen}.jpg" 
            alt="${registro.titulo}"  
            width="" height="${registro.imgAlto}">
    </figure>
    
    <div class="textos">
        <h2>${registro.titulo}</h2>
        <h3>${registro.canal}</h3>
        <p style="display:none">${registro.texto}</p>        
        <h3 class="todos">${document.getElementById("Todos") ? registro.categoria : ''}</h3>
        	
    </div>

</div>
    `
}


const filtrar = document.getElementsByTagName("body")[0].id

if (filtrar == "Todos"){
    const videoItem = document.getElementById("videoItem")
    videoItem.innerHTML += `${listaVideos.map(crearLista).join("")}`
    
} else {
    const result = listaVideos.filter(x => x.categoria == filtrar);
    const videoItem = document.getElementById("videoItem")
    videoItem.innerHTML += `${result.map(crearLista).join("")}`
}

