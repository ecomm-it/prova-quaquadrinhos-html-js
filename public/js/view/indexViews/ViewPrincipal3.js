class ViewPrincipal3 extends View{

	constructor(element) {

		super(element);
	}

	template(model){
		let tiras = model.tirinhas;

		//local Storage
		let i = 1;
		this._element.addEventListener('click', () =>
			localStorage.setItem('vidadesuporte', i++));

		var views = localStorage.getItem('vidadesuporte');
		views = JSON.parse(views);
		///LOCALSTORAGE

		return `
	        <figure class="effect-ruby">

	            <img onclick="controller.modal('${tiras.vidadesuporte[0].img}')" 
	            src="${tiras.vidadesuporte[0].img}" data-target="#exampleModalCenter" data-toggle="modal" alt="img13" />
	            
	            <figcaption>
	                <h5>Vida de Suporte </h5>
	                <p>${tiras.vidadesuporte[0].views + views} Visualizações</p>
	            </figcaption>
	            
	        </figure>
		`
	}
}