function crearEncabezado() {
    return `
    <a href="index.html" class="logo">
            <figure>
                <img src="logo-code-r11.png" alt="logo code r11">
            </figure>            
        </a>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="#">Git</a></li>
                <li><a href="#">Node.js</a></li>
                <li><a href="#">React</a></li>
            </ul>
        </nav>
    `
}

function crearPiePagina() {
    return `
        <p>Code R11 | Aprendizaje Activo 2022</p>
    `
}

/* crear encabezado: header */
const idHeader = document.getElementById("header")
idHeader.innerHTML = `${crearEncabezado()}`

/* crear pie de página: footer */
const idFooter = document.getElementById("footer-section1")
idFooter.innerHTML = `${crearPiePagina()}`
