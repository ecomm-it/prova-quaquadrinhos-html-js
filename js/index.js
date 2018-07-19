//Retorna tirinhas do arquivo ../api.json
function retornaTirinhas() {
    return fetch('../api.json').then((tirinhas) => {
        return tirinhas.json();
    }).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err)
    });
}

retornaTirinhas().then((res) => {

    const tirinhas = res.tirinhas;

    const umSabadoQualquer = tirinhas.umsabadoqualquer;
    const armandinho = tirinhas.armandinho;
    const vidaDeSuporte = tirinhas.vidadesuporte;
    const vidaProgramador = tirinhas.vidaprogramador;
    const xkcd = tirinhas.xkcd;

    //Initialize functions
    this.funcUmSabadoQualquer(umSabadoQualquer);
    this.funcAarmandinho(armandinho);
    this.funcVidaDeSuporte(vidaDeSuporte);
    this.funcVidaProgramador(vidaProgramador);
    this.funcXkcd(xkcd);

    //Sent to detail
    this.detail(res);
});

function funcUmSabadoQualquer(params) {
    const img = document.getElementById('img-sabado');
    const views = document.getElementById('views-sabado');
    this.showImageAndViews(img, views, params);
}

function funcAarmandinho(params) {
    const img = document.getElementById('img-armandinho');
    const views = document.getElementById('views-armandinho');
    this.showImageAndViews(img, views, params);
}

function funcVidaDeSuporte(params) {
    const img = document.getElementById('img-suporte');
    const views = document.getElementById('views-suporte');
    this.showImageAndViews(img, views, params);
}

function funcVidaProgramador(params) {
    const img = document.getElementById('img-programador');
    const views = document.getElementById('views-programador');
    this.showImageAndViews(img, views, params);
}

function funcXkcd(params) {
    const img = document.getElementById('img-xkcd');
    const views = document.getElementById('views-xkcd');
    this.showImageAndViews(img, views, params);
}

// Get total views
function getViews(params) {
    let total = 0;
    for (let x of params) {
        total += x.views
    }
    return total;
}

// Random image
function getRandomImage() {
    const random = Math.floor(Math.random() * 3);
    return random;
}

function showImageAndViews(img, views, params) {
    const i = this.getRandomImage();
    const total = this.getViews(params);
    img.src = params[i].img;
    views.textContent = ` ${total} Visualizações`;
}

// Detail
function detail(res) {

    const sendSabado = document.getElementById('sendSabado');
    const sendProgramador = document.getElementById('sendProgramador');
    const sendXkcd = document.getElementById('sendXkcd');
    const sendSuporte = document.getElementById('sendSuporte');
    const sendArmandinho = document.getElementById('sendArmandinho');

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

function sendToDetail(titulo, tirinhas) {
    localStorage.setItem('titulo', JSON.stringify(titulo));
    localStorage.setItem('tirinha', JSON.stringify(tirinhas));
    window.location.href = "detalhe.html"
}