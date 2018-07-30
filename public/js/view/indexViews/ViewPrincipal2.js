class ViewPrincipal2 extends View{

	constructor(element) {

		super(element);
	}

	template(model){
		let tiras = model.tirinhas;

		//local Storage
		let i = 1;
		this._element.addEventListener('click', () =>
			localStorage.setItem('xkcd', i++));

		var views = localStorage.getItem('xkcd');
		views = JSON.parse(views);
		///LOCALSTORAGE

		return `
			<figure class="effect-ruby">

	            <img onclick="controller.modal('${tiras.xkcd[1].img}')"
	             	
	             	src="${tiras.xkcd[1].img}" data-target="#exampleModalCenter" data-toggle="modal" class="img-fluid" alt="img13" />
	            <figcaption>
	                <h5>Xkcd</h5>
	                <p>${tiras.xkcd[1].views + views} Visualizações</p>
	            </figcaption>
	            
	        </figure>
		`

	}
}