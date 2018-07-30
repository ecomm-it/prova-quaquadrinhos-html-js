class ViewRandomText extends View{

	constructor(element) {

		super(element);
	}

	template(model, num1) {

		return `
			<h6>${model[num1].tags.toUpperCase()}</h6>
		`
	}
}