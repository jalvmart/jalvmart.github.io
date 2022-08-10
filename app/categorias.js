
function createCards(cCards){
    return `
    <div class="cards-item left">
        <a href="${cCards.linkHref}">
            <img src="${cCards.imgSrc}"
                alt="${cCards.titleH2}">
        </a>
        <h2 class="categoriaH2">${cCards.titleH2}</h2>
        <h3 class="mentor">${cCards.titleH3}</h3>
        <p>${cCards.contents}</p>
    </div>
    `
}

let doc = document.getElementById("card-container")

doc.innerHTML = `${dbRutas.map(createCards).join("")}`