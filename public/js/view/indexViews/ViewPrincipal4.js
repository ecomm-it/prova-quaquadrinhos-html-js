class ViewPrincipal4 extends View{

	constructor(element) {

		super(element);
	}

	template(model){
		let tiras = model.tirinhas;
		
		//localStorage
		let i = 1;
		this._element.addEventListener('click', () => 
			localStorage.setItem('armandinho', i++));

			var views = localStorage.getItem('armandinho');
			views = JSON.parse(views);
		//localStorage////////

		return `
			<figure class="effect-ruby">

	            <img onclick="controller.modal('${tiras.armandinho[3].img}')" 
	            	src="${tiras.armandinho[3].img}" data-target="#exampleModalCenter" data-toggle="modal">
	            
	            <figcaption>
	                <h5>Armandinho</h5>
	                <p>${tiras.armandinho[3].views + views} Visualizações</p>
	            </figcaption>

	        </figure>	
		`
	}
}