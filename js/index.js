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
    this.sendToDetail(res);

});

function funcUmSabadoQualquer(params) {
    const img = document.getElementById('img-sabado');
    const views = document.getElementById('views-sabado');
    const i = this.getRandomImage();
    const total = this.getViews(params);

    img.src = params[i].img;
    views.textContent = ` ${total} Visualizações`;
}

function funcAarmandinho(params) {
    const img = document.getElementById('img-armandinho');
    const views = document.getElementById('views-armandinho');
    const i = this.getRandomImage();
    const total = this.getViews(params);

    img.src = params[i].img;
    views.textContent = ` ${total} Visualizações`;
}

function funcVidaDeSuporte(params) {
    const img = document.getElementById('img-suporte');
    const views = document.getElementById('views-suporte');
    const i = this.getRandomImage();
    const total = this.getViews(params);

    img.src = params[i].img;
    views.textContent = ` ${total} Visualizações`;
}

function funcVidaProgramador(params) {
    const img = document.getElementById('img-programador');
    const views = document.getElementById('views-programador');
    const i = this.getRandomImage();
    const total = this.getViews(params);

    img.src = params[i].img;
    views.textContent = ` ${total} Visualizações`;
}

function funcXkcd(params) {
    const img = document.getElementById('img-xkcd');
    const views = document.getElementById('views-xkcd');
    const i = this.getRandomImage();
    const total = this.getViews(params);

    img.src = params[i].img;
    views.textContent = ` ${total} Visualizações`;
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

// Detail
function sendToDetail(res) {

    const sendSabado = document.getElementById('sendSabado');
    const sendProgramador = document.getElementById('sendProgramador');
    const sendXkcd = document.getElementById('sendXkcd');
    const sendSuporte = document.getElementById('sendSuporte');
    const sendArmandinho = document.getElementById('sendArmandinho');
    
    sendSabado.addEventListener('click', () => {
        localStorage.setItem('tirinha', JSON.stringify(res.tirinhas.umsabadoqualquer));
        window.location.href = "detalhe.html"
    });
    
    sendProgramador.addEventListener('click', () => {
        localStorage.setItem('tirinha', JSON.stringify(res.tirinhas.vidaprogramador));
        window.location.href = "detalhe.html"
    });
    
    sendXkcd.addEventListener('click', () => {
        localStorage.setItem('tirinha', JSON.stringify(res.tirinhas.xkcd));
        window.location.href = "detalhe.html"
    });
    
    sendSuporte.addEventListener('click', () => {
        localStorage.setItem('tirinha', JSON.stringify(res.tirinhas.vidadesuporte));
        window.location.href = "detalhe.html"
    });
    
    sendArmandinho.addEventListener('click', () => {
        localStorage.setItem('tirinha', JSON.stringify(res.tirinhas.armandinho));
        window.location.href = "detalhe.html"
    });
}
