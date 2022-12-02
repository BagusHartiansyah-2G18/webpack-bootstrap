
class cebCard extends HTMLElement{
  constructor(){
    super()
  }
  set thema1(v){ 
    // card_.ex1({
    //   clsCard: "col-4",
    //   file:`<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><Header>Placeholder</Header><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>`,
    //   clsHeader:" p-2 bg-light shadow h3",
    //   htmlHeader:"Informasi Penerimaan",
    //   clsBody:"",
    //   htmlBody:"Some quick example text to build on the card Header and make up the bulk of the card's content.",
    // })
    // tukar untuk ganti posisi 
    let chtml=v.file;
    if(v.tukar==undefined){
      chtml+=`
        <div class="card-header ${v.clsHeader}">
          ${v.htmlHeader}
        </div>
      `;
    }else{
      chtml=`
        <div class="card-header ${v.clsHeader}" >
          ${v.htmlHeader}
        </div>
      `+chtml;
    }
    this.innerHTML=`
    <div class="card ${v.clsCard}">
      ${chtml}
      <div class="card-body ${v.clsBody}">
        ${v.htmlBody}
      </div>
    </div>`;
  }
  set thema2(v){
    // card_.ex2({
    //   clsCard: "",
    //   file:`<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><Header>Placeholder</Header><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>`,
    //   clsHeader:"",
    //   htmlHeader:"Informasi Penerimaan",
    //   clsBody:"",
    //   tukar:"Bagus H",
    //   htmlBody:"Some quick example text to build on the card Header and make up the bulk of the card's content.",
    // })
    this.innerHTML=`
      <div class="card ${v.clsCard}">
        <div class="card-header ${v.clsHeader}">
          ${v.htmlHeader}
        </div>
        <div class="card-body ${v.clsBody}">
          ${v.htmlBody}
        </div>
      </div>
    `;
  }
  set thema3(v){
    this.innerHTML=`
      <div class="card ${v.cls}">
        ${v.html}
      </div>
    `;
  }
  set body(v){
    this.innerHTML=`
      <div class="card-header ${v.clsHeader}">
        ${v.htmlHeader}
      </div>
      <div class="card-body ${v.clsBody}">
        ${v.htmlBody}
      </div>
    `
  }
}
customElements.define("ceb-card",cebCard);