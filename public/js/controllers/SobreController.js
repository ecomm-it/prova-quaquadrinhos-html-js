class SobreController{

	constructor() {

		let $ = document.querySelector.bind(document);

		this._campoEmail = $(".email");

		this._btnInscrever = $("#meInscrever");

		this._modalEmail = new ModalEmail($(".introduceModal"));	

		this._emails = [];

		this.email();

	}


	email() {


		this._btnInscrever.addEventListener('click', () => {

				if (this._campoEmail.value.length > 1) {

					console.log(this._campoEmail.value.length);
					if (this._campoEmail.value.indexOf('@') != -1) {
						

						if (!localStorage.getItem('Email')) {

							this._emails.push(this._campoEmail.value);
							
									
							this.setItemNaLocalStorage(this._emails);
							this._modalEmail.update('E-mail cadastrado, bem vindo !');
							this._campoEmail.value = '';
						}
						if (this._campoEmail.value.length > 1) {

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

							this._modalEmail.update('');
						}
						
					
					}else{
						alert("Preencha o campo Email!! com '@'");
						this._campoEmail.value = '';
					}

				}else{
					alert('Preencha o campo E-mail');
					return;
				}
					

			});

	}

	setItemNaLocalStorage(emails) {

		localStorage.setItem('Email', JSON.stringify(emails));
	}

}