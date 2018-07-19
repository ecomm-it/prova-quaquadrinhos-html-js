//Retorna tirinhas do arquivo ../api.json utilizando Async/Await
async function retornaTirinhas() {
    const data = await fetch('../api.json');
    return data.json();
}

async function getTirinhas() {
    const data = await retornaTirinhas();
    const quadrinhos = await randomTirinha(data.tirinhas);
    const titulos = document.querySelectorAll('#tirinhaTitulo');
    titulos.forEach((titulo) => titulo.textContent = quadrinhos.titulo);

    exibeImagens(quadrinhos);

}

// Exibe imagems
const exibeImagens = (quadrinhos) => {
    for (let quadrinho of quadrinhos) {
        const todasTirinhas = document.querySelector('#tirinhas');
        todasTirinhas.innerHTML += `<div class="col-md-8 responsive-wrap"> <div class="booking-checkbox_wrap"> <div class="booking-checkbox"> <img src="${quadrinho.img}" /><hr></div> </div> </div>`
    }
}

// Tirinha randomica
const randomTirinha = function (obj) {

    //Set Titles
    obj.armandinho.titulo = 'Armandinho';
    obj.umsabadoqualquer.titulo = 'Um Sabado Qualquer';
    obj.vidaprogramador.titulo = 'Vida Programador';
    obj.vidadesuporte.titulo = 'Vida de Suporte';
    obj.vidadesuporte.titulo = 'Vida de Suporte';
    obj.xkcd.titulo = 'XKCD';

    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

getTirinhas();