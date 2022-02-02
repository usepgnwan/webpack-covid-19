class HasilSearch extends HTMLElement{
	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML = `

			<section class="total-covid-negara" id="total-covid-negara">
		      <div class="text-center">
		          <p id="header-menurut-negara"></p>
		          <p id="date-country"></p>
		      </div>
		      <div class="row">
		         
		          <div class="col-md-4">
		            <div class="card card-kasus">
		              <div class="card-header card-header-kasus"><h5>KASUS COVID-19</h5></div>
		              <div class="card-body">
		                  <h2 class="card-title text-positif-covid" id="positif_dinegara"></h2>
		                  <p class="card-text" id="kasus_positif_baru_dinegara"></p>
		              </div>
		            </div>
		          </div>
		          <div class="col-md-4">
		            <div class="card card-kasus">
		              <div class="card-header card-header-kasus"><h5>MENINGGAL</h5></div>
		              <div class="card-body">
		                  <h2 class="card-title text-meninggal"  id="meninggal_dinegara"></h2>
		                  <p class="card-text" id="kasus_meninggal_baru_dinegara" ></p>
		              </div>
		            </div>
		          </div>
		          <div class="col-md-4">
		            <div class="card card-kasus">
		              <div class="card-header card-header-kasus"><h5>SEMBUH</h5></div>
		              <div class="card-body">
		                  <h2 class="card-title text-sembuh"  id="sembuh_dinegara"></h2>
		                  <p class="card-text"  id="kasus_sembuh_baru_dinegara"></p>
		              </div>
		            </div>
		          </div>
		        </div>
		      </section>
		`;
	}
}
customElements.define("hasil-search", HasilSearch);