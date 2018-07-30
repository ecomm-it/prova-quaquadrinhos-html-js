class ViewDetalheImgs extends View{

	constructor(element) {

		super(element);
	}

	template(model, num1) {

		return `
			<img src="${model[num1].img}" class="img-fluid">
            <hr>
		`
	}
}