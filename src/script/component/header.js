class HeaderCovid extends HTMLElement {
	

   connectedCallback(){
       this.render();
   }

	render(){
		this.innerHTML = `
		<style> 

			.header-covid{
			    margin-top: 100px;
			    text-align: center;
    			color: #6d6161;
			  }
		</style>
	      <section class="header-covid" id="header-covid">
	           <div class="row">
	               <div class="col-md-12" >
	                  <h1 style="font-weight: bold;">INFO COVID 19</h1>
	                  <p><h4>Informasi Covid-19 Global Data Source</h4>  <h6>API from <a href="https://covid19api.com" style="text-decoration: none; color: red;">https://covid19api.com</a> </h6></p>
	              </div>
	          </div>
	      </section>
		`;
	}

}
customElements.define("header-covid", HeaderCovid);