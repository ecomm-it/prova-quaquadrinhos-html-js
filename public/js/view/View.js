class View{

	constructor(element){

		this._element = element
	}

	template(model) {

		throw new Error("Necessário a implementação do método template")
	}

	update(...model) {

		this._element.innerHTML = this.template(...model);
	}
}