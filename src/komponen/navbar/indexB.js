class cebNavbar extends HTMLElement{
    constructor(){
        super();
    }
    set thema1(cv){
        let hhtml=`<ul class="nav ${cv.clsUl}">`;
        cv.menu.forEach((cv1,ci1) => {
            if(cv1.subMenu!=undefined && cv1.subMenu.length>0){
                hhtml+=`
                <li class="nav-item dropdown ${cv.clsLi}">
                    ${cv1.htmlLi}
                    <ul class="dropdown-menu ">`;
                    cv1.subMenu.forEach(cv1 => {
                        hhtml+=`<li>${cv1.htmlLi}</li>`;
                    });
                hhtml+=`</ul>
                </li>`;
            }else{
                hhtml+=`
                <li class="nav-item ${this.delUndife(cv.clsLi)}">
                    ${cv1.htmlLi}
                </li>`;
            }
        });
        this.innerHTML=hhtml+`</ul>`;
    }
    set thema2(v){
        let hhtml=`<ul class="nav nav-pills ${v.clsUl}">`;
        v.menu.forEach((cv,ci) => {
            hhtml+=`
            <li class="nav-item ${this.delUndife(v.clsLi)}">
                ${cv.htmlLi}
            </li>`;
        });
        this.innerHTML=(hhtml+`</ul>`);
    }
    delUndife=lv=>{
        if(lv==undefined || lv==NaN){
            return '';
        }
        return lv;
    }
}
customElements.define('ceb-navbar', cebNavbar);