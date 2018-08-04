class TirinhasAPIView extends View{

	constructor(element) {

		super(element);
	}

	template(model, num, letras) {
		let l;
		letras ? l = letras: l = ''; 
		return `
            Id: ${model[num].id} ${l}
            <br>
            Thumb: 
            <br /><br />
            <a href="#ex1" rel="modal:open">
                <img src="${model[num].img}" style="width:100%;height:auto;" />
            </a>
            <div id="ex1" class="modal">
                <img src="${model[num].img}" style="width:100%;height:auto;" />
            </div>
		`
	}
}