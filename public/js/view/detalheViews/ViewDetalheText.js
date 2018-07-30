class ViewDetalheText extends View{

	constructor(element) {

		super(element);
	}

	template(model) {

		return `
			<h1>${model}</h1>
		`
	}
}