class PrincipalController{
	
	constructor() {

		let $ = document.querySelector.bind(document);

		this._getInformation = new GetInformation();

		this._viewPrincipal = new ViewPrincipal($(".umsabadoqualquer"));

		this._viewPrincipal1 = new ViewPrincipal1($(".vidaprogramador"))

		this._viewPrincipal2 = new ViewPrincipal2($(".xkcd"));

		this._viewPrincipal3 = new ViewPrincipal3($(".vidadesuporte"));

		this._viewPrincipal4 = new ViewPrincipal4($(".armandinho"));

		this._modal = new MontaModal($(".introduceModal"));

		this.principal();

	}

	principal() {
		//transfere as informações da requisição para View
		this._getInformation
			.get('api.json')
			.then(res => {
				this._viewPrincipal.update(res);
				this._viewPrincipal1.update(res);
				this._viewPrincipal2.update(res);
				this._viewPrincipal3.update(res);
				this._viewPrincipal4.update(res);
			})
			.catch(error => console.log(error));
	}

	modal(tirinha) {
		//passa o tirinha = src-da-imagem que foi clicada
		this._modal.update(tirinha);
	}
}