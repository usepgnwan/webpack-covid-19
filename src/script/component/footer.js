class footerCovid extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `<style>
        footer{
            min-height: 80px;
            padding: 30px;
            text-align: center;
            font-size: 15px;
            font-weight: bold;
          }
        </style>
        <footer>&#169;Copy Right 2020 by Usepgnwan</footer>
        `;
    }
}
customElements.define("footer-covid", footerCovid);