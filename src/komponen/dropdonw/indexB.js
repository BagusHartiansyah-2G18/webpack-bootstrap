class ceDropdonw extends HTMLElement{
    constructor(){
        super();
    }
    set thema1(v){
        // cebDropdonw.thema1={
        //     clsDropdonw:"",
        //     clsUl:" text-small",
        //     clsLi:"",
        //     htmlJudul:`
        //         <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        //             <img src="${url+"1.png"}" alt="mdo" width="32" height="32" class="rounded-circle">
        //         </a>`,
        //     menu:[
        //         {htmlLi:`<a class="dropdown-item judulFunc" href="#">dropdon ex1</a>`},
        //         {htmlLi:`<a class="dropdown-item" href="#">Settings</a>`}
        //     ]
        // };
        let hhtml=`
            <div class="dropdown ${v.clsDropdonw}">
                ${v.htmlJudul}
                <ul class="dropdown-menu text-small">
            `;
        v.menu.forEach((cv,ci) => {
            hhtml+=`
                <li>${cv.htmlLi}</li>
            `;
        });
        this.innerHTML=(hhtml+`</ul></div>`);
    }
    set thema2(v){
        let dhtml="";
        v.menu.forEach((cv,ci) => {
            dhtml+=`
                <li>${cv.htmlLi}</li>
            `;
        });
        this.innerHTML=`
        <div class="btn-group ${v.clsGroup}">
          <button type="button" class="btn ${v.cls}" ${v.attr}>${v.text}</button>
          <button type="button" class="btn ${v.cls} dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            ${dhtml}
          </ul>
        </div>
        `;
    }
    set thema3(v){
        let dhtml="";
        v.menu.forEach((cv,ci) => {
            dhtml+=`
                <li>${cv.htmlLi}</li>
            `;
        });
        this.innerHTML=`
        <div class="btn-group ${v.clsGroup}">
          <button type="button" class="btn dropdown-toggle ${v.cls}" ${v.attr} data-bs-toggle="dropdown" aria-expanded="false">${v.text}</button>
          <ul class="dropdown-menu">
            ${dhtml}
          </ul>
        </div>`;
    }
}
customElements.define("ceb-dropdonw",ceDropdonw);