const listaVideos = [
    /* {
        idVideo: "",
        imagen: "hq720",
        titulo: "TITULO",
        canal: "CANAL",
        texto: "TEXTO",
        imgAncho: "",
        imgAlto: "",
    }, */
    {
        idVideo: "ExsGyZDBlJQ",
        imagen: "hq720",
        titulo: "La ruta para aprender desarrollo web profesional",
        canal: "Platzi",
        texto: "Desarrolla tu propia página web o trabaja como web developer creando con HTML5, CSS3 y JavaScript.",
    },
    {
        idVideo: "bp_IXqYRgYw",
        imagen: "hq720_2",
        titulo: "Recursos para mejorar tus páginas web",
        canal: "Midudev",
        texto: `
            <a href='https://joshwcomeau.com/shadow-palette' target='_blank'>
                Sombras:</a> Shadow Palete Generator.<br>
            <a href='https://bennettefeely.com/clippy' target='_blank'> 
                Clippy:</a> Darle forma a tus imagenes.<br> 
            <a href='https://cssloaders.github.io' target='_blank'>
                CSSLoaders:</a> Reindicadores de Carga.<br>
            <a href='https://designgradients.com' target='_blank'>
                Design Gradients:</a> Fondos degradados.
                `,
    },
    {
        idVideo: "aJjrsHhv1OE",
        imagen: "hq720",
        titulo: "Los 4 caminos para crecer después de tu primer empleo",
        canal: "Platzi",
        texto: "Conoce las habilidades que te darán un mejor salario o un mejor empleo.",
    },
    {
        idVideo: "w_MTKN5PstQ",
        imagen: "hq720",
        titulo: "Consejos que todo diseñador debe conocer",
        canal: "Platzi",
        texto: "Consejos que todo diseñador debe conocer.",
        imgAncho: "",
        imgAlto: "",
    },
    {
        idVideo: "8mDEnaHaIDw",
        imagen: "hqdefault",
        titulo: "Como hacer una Ventana Modal | Html y Css",
        canal: "SLee Dw",
        texto: "Crear una Ventana Modal con HTML y CSS.",
        imgAncho: "",
        imgAlto: "175px",
    },
    {
        idVideo: "rm7bOdKaSys",
        imagen: "hq720",
        titulo: "Ventana Modal Responsive con Html y Css",
        canal: "SLee Dw",
        texto: "como hacer una ventana modal responsive con Html y Css.",
        imgAncho: "",
        imgAlto: "",
    },
    {
        idVideo: "U329pKWKqWw",
        imagen: "hq720",
        titulo: "Consejo: Aprende a Documentar tu Código Javascript | JSDoc",
        canal: "FalconMasters",
        texto: "JSDoc, una herramienta para generar documentación muy fácilmente.",
        imgAncho: "",
        imgAlto: "",
    },
    {
        idVideo: "GUTt0qKUDyU",
        imagen: "hq720",
        titulo: "CONSEJO: Estas usando mal los Event Listeners en Javascript !!!",
        canal: "FalconMasters",
        texto: "Aprender javascript, para optimizar mas su código mediante delegación de eventos..",
        imgAncho: "",
        imgAlto: "",
    },
    {
        idVideo: "aacwoizx1nc",
        imagen: "hq720",
        titulo: "Este es el MEJOR bootcamp de habla hispana (para aprender a programar)",
        canal: "Programador X",
        texto: '<a href="https://www.academia-x.com" target="_blank">bootcamp"</a> Contiene todos los conocimientos de programación web que tienen Ingenieros de Software en Google, Amazon, Meta, y Apple. ',
        imgAncho: "",
        imgAlto: "",
        fecha: {
            dia:"27",
            mes:"07",
            axo:"2022",
        },
    },
    {
        idVideo: "Xt1Cw4qM3Ec",
        imagen: "hq720",
        titulo: "Josh Comeau – Secret Mechanisms of CSS",
        canal: "9elements",
        texto: "CSS a veces puede parecer un lenguaje muy inconsistente. ¿Por qué este fragmento que he usado innumerables veces de repente se comporta de manera diferente? Resulta que están sucediendo muchas cosas debajo del capó. CSS es una colección de algoritmos de diseño complejos, con todo tipo de mecanismos ocultos y comportamientos implícitos. Cuando nos tomamos el tiempo para aprender cómo funciona CSS, el lenguaje comienza a tener mucho más sentido y las sorpresas desagradables se vuelven mucho menos comunes.",
        imgAncho: "",
        imgAlto: "",
    },
    
    {
        idVideo: "e5G1e_ApXPk",
        imagen: "hq720",
        titulo: "CSS para desarrolladores JavaScript 🎨- P1 ",
        canal: "vamoacodear",
        texto: "CSS para desarrolladores de JavaScript by Josh Comeau: lista completa: <a href='https://www.youtube.com/watch?v=e5G1e_ApXPk&list=PLX4PpbBSOPBSJnqP8XcKXXrJ49iSKIg5D' target='_blank'>19 videos</a>.",
        imgAncho: "",
        imgAlto: "",
    },

    {
        idVideo: "ESAXStllfcw",
        imagen: "hq720",
        titulo: "Kevin Powell - Flexbox vs. Grid",
        canal: "9elements",
        texto: "Crear diseños con CSS puede ser complicado, y es complicado por el hecho de que tenemos dos herramientas de diseño diferentes en Flexbox y Grid. Decidir cuál usar en una situación dada no siempre es obvio, pero puede ser mucho más fácil cuando nos apoyamos en las fortalezas de cada uno.",
        imgAncho: "",
        imgAlto: "",
    },

    {
        idVideo: "HtunPQtr-Xw",
        imagen: "hq720",
        titulo: "5 HTML, CSS & JS Mini Projects - Scroll Animation, Rotating Navigation, Drag Events, etc",
        canal: "Traversy Media",
        texto: "5 projects from my 50 Projects In 50 Days course on Udemy. These projects are meant to sharpen your CSS skills and help you work with the DOM using JavaScript.",
        imgAncho: "",
        imgAlto: "",
    },

    {
        idVideo: "KxElD42SHD0",
        imagen: "hq720",
        titulo: "React.js desde cero 🚀 - P1: Template literals, arrow functions, destructuring, import/export...",
        canal: "vamosacodear",
        texto: "En este video vemos: Repaso de JavaScript para conocer React, Template literals,  arrow functions, destructuring, import/export, spread y rest operators, default parameters y más!",
        imgAncho: "",
        imgAlto: "",
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
        <p>${registro.texto}</p>
    </div>

</div>
    `
}

const videoItem = document.getElementById("videoItem")
videoItem.innerHTML += `${listaVideos.map(crearLista).join("")}`

//apocc: aprender practicar organizar crear y compartir
//aprende, practica, organiza, crea y comparte