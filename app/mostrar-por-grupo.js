
function createCardsG(cCards) {
    return `
    <div class="cards-item left">
        <a href="${cCards.linkHref}" target="${cCards.targetType}">
            <img src="${cCards.imgSrc}"
                alt="${cCards.titleH2}">
        </a>
        <h2>${cCards.titleH2}</h2>
        <h3 class="mentor">${cCards.titleH3}</h3>
        <p>${cCards.contents}</p>
    </div>
    `
}



let filtrar = document.getElementsByTagName("body")[0].id
const result = dbRutas.filter(x => x.category == filtrar);

/* categoria principal: Sitios Web */
 
let idCategoria = document.querySelector("body")
let classCategoria = document.querySelector(".cards").classList[1]
if (idCategoria.id == classCategoria) {
    let doc = document.getElementById("card-container")
    doc.innerHTML = `${result[0].group.map(createCardsG).join("")}` 
} 


/* Sub-categorías: */
let cursos = document.querySelector(".cards").classList[1]
if (!cursos.length == 0){
    let doc = document.getElementById("card-container")
    let cod = document.querySelector(".cards").classList[2]
    doc.innerHTML = `${result[0].group[cod].cursos.map(createCardsG).join("")}`     
}


