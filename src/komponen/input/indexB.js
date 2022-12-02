
class cebInput extends HTMLElement{
  constructor(){
    super();
  }
  set thema1(v){
    // input_.ex1({
    //   id:"text",
    //   tipe:"text",
    //   cls:"form-control",
    //   attr:`placeholder="ex1"`
    // })
    this.innerHTML=this.ex1(v);
  }
  ex1(v){
    // input_.ex1({
    //   id:"text",
    //   tipe:"text",
    //   cls:"form-control",
    //   attr:`placeholder="ex1"`
    // })
    return`<input type="${v.tipe}" class="${v.cls}" id="${v.id}" ${v.attr}>`;
  }
  set thema2(v){
    // input_.ex2({
    //   clsDiv:"mb-3",
    //   text:"Username",
    //   id:"text",
    //   tipe:"text",
    //   cls:"form-control",
    //   attr:`placeholder="ex2"`
    // })
    this.innerHTML=this.formLabel({
      clsDiv:v.clsDiv,
      text:v.text,
      html:this.ex1(v)
    });
  }
  set thema3(v){
    // input_.ex3({
    //   clsDiv:"mb-3",
    //   text:"Username",
    //   id:"text",
    //   tipe:"text",
    //   cls:"form-control",
    //   attr:`placeholder="ex3"`,
    //   ket:"We'll never share your email with anyone else."
    // })
    this.innerHTML=this.formLabel({
      clsDiv:v.clsDiv,
      text:v.text,
      html:this.ex1(v)
          +`<div id="ket-${v.id}" class="form-text">${v.ket}</div>`
    });
  }
  set thema4(v){
    this.innerHTML= this.inputGroup({
      clsDiv:v.clsDiv,
      clsInput:v.clsInput,
      tukar:v.tukar,
      text:v.text,
      html:this.ex1(v)
    });
  }
  set thema5(v){
    this.innerHTML= this.inputGroupSE({
      clsDiv:v.clsDiv,
      clsInput:v.clsInput,
      textS:v.textS,
      textE:v.textE,
      html:this.ex1(v)
    });
  }
  set thema6(v){
    this.innerHTML= this.floatingLabel({
      clsDiv:v.clsDiv,
      text:v.text,
      html:this.ex1(v)
    });
  }
  set thema7(v){
    // jika ingin menggunakannya tambahkan class ini pada text inputnya 
    // true  : is-valid
    // false : is-invalid
    let respValidasi='';
    if(v.respValidasi!=undefined && Object.keys(v.respValidasi).length==2){
      respValidasi=this.respValidasiT(v.respValidasi.sukses)+this.respValidasiF(v.respValidasi.error);
    }
    this.innerHTML= this.formLabel({
      clsDiv:v.clsDiv,
      text:v.text,
      html:this.ex1(v)
          +respValidasi
    });
  }

  set check1(v){
    // input_.check1({
    //   cls:"form-check-input",
    //   id:"check",
      // attr:""
    // })
    this.innerHTML=this.excheck(v);
  }
  excheck(v){
    return `<input type="checkbox" class="${v.cls}" id="${v.id}" ${v.attr}>`;
  }
  set check2(v){
    return this.formLabel({
      clsDiv:v.clsDiv,
      text:v.text,
      html:this.excheck(v)
    });
  }

  set radio1(v){
    // input_.radio1({
    //   cls:"form-check-input",
    //   id:"radio",
    //   name:"radios",
    //   attr:""
    // })
    this.innerHTML=this.exradio(v);
  }
  exradio(v){
    return `<input type="radio" name="${v.name}" class="${v.cls}" id="${v.id}" ${v.attr}>`;
  }
  set radio2(v){
    return this.formLabel({
      clsDiv:v.clsDiv,
      text:v.text,
      html:this.exradio(v)
    });
  }
  
  set select(v){
    // getLits:true  untuk get isinya saja
    let chtml=``;
    v.list.forEach((cv,ci) => {
      chtml+=`
        <option ${this.delUndife(cv.selected)} value="${cv.value}">${cv.valueName}</option>
      `;
    });
    if(v.getLits!=undefined){
      return chtml;
    }
    this.innerHTML=`<select class="${v.cls}" id="${v.id}" ${v.attr}>
      ${chtml}
    </select>`;
  }

  formLabel(v){
    // return this.formLabel({
    //   clsDiv:"mb-3 form-check",
    //   text:"username",
    //   html:this.radio1(v)
    // });
    return `
      <div class="${v.clsDiv}">
        <label class="form-label">${v.text}</label>
        ${v.html}
      </div>`;
  }
  inputGroup(v){
    // this.inputGroup({
    //   clsDiv:v.clsDiv,
    //   clsInput:v.clsInput,
    //   tukar:v.tukar,
    //   text:v.text,
    //   html:this.ex1(v)
    // });
    let chtml=`<span class="input-group-text ${v.clsInput}">${v.text}</span>`;
    if(v.tukar!=undefined){
      chtml=v.html+chtml;
    }else{
      chtml+=v.html;
    }
    return`
      <div class="${v.clsDiv}">
        ${chtml}
      </div>`;
  }
  inputGroupSE(v){ // Start End SE
    return`
      <div class="${v.clsDiv}">
        <span class="input-group-text ${v.clsInput}">${v.textS}</span>
        ${v.html}
        <span class="input-group-text ${v.clsInput}">${v.textE}</span>
      </div>`;
  }
  floatingLabel(v){
    return`
      <div class="form-floating ${v.clsDiv}">
        ${v.html}
        <label>${v.text}</label>
      </div>`;
  }

  respValidasiT(text){
    return `<div class="valid-feedback">
            ${text}
          </div>`
  }
  respValidasiF(text){
    return `<div class="invalid-feedback">
            ${text}
          </div>`
  }
  delUndife=lv=>{
        if(lv==undefined || lv==NaN){
            return '';
        }
        return lv;
  }
}
customElements.define("ceb-input",cebInput);