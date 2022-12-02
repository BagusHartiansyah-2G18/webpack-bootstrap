
class cebText extends HTMLElement{
    constructor(){
        super();
    }
    set small(v){
        this.innerHTML=`<small class="${this.delUndife(v.cls)}">${this.delUndife(v.text)}</small>`;
    }
    set p(v){
        this.innerHTML= `<p class="${this.delUndife(v.cls)}">${this.delUndife(v.text)}</p>`;
    }
    set span(v){
        this.innerHTML= `<span class="${this.delUndife(v.cls)}">${this.delUndife(v.text)}</span>`;
    }
    set mark(v){
        this.innerHTML= `<mark class="${this.delUndife(v.cls)}">${this.delUndife(v.text)}</mark>`;
    }
    set del(v){
        this.innerHTML= `<del class="${this.delUndife(v.cls)}">${this.delUndife(v.text)}</del>`;
    }
    set strong(v){
        this.innerHTML= `<strong class="${this.delUndife(v.cls)}">${this.delUndife(v.text)}</strong>`;
    }
    set em(v){
        this.innerHTML= `<em class="${this.delUndife(v.cls)}">${this.delUndife(v.text)}</em>`;
    }
    delUndife=lv=>{
        if(lv==undefined || lv==NaN){
            return '';
        }
        return lv;
    }
}
customElements.define("ceb-text",cebText);