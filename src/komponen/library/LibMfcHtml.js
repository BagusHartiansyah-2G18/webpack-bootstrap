const divider=(cls)=>{
    return `<div class="b-example-divider ${cls}"></div>`;
}
const lines=()=>{
    return "<hr>";
}
const listOL=(v)=>{
    // {
        // cls:''
        // clsLi:'',
        // list:''
    // }
    let chtml=``;
    v.list.forEach(cv=> {
        chtml+=`<li class="${v.clsLi}">${cv}</li>`;
    });
    return `
        <ol class="${v.cls}">
            ${chtml}
        </ol>
    `;
}
// export default ;
// import listOL from './komponen/library/LibMfcHtml';

module.exports={listOL}
// import * as exlib from './komponen/library/LibMfcHtml';