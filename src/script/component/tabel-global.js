class TabelGlobal extends HTMLElement{

	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML = `
			<section class="hasil-covid-seluruh-negara">  
		      <div class="row">
		        
		        <div class="col-md-12">
		          <div class="card">
		            <div class="card-header data-covid-global"><h5><b>Data Kasus COVID-19 Diseluruh Dunia</b> <span id="waktu-all-negara"></span></h5></div>
		              <div class="card-body card-table table-responsive">
		                <table class="table table-striped table-scroll ">
		                 <thead class="table-dark">
		                   <tr >
		                    <td width="70px;">No.</td>
		                    <td>Nama Negara</td>
		                    <td>Positif Covid-19</td>
		                    <td>Meninggal</td>
		                    <td>Sembuh</td>
		                    <td>Kasus Covid-19 Baru</td>
		                    <td>Kasus Meninggal Baru</td>
		                    <td>Kasus Sembuh Baru</td>
		                  </tr>
		                  </thead>
		                    <tbody id="covid-seluruh-negara">                
		                    </tbody>
		                </table>
		              </div>
		            </div>
		          </div>
		      </div>
		      </section>
		`;

	}
}
customElements.define("tabel-global", TabelGlobal);