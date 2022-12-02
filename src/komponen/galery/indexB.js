
class cebGalery extends HTMLElement{
    constructor(){
        super();
    }
    set thema1(v){
        this.innerHTML=`
        <div class="${v.clsCard}">
            ${v.htmlFile}
            <div class="${v.clsCardBody}">
                ${v.htmlBody}
            </div>
          </div>
        `;
    }
}
customElements.define("ceb-galery",cebGalery);