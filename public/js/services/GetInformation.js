class GetInformation{

	_handleErrors(res) {

		if(!res.ok) throw new Error(res.statusText);
		return res;
	}

	get(url) {

		return fetch(url)
			.then(res => this._handleErrors(res))
			.then(res => res.json());
	}

	filtra(url) {
		
		return new Promise((resolve, reject) => {
		 this.get(url)
			.then(res => resolve(res.tirinhas))
			.catch(e => reject(console.log(e)));
			
		})
	}

	
}
	