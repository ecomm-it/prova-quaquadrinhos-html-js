class ViewPrincipal extends View{

	constructor(element) {

		super(element);
	}

	template(model){
		let tiras = model.tirinhas;

		//local Storage
		let i = 1;
		this._element.addEventListener('click', () =>
			localStorage.setItem('umsabadoqualquer', i++));

		var views = localStorage.getItem('umsabadoqualquer');
		views = JSON.parse(views);

		return `
			<figure class="effect-ruby" >
			
	         <img onclick="controller.modal('${tiras.umsabadoqualquer[3].img}')" src="${tiras.umsabadoqualquer[3].img}" data-target="#exampleModalCenter" data-toggle="modal" class="img-fluid" alt="img13">
	            
	         <figcaption>
	            <h5>Um sabado qualquer </h5>
	            <p>${tiras.umsabadoqualquer[3].views + views} Visualizações</p>
	         </figcaption>

	      </figure>
		`

	}
}