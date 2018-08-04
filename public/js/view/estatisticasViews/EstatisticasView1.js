class EstatisticasView1 extends View{

	constructor(element) {

		super(element);
	}

	template(model) {
		

		return `

		 <div class="col-md-3 responsive-wrap">
	                Tirinha Mais Vista Geral
	            </div>
	            <div class="col-md-3 responsive-wrap">
	                Tirinha Menos Vista Geral
	            </div>
	            <div class="col-md-3 responsive-wrap">
	                Tirinha com maior média vista
	            </div>
	            <div class="col-md-3 responsive-wrap">
	                Tirinha mais vista por quadrinho
	            </div>
	        </div>
	        <div class="row">
	            <div class="col-md-3 responsive-wrap">
	                Id: 7 
	                <br />
	                Thumb: 
	                <br /><br />
	                <a href="#ex1" rel="modal:open">
	                    <img src="https://vidadeprogramador.com.br/uploads/2018/06/tirinha1865.png" style="width:100%;height:auto;" />
	                </a>
	                <div id="ex1" class="modal">
	                    <img src="https://vidadeprogramador.com.br/uploads/2018/06/tirinha1865.png" style="width:100%;height:150%;" />
	                </div>
	            </div>
	            <div class="col-md-3 responsive-wrap">
	                Id: 3
	                <br />
	                Thumb: 
	                <br /><br />
	                <a href="#ex2" rel="modal:open">
	                    <img src="https://imgs.xkcd.com/comics/two_mirrors.png" style="width:100%;height:auto;" />
	                </a>
	                <div id="ex2" class="modal">
	                    <img src="https://imgs.xkcd.com/comics/two_mirrors.png" style="width:100%;height:150%;" />
	                </div>
	            </div>
	            <div class="col-md-3 responsive-wrap">
	                    <br />
	                Id: 7, com média de 16,66% de visualizações.
	                <br />
	                Thumb: 
	                <br /><br />
	                <a href="#ex2" rel="modal:open">
	                    <img src="https://vidadeprogramador.com.br/uploads/2018/06/tirinha1865.png" style="width:100%;height:auto;" />
	                </a>
	                <div id="ex2" class="modal">
	                    <img src="https://vidadeprogramador.com.br/uploads/2018/06/tirinha1865.png" style="width:100%;height:150%;" />
	                </div>
	            </div>
	            <div class="col-md-3 responsive-wrap">
	                <div id="ex3" class="modal" style="text-align: center !important">
	                    <img src="https://imgs.xkcd.com/comics/negative_results.png" style="width:50%;height:50%;" />
	                </div>
	                <div id="ex4" class="modal" style="text-align: center !important">
	                    <img src="https://www.umsabadoqualquer.com/wp-content/uploads/2018/06/169.jpg" style="width:50%;height:50%;" />
	                </div>
	                Xkcd <br/>

	                Id: 2 <a href="#ex3" rel="modal:open">Visualizar</a><br/><br/>
	                Um sabado Qualquer<br/>
	                Id: 6 <a href="#ex4" rel="modal:open">Visualizar</a><br/><br/>
	                Vida de Programador<br/>
	                Id: 7 <a href="#">Visualizar</a><br/><br/>
	                Vida de Suporte<br/>
	                Id: 10 <a href="#">Visualizar</a><br/><br/>
	                Armandinho<br/>
	                Id: 21 <a href="#">Visualizar</a><br/><br/>
            </div>
		`
	}
}