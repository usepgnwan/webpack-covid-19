class DataTabelSeluruhDunia{

		// constructor(renderCovidTabel, fallbackCovidTabel){
		// 	this.renderCovidTabel = renderCovidTabel;
		// 	this.fallbackCovidTabel = fallbackCovidTabel;
		// }
		
	dataSeluruhDunia(){

		return fetch("https://api.covid19api.com/summary")
		.then(response =>{
			return response.json();
		})
		.then(responseJson => {
			const nilai = responseJson;
			if (nilai) {
				return Promise.resolve(nilai)
			}else{
				return Promise.reject(error)
			}
		})
	}
}

export default DataTabelSeluruhDunia;