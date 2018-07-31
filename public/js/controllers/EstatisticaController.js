class EstatisticaController{

	constructor() {

		let $ = document.querySelector.bind(document);

		this._getInformation = new GetInformation();

		///Instancias das views
		this._maisVistaGeralView = new TirinhaMaisVistaGeralView($(".tirinhasMaisVistaGeral"));

		this._menosVistaGeralView = new TirinhaMaisVistaGeralView($(".tirinhaMenosVistaGeral"));

		this._maiorMediaVistaView = new TirinhaMaisVistaGeralView($(".tirinhaMaiorMediaVista"));

		this._estatisticaView1 = new EstatisticasView1($(".introduceEstatistica1"));
		//////////////////////////////---////

		this._montaEstatisticas();

	}

	_montaEstatisticas() {
		let tirinhas = [

			localStorage.getItem('umsabadoqualquer'),
			localStorage.getItem('vidaprogramador'),
			localStorage.getItem('xkcd'),
			localStorage.getItem('vidadesuporte'),
			localStorage.getItem('armandinho')
		];
		
		var max = tirinhas.reduce((a, b) => Math.max(a, b));

		console.log(max);

		this._getInformation
			.filtra('api.json')
			.then(res => {
				this._maisVistaGeralView.update(res.vidaprogramador, 0);
				this._menosVistaGeralView.update(res.xkcd, 2);
				this._maiorMediaVistaView.update(res.vidaprogramador, 0, ', a média de 16,66% de visualizações');
				this._estatisticaView1.update();
			})
			.catch(e => console.log(e));

	}

	_filtramaior(res) {

		res.xkcd
		res.umsabadoqualquer
		res.armandinho
		res.vidadesuporte
		res.vidaprogramador
	}
}