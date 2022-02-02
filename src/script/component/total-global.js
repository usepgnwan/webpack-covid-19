class TotalGlobal extends HTMLElement{
	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML = `
	      <section class="total-covid-global" id="total-covid-global">
	        <div class="text-center">
	            <p id="globe"></p>
	        </div>
	        <div class="row ">  
	          <div class="col-md-12" align="center">
	              <h5 style="font-weight: bold;">TOTAL KASUS COVID-19 GLOBAL </h5>
	              <p id="date-global"></p>
	          </div>
	        </div>  
	        <div class="row">
	          <div class="col-md-4">
	            <div class="card card-kasus">
	              <div class="card-header card-header-kasus"><h5>KASUS COVID-19</h5></div>
	              <div class="card-body">
	                  <h2 class="card-title text-positif-covid" id="covid-positif-global"></h2>
	              </div>
	            </div>
	          </div>
	          <div class="col-md-4">
	            <div class="card card-kasus">
	              <div class="card-header card-header-kasus "><h5>MENINGGAL</h5></div>
	              <div class="card-body">
	                  <h2 class="card-title text-meninggal" id="meninggal-global"></h2>
	              </div>
	            </div>
	          </div>
	          <div class="col-md-4 ">
	            <div class="card card-kasus">
	              <div class="card-header card-header-kasus "><h5>Sembuh</h5></div>
	              <div class="card-body">
	                  <h2 class="card-title text-sembuh" id="sembuh-global"></h2>
	              </div>
	            </div>
	          </div>
	        </div>
	      </section>
		`;
	}
}
customElements.define("total-global", TotalGlobal);