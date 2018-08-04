class DetalheController{

	constructor() {

		let $ = document.querySelector.bind(document);

		this._getInformation = new GetInformation();

		this._viewImgs = new ViewDetalheImgs($(".introduceImg"));

		this._viewImgs1 = new ViewDetalheImgs($(".introduceImg1"));

		this._viewText = new ViewDetalheText($(".introduceText"));

		this._viewText1 = new ViewDetalheText1($(".introduceText1"));

		this._mudaConteudoImg();
		
	}

	_mudaConteudoImg() {

		let url = location.search.replace('?', '');//retira o caracter '?' da search
		
		if (url == 'umsabadoqualquer') {

			this._getInformation
				.filtra('./api.json')
				.then(tirinhas => {
					this._viewImgs.update(tirinhas.umsabadoqualquer, 0);
					this._viewImgs1.update(tirinhas.umsabadoqualquer, 2);
					this._viewText.update('UM SABADO QUALQUER');
					this._viewText1.update('Um Sabado Qualquer');
				})
				.catch(e => console.log(e));
		}

		if (url == 'xkcd') {

			this._getInformation
				.filtra('./api.json')
				.then(tirinhas => {
					this._viewImgs.update(tirinhas.xkcd, 0);
					this._viewImgs1.update(tirinhas.xkcd, 2);
					this._viewText.update('XKCD');
					this._viewText1.update('Xkcd');
				})
				.catch(e => console.log(e));
		}

		if (url == 'armandinho') {

			this._getInformation
				.filtra('./api.json')
				.then(tirinhas => {
					this._viewImgs.update(tirinhas.armandinho, 0);
					this._viewImgs1.update(tirinhas.armandinho, 0);
					this._viewText.update('ARMANDINHO');
					this._viewText1.update('armandinho');
				})
				.catch(e => console.log(e));
		}

		if (url == 'vidadesuporte') {

			this._getInformation
				.filtra('./api.json')
				.then(tirinhas => {
					this._viewImgs.update(tirinhas.vidadesuporte, 0);
					this._viewImgs1.update(tirinhas.vidadesuporte, 1);
					this._viewText.update('VIDA DE SUPORTE');
					this._viewText1.update('Vida de Suporte');
				})
				.catch(e => console.log(e));
		}

		if (url == 'vidadeprogramador') {

			this._getInformation
				.filtra('./api.json')
				.then(tirinhas => {
					this._viewImgs.update(tirinhas.vidaprogramador, 1);
					this._viewImgs1.update(tirinhas.vidaprogramador, 0);
					this._viewText.update('VIDA DE PROGRAMADOR');
					this._viewText1.update('Vida de Programador');
				})
				.catch(e => console.log(e));
		}

	}
}