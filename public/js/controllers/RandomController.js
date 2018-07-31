class RandomController{

	constructor() {

		let $ = document.querySelector.bind(document);

		this._getInformation = new GetInformation();

		this._viewImg = new ViewRandomImg($(".introduceImg"));

		this._viewText = new ViewRandomText($(".introduceText"));


		this.mudaConteudo();
	}

	mudaConteudo() {

		let y = Math.floor(Math.random() * 5);

		let x = Math.floor(Math.random() * 3);

		this._getInformation
			.filtra('api.json')
			.then(tirinhas => {

				let tiras = [tirinhas.umsabadoqualquer, 
					tirinhas.xkcd, tirinhas.armandinho,
					tirinhas.vidadesuporte, tirinhas.vidaprogramador];

				this._viewImg.update(tiras[y], x);
				this._viewText.update(tiras[y], x);
			})
			.catch(e => console.log(e));

	}

}