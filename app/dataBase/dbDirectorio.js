/*
categorias: 
- Consulta-Portafolios-Desarrolladores-Web
- Portafolio-Inspiración
- Aprende-Desarrollo-Web
- Ideas-para-Proyectos
- Recursos-para-Aprender-JavaScript
- extensiones-vs-code
- Inglés
*/ 

const dbDirectorio = [
    {
        enlace : "https://platzi.com/blog/10-plugins-esenciales-para-vscode/",
        titulo : "10 Plugins o extensiones esenciales de VSCode para Frontends",
        descripcion : "10 complementos que utilizo en mi día a día como desarrollador Frontend",
        categoria : "extensiones-vs-code",
    },
    {
        enlace : "https://jacekjeznach.com/",
        titulo : "14 Best Web Developer Portfolios To Get Inspiration",
        descripcion : "Let these mind-blowing portfolios inspire your next portfolio",
        categoria : "Consulta-Portafolios-Desarrolladores-Web",
    },
    {
        enlace : "https://www.hostinger.com/tutorials/web-developer-portfolio",
        titulo : "25 ejemplos de portafolios de desarrolladores web para inspirarte",
        descripcion : "Un portafolio web sólido es crucial para una carrera exitosa como desarrollador web .",
        categoria : "Consulta-Portafolios-Desarrolladores-Web",
    },
    {
        enlace : "https://hashnode.com/post/30-web-developer-portfolios-to-inspire-you-cknfx6wdg069kxws1bjjv8mhw",
        titulo : "30 portafolios de desarrolladores web para inspirarte",
        descripcion : "30 portafolios de desarrolladores web que te brindarán inspiración para crear tu propio portafolio.",
        categoria : "Consulta-Portafolios-Desarrolladores-Web",
    },
    {
        enlace : "https://jacekjeznach.com/",
        titulo : "Jack Jeznach",
        descripcion : "¡El portafolio de Jack es muy llamativo! Las combinaciones de colores funcionan muy bien y las animaciones funcionan a la perfección.",
        categoria : "Portafolio-Inspiración",
    },
    {
        enlace : "https://www.jason.af/",
        titulo : "Jason Lengstorf",
        descripcion : "El portafolio de Jason es uno de los portafolios en línea más creativos. ¡Los colores, las animaciones y los sonidos son perfectos!",
        categoria : "Portafolio-Inspiración",
    },
    {
        enlace : "https://brittanychiang.com/",
        titulo : "Brittany Chiang",
        descripcion : "Su portafolio destaca quién es Brittany y su experiencia laboral. Además, también puedes ver los proyectos en los que trabaja.",
        categoria : "Portafolio-Inspiración",
    },
    {
        enlace : "https://catalins.tech/20-best-places-to-learn-programming-for-free",
        titulo : "Los 20 mejores lugares para aprender programación gratis",
        descripcion : "Una lista seleccionada de recursos gratuitos de calidad para ayudarlo a aprender a programar de forma gratuita",
        categoria : "Aprende-Desarrollo-Web",
    },
    {
        enlace : "https://catalins.tech/10-programming-project-ideas-for-beginners",
        titulo : "10 ideas de proyectos de programación para principiantes",
        descripcion : "Proyectos de programación para que los principiantes practiquen sus habilidades de programación.",
        categoria : "Ideas-para-Proyectos",
    },
    {
        enlace : "https://catalins.tech/best-resources-to-learn-javascript-as-a-beginner",
        titulo : "Los 5 mejores recursos para aprender JavaScript como principiante",
        descripcion : "La lista de este artículo no es exhaustiva, pero cubre algunos de los mejores recursos para aprender JavaScript.",
        categoria : "Recursos-para-Aprender-JavaScript",
        etiqueta: "JavaScript"
    },
    {
        enlace : "https://www.infobooks.org/free-pdf-books/language-learning/english/",
        titulo : "25+ English Learning Books for Free! [PDF]",
        descripcion : "Libros para aprender inglés en formato PDF.",
        categoria : "Inglés",
        etiqueta: "Libros-Inglés"
    },
]

function crearDirectorio(registro){
    return `
        <h2><a href='${registro.enlace}' target='_blank'>${registro.titulo}</a></h2>
        <p><strong>${registro.categoria}</strong> | ${registro.descripcion}</p>
    `
}

const idDirectorio = document.getElementById("directorio")

idDirectorio.innerHTML = `${dbDirectorio.map(crearDirectorio).join("")}`



