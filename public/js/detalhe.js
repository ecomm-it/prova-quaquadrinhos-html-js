const tirinhas = JSON.parse(localStorage.getItem('tirinha'));
const titulo = JSON.parse(localStorage.getItem('titulo'));
const tirinhasTitulo = document.querySelectorAll('#tirinhaTitulo');

for (let tirinhaTitulo of tirinhasTitulo) {
    tirinhaTitulo.textContent = titulo;
}

for (let tirinha of tirinhas) {
    const todasTirinhas = document.querySelector('#tirinhas');
    todasTirinhas.innerHTML += `<div class="col-md-8 responsive-wrap"> <div class="booking-checkbox_wrap"> <div class="booking-checkbox"> <img src="${tirinha.img}" /><hr></div> </div> </div>`
}