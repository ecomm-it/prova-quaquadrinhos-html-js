class PrincipalController{
	
	constructor() {

		let $ = document.querySelector.bind(document);

		this._campoEmail = $(".email");

		this._btnInscrever = $("#meInscrever");

		this._getInformation = new GetInformation();

		this._viewPrincipal = new ViewPrincipal($(".umsabadoqualquer"));

		this._viewPrincipal1 = new ViewPrincipal1($(".vidaprogramador"))

		this._viewPrincipal2 = new ViewPrincipal2($(".xkcd"));

		this._viewPrincipal3 = new ViewPrincipal3($(".vidadesuporte"));

		this._viewPrincipal4 = new ViewPrincipal4($(".armandinho"));

		this._modal = new MontaModal($(".introduceModal"));

		this._modalEmail = new ModalEmail($(".introduceModal"));

		this.principal();

		this.email();
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

	email() {

		this._btnInscrever.addEventListener('click', (event) => {

			event.preventDefault();

			if (this._campoEmail.value.length > 0) {

				if (this._campoEmail.value.indexOf('@') != -1) {

					if (this._campoEmail.value === localStorage.getItem('Email')) 
						alert('Este e-mail já é existente');
					else{
						localStorage.setItem('Email', this._campoEmail.value);
						this._modalEmail.update('E-mail cadastrado, bem vindo !');
						this._campoEmail.value = '';
					}
				}else{
					alert('Preencha o cmapo de E-mail!!!!');
				}
				
			}else{
				alert('Preencha o cmapo de E-mail');
			}
		});
	}
}