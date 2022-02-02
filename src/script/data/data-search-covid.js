class DataSearchCovid{
	constructor(renderSearchCovid,fallbackSearchResult){
	this.renderSearchCovid	= renderSearchCovid;
	this.fallbackSearchResult = fallbackSearchResult;
	// 	this.gagal = gagal;
	}
	searchCovid(negara){
		return fetch(`https://api.covid19api.com/total/country/${negara}`)
		.then(response =>{

			return response.json();
		})
		.then(responseJson =>{

			const tampungNilai = responseJson;
			this.renderSearchCovid(tampungNilai);
		})
		.catch(error =>{
			this.fallbackSearchResult(error);
		});
	}


}
export default DataSearchCovid;