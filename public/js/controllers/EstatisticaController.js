class EstatisticaController{

	constructor() {

		let $ = document.querySelector.bind(document);

		this._getInformation = new GetInformation();

		///Instancias das views
		this._maisVistaGeralView = new TirinhasAPIView($(".tirinhasMaisVistaGeral"));

		this._menosVistaGeralView = new TirinhasAPIView($(".tirinhaMenosVistaGeral"));

		this._maiorMediaVistaView = new TirinhasAPIView($(".tirinhaMaiorMediaVista"));

		this._estatisticaView1 = new EstatisticasView1($(".introduceEstatistica1"));
		//////////////////////////////---////

		this._montaEstatisticas();

	}

	_montaEstatisticas() {}


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

}