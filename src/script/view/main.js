import DataSearchCovid from "../data/data-search-covid.js";
import DataTotalGlobal from "../data/data-total-global.js";
import DataTabelSeluruhDunia from "../data/data-tabel-seluruh-dunia.js";

/*bagian nilai awal*/
const NilaiAwalIndonsia = () => {
	const nilaiawal = new DataSearchCovid(renderSearchCovid,fallbackSearchResult);
	nilaiawal.searchCovid("indonesia");

}

/*penutup nilai awal*/


/*pencarian kasus negara*/

$('.selectpicker').change(function (e) {
    const negaraa = $(e.target).val(); 
	const cariCovid = new DataSearchCovid(renderSearchCovid,fallbackSearchResult);
	cariCovid.searchCovid(negaraa);
});


const renderSearchCovid = result =>{
	const nilaiAkhir = result.length -1;
	let objekBaru = '{"nama" : '+JSON.stringify(result[nilaiAkhir])+'}';
	const dataTerakhir = JSON.parse(objekBaru);

	const dates = new Date(dataTerakhir.nama.Date);


	document.getElementById("header-menurut-negara").innerHTML = `
	<h5><b>DATA KASUS COVID-19 NEGARA <span class="text-negara">${dataTerakhir.nama.Country.toUpperCase()}<span></b></h5>
	`;

	document.getElementById("date-country").innerHTML = `<h6>Update Terakhir ${dates.toLocaleString("id-ID")}</h6>`;
	document.getElementById("date-global").innerHTML = `<h6>Update Terakhir ${dates.toLocaleString("id-ID")}</h6>`;
		

	//nilai poitif
	
		document.getElementById("positif_dinegara").innerText = `${ConvertTotalKasus(dataTerakhir.nama.Confirmed)}`;

	//nilai meninggal
		
		document.getElementById("meninggal_dinegara").innerText = `${ConvertTotalKasus(dataTerakhir.nama.Deaths)}`;
	//nilai sembuh
		
		document.getElementById("sembuh_dinegara").innerText = `${ConvertTotalKasus(dataTerakhir.nama.Recovered)}`;

}
const fallbackSearchResult = result =>{
	document.getElementById("header-menurut-negara").innerHTML = result;

}
/*penutup pencarian kasus negara*/


/*kasus global*/
const TotalKasusGlobal = () =>{
	const totalGlobal = new DataTotalGlobal();
	totalGlobal.TotalCovidGlobal()
	.then(renderTotalKasusGlobal)
	.catch(fallbackTotalKasusGlobal)
}
const renderTotalKasusGlobal = result => {

			const kasus_positif =  ConvertTotalKasus(result.TotalConfirmed);
			const kasus_meninggal =  ConvertTotalKasus(result.TotalDeaths);
			const kasus_sembuh =  ConvertTotalKasus(result.TotalRecovered);
		
			document.getElementById("covid-positif-global").innerHTML = `
				${kasus_positif}
			`; 
			document.getElementById("sembuh-global").innerHTML = `
				${kasus_sembuh}
			`; 
			document.getElementById("meninggal-global").innerHTML = `
				${kasus_meninggal}
			`; 		
}
const fallbackTotalKasusGlobal = result => {
		document.getElementById("globe").innerHTML = result; 
}
/*penutup kasus global*/

/*bagian tabel seluruh dunia*/
const KasusDiseluruhNegara = () =>{
	const tabelSeluruhDunia = new DataTabelSeluruhDunia();
	tabelSeluruhDunia.dataSeluruhDunia()
	.then(renderCovidTabel)
	.catch(fallbackCovidTabel);
}

const renderCovidTabel = result =>{
			let no = 1;
			$(document).ready(function () {
						var options = [];
						result.Countries.forEach(oo=>{

						var option = `<option value="${oo.Country}">${oo.Country} </option>`
						options.push(option);
						$('.selectpicker').html(options);
						$('.selectpicker').selectpicker('refresh');
						})
			});
			result.Countries.forEach(countries =>{
				const sss = document.getElementById("covid-seluruh-negara");
				 const tr = document.createElement("tr");
		            tr.innerHTML = `
		            <td width="70px;"> ${no++}</td>
		            <td>${countries.Country}</td>
		            <td>${ConvertTotalKasus(countries.TotalConfirmed)}</td> 
		            <td>${ConvertTotalKasus(countries.TotalDeaths)}</td> 
		            <td>${ConvertTotalKasus(countries.TotalRecovered)}</td> 
		            <td>${ConvertTotalKasus(countries.NewConfirmed)}</td>
					<td>${ConvertTotalKasus(countries.NewDeaths)}</td>
					<td>${ConvertTotalKasus(countries.NewRecovered)}</td>
		            `;
		            sss.appendChild(tr);          
			});
			document.getElementById("waktu-all-negara").innerText =`Update Terakhir ${new Date(result.Date).toLocaleString("id-ID")}` ;
}

const fallbackCovidTabel = message =>{
	document.getElementById("covid-seluruh-negara").innerHTML = message;
}
/*penutup  bagian tabel seluruh dunia*/

/*convert nilai covid*/
const ConvertTotalKasus = nilai =>{
	var	reverse = nilai.toString().split('').reverse().join(''),
	ribuan 	= reverse.match(/\d{1,3}/g);
	ribuan	= ribuan.join('.').split('').reverse().join('');
	return ribuan;
}
/*penutup convert covid*/

export  {NilaiAwalIndonsia, KasusDiseluruhNegara, TotalKasusGlobal};