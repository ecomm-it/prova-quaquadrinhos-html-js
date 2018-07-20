
/** Retorna tirinhas do arquivo ../api.json utilizando Fetch API **/
/** Mesmo caso do random, aqui é mais paara mostrar um exemplo utilizando Fetch API e Promises. */

const retornaTirinhas = () => {
    return fetch('../api.json').then((tirinhas) => {
        return tirinhas.json();
    }).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err)
    });
}

/** INIT FUNCTION */
retornaTirinhas().then((res) => {

    const tirinhas = res.tirinhas;

    const umSabadoQualquer = tirinhas.umsabadoqualquer;
    const armandinho = tirinhas.armandinho;
    const vidaDeSuporte = tirinhas.vidadesuporte;
    const vidaProgramador = tirinhas.vidaprogramador;
    const xkcd = tirinhas.xkcd;

    /** Initialize functions passing return value from api.json */
    funcUmSabadoQualquer(umSabadoQualquer);
    funcAarmandinho(armandinho);
    funcVidaDeSuporte(vidaDeSuporte);
    funcVidaProgramador(vidaProgramador);
    funcXkcd(xkcd);

});

/** These group of functions display a random imagem and total views */
const funcUmSabadoQualquer = (params) => {
    const img = document.getElementById('img-sabado');
    const views = document.getElementById('views-sabado');
    showImageAndViews(img, views, params);
}

const funcAarmandinho = (params) => {
    const img = document.getElementById('img-armandinho');
    const views = document.getElementById('views-armandinho');
    showImageAndViews(img, views, params);
}

const funcVidaDeSuporte = (params) => {
    const img = document.getElementById('img-suporte');
    const views = document.getElementById('views-suporte');
    showImageAndViews(img, views, params);
}

const funcVidaProgramador = (params) => {
    const img = document.getElementById('img-programador');
    const views = document.getElementById('views-programador');
    showImageAndViews(img, views, params);
}

const funcXkcd = (params) => {
    const img = document.getElementById('img-xkcd');
    const views = document.getElementById('views-xkcd');
    showImageAndViews(img, views, params);
}

/** Return total views from a comic passed as parameter */
const getViews = (params) => {
    let total = 0;
    for (let x of params) {
        total += x.views
    }
    return total;
}

/** Loads a random image in order to be displayed in the main page */
const getRandomImage = () => {
    const random = Math.floor(Math.random() * 3);
    return random;
}

/** Displays the image and total views for each comic */
const showImageAndViews = (img, views, params) => {
    const i = getRandomImage();
    const total = getViews(params);
    img.src = params[i].img;
    views.textContent = `${total} Visualizações`;
}

/**  Opens modal */
const comicaModal = () => {

    const items = document.querySelectorAll('.find-place-img_wrap');
    let modalImg = document.getElementById('modalImg');

    items.forEach(item => {
        item.addEventListener('click', () => {
            $('#comic').modal();
            modalImg.innerHTML = item.getElementsByTagName('img')[0].outerHTML;
        });
    });
}

comicaModal();
