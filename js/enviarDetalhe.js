/** Gets values from api.json in order to go to detail page*/
async function receberTirinhas() {
    const data = await fetch('../api.json');
    return data.json();
}

/** Gets data from receberTirinhas()*/
async function getTirinhas() {
    const quadrinhos = await receberTirinhas();
    this.detail(quadrinhos)
}

/** Initilize functions so as to be sent to detail page, when clicked */
function detail(res) {

    const sendSabado = document.getElementById('sendSabado');
    const sendProgramador = document.getElementById('sendProgramador');
    const sendXkcd = document.getElementById('sendXkcd');
    const sendSuporte = document.getElementById('sendSuporte');
    const sendArmandinho = document.getElementById('sendArmandinho');

    /** Calls senToDetail(x, y) */
    sendSabado.addEventListener('click', () => {
        const sabado = "Um Sabado Qualquer";
        this.sendToDetail(sabado, res.tirinhas.umsabadoqualquer);
    });

    sendProgramador.addEventListener('click', () => {
        const programador = "Vida Programador";
        this.sendToDetail(programador, res.tirinhas.vidaprogramador);
    });

    sendXkcd.addEventListener('click', () => {
        const xkcd = "XKCD";
        this.sendToDetail(xkcd, res.tirinhas.xkcd);
    });

    sendSuporte.addEventListener('click', () => {
        const suporte = "Vida de Suporte";
        this.sendToDetail(suporte, res.tirinhas.vidadesuporte);
    });

    sendArmandinho.addEventListener('click', () => {
        const armandinho = "Armandinho";
        this.sendToDetail(armandinho, res.tirinhas.armandinho);
    });
}

/** Actually sends to detalhe.html page passing values stored in localstorage*/
function sendToDetail(titulo, tirinhas) {
    localStorage.setItem('titulo', JSON.stringify(titulo));
    localStorage.setItem('tirinha', JSON.stringify(tirinhas));
    window.location.href = "detalhe.html"
}

/** INIT FUNCTION */
getTirinhas();