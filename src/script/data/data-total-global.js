class DataTotalGlobal{
	
	// constructor(renderTotalKasusGlobal,fallbackTotalKasusGlobal){
	// 	this.renderTotalKasusGlobal = renderTotalKasusGlobal;
	// 	this.fallbackTotalKasusGlobal = fallbackTotalKasusGlobal;
	// }
	TotalCovidGlobal(){
		return fetch("https://api.covid19api.com/world/total")
		.then (response =>{
			return response.json();
		})
		.then(responseJson => {
			const globs = responseJson;
			if (globs) {
				return Promise.resolve(globs)
			}else{
				return Promise.reject(error)
			}
		})
		// .catch(error =>{
		// 	this.fallbackTotalKasusGlobal(error);
		// })
	}
}
export default DataTotalGlobal;