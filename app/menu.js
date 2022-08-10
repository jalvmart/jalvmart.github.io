


function crearEncabezado() {
    return `
    <a href="index.html">
        <figure class="logo">  
            <img src="../public/images/logo-code-r11-04.png" alt="logo CODE R11"  >
        </figure>
    </a>

    <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="proyecto-code-r11.html">Proyecto CODE R11</a></li>
            <li><a href="Blog.html">Blog</a></li>
        </ul>
    </nav>`
}

function crearPiePagina() {
    return `
        <p>Design by Code R11 | 2022</p>
        <p>Aprendizaje Activo basado en Proyectos</p>
        `
}

function mensajeEncabezado(){
    const bloque0 = document.getElementById("bloque0")
    bloque0.innerHTML = `
    <p>+58 4125931610</p>
    <p>Acceso | Registro</p>`
}

/* crear encabezado: header */
const idHeader = document.getElementById("menuAppHeader")
idHeader.innerHTML = `${crearEncabezado()}`

/* crear pie de página: footer */
let footerSection1 = document.getElementById("footer-section1")
footerSection1.innerHTML = `${crearPiePagina()}`
