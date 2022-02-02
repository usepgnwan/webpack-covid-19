global.jQuery = require('jquery');
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-select/dist/css/bootstrap-select.css";
import "./style.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-select/dist/js/bootstrap-select.js";
import "./script/component/header.js";
import "./script/component/search-covid.js";
import "./script/component/hasil-search.js";
import "./script/component/total-global.js";
import "./script/component/tabel-global.js";
import "./script/component/footer.js";
import {NilaiAwalIndonsia, KasusDiseluruhNegara, TotalKasusGlobal} from "./script/view/main.js";



NilaiAwalIndonsia();
KasusDiseluruhNegara();
TotalKasusGlobal();

