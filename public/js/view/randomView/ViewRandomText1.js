class ViewRandomText1 extends View{

	constructor(element) {

		super(element);
	}

	template(model) {

		return `
			<h1>${model}</h1>
		`
	}
}