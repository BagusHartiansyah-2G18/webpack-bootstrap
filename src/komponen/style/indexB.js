
class cebStyle extends HTMLElement{
    constructor(){
        super();
    }
    set contentBetween(v){
        // cebStyle.contentBetween={
        //     cls:"d-flex align-items-center",
        //     html:`<span class="mdi mdi-car-emergency   d-block mdi-18px"></span>BAGUS H`
        // }
        this.innerHTML=`
            <div class="justify-content-between ${v.cls}">
                ${v.html}
            </div>
        `;
    }
    set rowCol(v){
        // style_.rowCol({
        //     clsRow:" p-3",
        //     col:[
        //         {
        //             cls:"-4",
        //             html:""
        //         }
        //     ]
        // })
        let chtml=``;
        v.col.forEach((cv,ci) => {
            chtml+=`
                <div class="col${cv.cls}">
                    ${cv.html}
                </div>
            `;
        });
        this.innerHTML=`
        <div class="row ${v.clsRow}"> 
            ${chtml}
        </div>
        `;
    }
}
customElements.define("ceb-style",cebStyle);