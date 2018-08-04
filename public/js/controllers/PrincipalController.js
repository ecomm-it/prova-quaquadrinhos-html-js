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

		this._emails = [];
		
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
			
				if (this._campoEmail.value.length > 1) {

					if (this._campoEmail.value.indexOf('@') != -1) {
						

						if (!localStorage.getItem('Email')) {

							this._emails.push(this._campoEmail.value);
							
									
							this.setItemNaLocalStorage(this._emails);
							this._modalEmail.update('E-mail cadastrado, bem vindo !');
							this._campoEmail.value = '';
						}

						if(localStorage.getItem('Email')){

							this._emails.push(this._campoEmail.value);

							this._emails.filter((a, b)=> {

								if (this._emails.indexOf(a) != b) {

									this._emails.splice(b, 1);

									alert('E-mail já existente');

									this.setItemNaLocalStorage(this._emails);
									this._campoEmail.value = '';
								}else {

									this.setItemNaLocalStorage(this._emails);

									this._modalEmail.update('E-mail cadastrado, bem vindo !');
									this._campoEmail.value = '';
								}

							});//end filter


						}
					
					}else{
							alert("Preencha o campo Email!! com '@'");
							this._campoEmail.value = '';
						}
				}else {
					alert('Preencha o campo E-mail');
					return;
				}
					

			});

	}

	setItemNaLocalStorage(emails) {

		localStorage.setItem('Email', JSON.stringify(emails));
	}
}