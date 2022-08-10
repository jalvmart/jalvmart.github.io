/* tamaño de la imagen: libros 379px x 500px */ 
const listaLibros = [    
    {
        imagen: "../public/images/libros/Eloquent-JavaScript.jpg",
        enlace: "https://eloquentjs-es.thedojo.mx/",
        tipoTarget: "_blank",
        titulo: "Eloquent JavaScript",
        autor: "Marijn Haverbeke",
        edicion: "3ra edición en Español",
        year: "2018",
        texto: "Eloquent JavaScript. Una Introducción Moderna a la Programación",
        categoria: "JavaScript",
        etiqueta: "",
    },
    {
        imagen: "../public/images/libros/Building-Front-End-Web-Apps-with-Plain-JavaScript.jpg",
        enlace: "https://web-engineering.info/tech/JsFrontendApp/book/",
        tipoTarget: "_blank",
        titulo: "Building Front-End Web Apps with Plain JavaScript",
        autor: "Gerd Wagner",
        edicion: "3ra edición en Inglés",
        year: "2021",
        texto: "Building Front-End Web Apps with Plain JavaScript",
        categoria: "JavaScript",
        etiqueta: "",
    },


]


function crearLista(registro) {
    return `
<div class="cards-item">
    <figure>
        <a href="${registro.enlace}" target="${registro.tipoTarget}">
            <img class="libros" src="${registro.imagen}" alt="${registro.titulo}">
        </a>
    </figure>
    
    <div class="textos">
        <h2>${registro.titulo}</h2>
        <h3>${registro.autor}</h3>
        <h3>${registro.edicion} | ${registro.year}</h3>
        <h3>Categoría: ${registro.categoria}</h3>
        <p style="display:none">${registro.texto}</p> 
    </div>

</div>
    `
}

const libroItem = document.getElementById("card-container")
libroItem.innerHTML = `${listaLibros.map(crearLista).join("")}`

