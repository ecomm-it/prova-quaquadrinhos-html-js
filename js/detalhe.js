/** Gets items in localstorages */
const tirinhas = JSON.parse(localStorage.getItem('tirinha'));
const titulo = JSON.parse(localStorage.getItem('titulo'));

/** This selector is supposed to recieve a list of comic titles */
const tirinhasTitulo = document.querySelectorAll('#tirinhaTitulo');

for (let tirinhaTitulo of tirinhasTitulo) {
    tirinhaTitulo.textContent = titulo;
}

/** Displays an array of comics appending to the html big string  */
for (let tirinha of tirinhas) {
    const todasTirinhas = document.querySelector('#tirinhas');
    todasTirinhas.innerHTML += `<div class="col-md-8 responsive-wrap"> <div class="booking-checkbox_wrap"> <div class="booking-checkbox"> <img src="${tirinha.img}" /><hr></div> </div> </div>`
}