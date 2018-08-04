class ViewDetalheText1 extends View{

	constructor(element) {

		super(element);
	}

	template(model) {

		return `
			<h5>${model}</h5>
		`
	}
}