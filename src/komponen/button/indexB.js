
class cebButton extends HTMLElement{
  constructor(){
    super();
  }
  set thema1(v){
    let chtml=``;
    v.listBtn.forEach((cv,ci) => {
      chtml+=this.ex1(cv);
    });
    this.innerHTML=`
      <div class="btn-group ${this.delUndife(v.clsGroup)}">
        ${chtml}
      </div>`;
  }
  ex1=(v)=>{
    // {
    //   text:`<span class="mdi mdi-web"></span>`,
    //   cls:" btn-sm btn-primary",
    //   attr:""
    // }
    return `<button type="button" class="btn ${v.cls}" ${this.delUndife(v.cls)}>${this.delUndife(v.text)}</button>`;
  }
  set thema2(v){ //Popover 
    // posisi : top right bottom left
    this.innerHTML=`<button type="button" class="btn ${v.cls}" 
                data-bs-container="body" 
                data-bs-toggle="popover" 
                data-bs-placement="${v.posisi}" 
                data-bs-content="${v.msg}">
                ${v.text}
            </button>`;
  }
  set thema3(v){ //Popover 
    // posisi : top right bottom left
    this.innerHTML=this.ex1(v);
  }
  delUndife=lv=>{
    if(lv==undefined || lv==NaN){
        return '';
    }
    return lv;
  }
}
customElements.define("ceb-button",cebButton);