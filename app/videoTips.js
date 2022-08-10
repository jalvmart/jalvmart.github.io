function crearListaVideo(registro){
    return `
    <div class="video-tips-item cards-item">                         
    <iframe src="${registro.srcIframe}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe> 
        <h2>${registro.title}</h2>
        <p><b>${registro.author} | ${registro.channel}</b></p>
        <p>${registro.contents}</p>
    </div>
    `
}

let vt = document.getElementById("videoTips")
vt.innerHTML = `${dbVideoTips.map(crearListaVideo)}`