
/** Retorna tirinhas do arquivo ../api.json utilizando Async/Await **/
/** Poderia estar em arquivo separado e chamar no outros .html, mas é mais para mostrar a utilização de Async/Await */

async function retornaTirinha() {
    const data = await fetch('../api.json');
    return data.json();
}

/** Recebe valores da função acima e chama exibeImagens(x) quadrinhos como parametro*/
async function getTirinhas() {

    const data = await retornaTirinha();
    const quadrinhos = await randomTirinha(data.tirinhas);
    const titulos = document.querySelectorAll('#tirinhaTitulo');

    /** Exibe titulo do quadrinho*/
    titulos.forEach((titulo) => titulo.textContent = quadrinhos.titulo);

    exibeImagens(quadrinhos);
}

/** Exibe imagems do quadrinho aleatório */
const exibeImagens = (quadrinhos) => {
    for (let quadrinho of quadrinhos) {
        const todasTirinhas = document.querySelector('#tirinhas');
        todasTirinhas.innerHTML += `<div class="col-md-8 responsive-wrap"> <div class="booking-checkbox_wrap"> <div class="booking-checkbox"> <img src="${quadrinho.img}" /><hr></div> </div> </div>`
    }
}

/** Retorna um quadrinho aleatório. Seta titulo para cada quadrinho.*/
const randomTirinha = (obj) => {

    obj.armandinho.titulo = 'Armandinho';
    obj.umsabadoqualquer.titulo = 'Um Sabado Qualquer';
    obj.vidaprogramador.titulo = 'Vida Programador';
    obj.vidadesuporte.titulo = 'Vida de Suporte';
    obj.vidadesuporte.titulo = 'Vida de Suporte';
    obj.xkcd.titulo = 'XKCD';

    /** Dei uma pesquisada aqui para ver como retorna um objeto aleatório. 
        No caso, o param "obj" é um objeto contendo todos os quadrinhos.

        REFERENCIA: https://stackoverflow.com/a/15106541/6909253
    */
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

/** INIT FUNCTION */
getTirinhas();