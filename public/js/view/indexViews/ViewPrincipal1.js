class ViewPrincipal1 extends View{

	constructor(element) {

		super(element);
	}

	template(model){
		let tiras = model.tirinhas;

		//local Storage
		let i = 1;
		this._element.addEventListener('click', () =>
			localStorage.setItem('vidaprogramador', i++));

		var views = localStorage.getItem('vidaprogramador');
		views = JSON.parse(views);
		//LOCALSTORAGE

		return `
			<figure class="effect-ruby">

	            <img onclick="controller.modal('${tiras.vidaprogramador[0].img}')" 
	            	src="${tiras.vidaprogramador[0].img}" data-target="#exampleModalCenter" data-toggle="modal" class="img-fluid" alt="img13">
	            
	            <figcaption>
	                <h5>Vida de Programador </h5>
	                <p>${tiras.vidaprogramador[0].views + views} Visualizações</p>
	            </figcaption>

	        </figure>
		`

	}
}