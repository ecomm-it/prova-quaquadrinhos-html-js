class ViewRandomText extends View{

	constructor(element) {

		super(element);
	}

	template(model, num1) {

		return `
			<h1>${model[num1].tags.toUpperCase()}</h1>
		`
	}
}