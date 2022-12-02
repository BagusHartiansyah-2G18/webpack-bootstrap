class cebHeader extends HTMLElement{
    constructor(){
        super();
    }
    // connectedCallback() {
    //     console.log('connected nav!');
    // }
    set thema1(cv){
        const cebNavbar=document.createElement("ceb-navbar");
        cebNavbar.thema1=cv.navbar;

        this.innerHTML=`
            <nav class="${cv.clsExpand}" aria-label="First navbar example">
                <div class="${cv.clsContainer}">
                    ${cv.htmlJudul}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>                    
                    <div class="collapse navbar-collapse" id="navbarsExample01">
                        ${cebNavbar.innerHTML}
                        ${this.delUndife(cv.nextNav)}
                    </div>
                </div>
            </nav>
        `;
    }
    set thema2(cv){
        const cebNavbar=document.createElement("ceb-navbar");
        cebNavbar.thema1=cv.navbar;

        this.innerHTML=`
            <nav class="${cv.clsExpand}" aria-label="First navbar example">
                <div class="${cv.clsContainer}">
                    ${cv.htmlJudul}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>                    
                    ${cebNavbar.innerHTML}
                    ${this.delUndife(cv.nextNav)}
                </div>
            </nav>
        `;
    }
    set thema3(v){
        let chtml=`
            <div class="${v.clsHeader}">
                ${v.htmlJudul}
                ${v.htmlMenu}
            </div>
        `;
        if(v.tukar==undefined){
            chtml+=`
                <div class="${v.clsKeterangan}">
                    ${v.htmlKeterangan}
                </div>
            `;
        }else{
            chtml=`
                <div class="${v.clsKeterangan}">
                    ${v.htmlKeterangan}
                </div>
            `+chtml;
        }

        this.innerHTML=`
            <div class="${v.clsContainer}">
                ${chtml}
            </div>
        `;
    }
    set thema4(v){
        let chtml=`
            <div class="navbar ${v.clsJudul}">
                <div class="${v.clsContainer}">
                    ${v.htmlJudul}
                </div>
            </div>
        `;
        if(v.tukar==undefined){
            chtml+=`
            <div class="${v.clsHeader}" id="${v.idCollapse}">
                <div class="${v.clsContainer}">
                    ${v.htmlKeterangan}
                </div>
            </div>
            `;
        }else{
            chtml=`
            <div class="${v.clsHeader}" id="${v.idCollapse}">
                <div class="${v.clsContainer}">
                    ${v.htmlKeterangan}
                </div>
            </div>
            `+chtml;
        }

        this.innerHTML=chtml;
    }
    set thema5(v){
        this.innerHTML=`
        <div class="${v.clsCover}">`
            +v.header
            +`<main class="${v.clsMain}">
                ${v.htmlMain}
            </main>
        </div>`;
    }
    delUndife=lv=>{
        if(lv==undefined || lv==NaN){
            return '';
        }
        return lv;
    }
}   
customElements.define('ceb-header', cebHeader);