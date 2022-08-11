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
    {
        imagen: "../public/images/libros/JavaScript-for-Impatient-Programmers.jpg",
        enlace: "https://exploringjs.com/impatient-js/toc.html",
        tipoTarget: "_blank",
        titulo: "JavaScript for impatient programmers",
        autor: "Dr. Axel Rauschmayer",
        edicion: "1ra edición en Inglés",
        year: "2022",
        texto: "JavaScript for impatient programmers (ES1–ES2022)",
        categoria: "JavaScript",
        etiqueta: "",
    },
    {
        imagen: "../public/images/libros/Tackling-TypeScript-Upgrading-from-JavaScript.jpg",
        enlace: "https://exploringjs.com/tackling-ts/toc.html",
        tipoTarget: "_blank",
        titulo: "Tackling TypeScript. Upgrading from JavaScript",
        autor: "Dr. Axel Rauschmayer",
        edicion: "1ra edición en Inglés",
        year: "2022",
        texto: "Learn TypeScript. Deepen your existing knowledge of TypeScript",
        categoria: "JavaScript",
        etiqueta: "",
    },
    {
        imagen: "../public/images/libros/Human-JavaScript.jpg",
        enlace: "https://read.humanjavascript.com/",
        tipoTarget: "_blank",
        titulo: "Human JavaScript",
        autor: "Henrik Joreteg",
        edicion: "",
        year: "",
        texto: "No magic frameworks. No monolithic toolkits. You're going to work with proper, real-life javascript in a way you'll understand, and with explanations that help you learn how to make great choices as you build your apps.",
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

