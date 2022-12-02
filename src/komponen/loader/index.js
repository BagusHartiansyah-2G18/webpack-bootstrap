import './main';
class ceLoader extends HTMLElement{
    constructor (){
        super();
        this.loader=new Loader_();
    }
    set thema1(v){
        this.innerHTML=this.loader.ex1();
    }
}
customElements.define("ce-loader",ceLoader);