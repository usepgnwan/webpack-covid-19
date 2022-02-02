class SearchCovid extends HTMLElement{
	connectedCallback(){
		this.render();
	}

	render(){
		this.innerHTML = `
		    <section class="pencarian-covid-negara" id="pencarian-covid-negara">
		      <h5 class="text-center"><b>Cari Menurut Negara</b></h5>
		      <div class="row justify-content-center align-items-center" style="text-align: center">
		        <div class="col-md-4 search-item" >
		          <select class="selectpicker form-control select-warna" id="selectpicker" data-live-search="true" >
		           </select>
		        </div>
		      </div>
		    </section>
		`;
	}
}

customElements.define("search-covid",SearchCovid);