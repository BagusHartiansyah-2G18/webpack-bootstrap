import './komponen/ckomponen';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const url="http://localhost:5000/";
const header=document.querySelector("header");
const cebHeader1=document.createElement("ceb-header");

let navbar={
    clsUl:"navbar-nav m-auto",
    clsLi:"",
    menu:[
        {htmlLi:`<a class="nav-link active text-dark" aria-current="page" href="#"><b>Nav1</b></a>`},
        {htmlLi:`<a class="nav-link text-dark" aria-current="page" href="#">Home</a>`},
        {htmlLi:`<a class="nav-link text-dark" aria-current="page" href="#">Home</a>`},
        {htmlLi:`<a class="nav-link text-dark" aria-current="page" href="#">Home</a>`},
        {
            htmlLi:`<a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown nav</a>`,
            subMenu:[
              {htmlLi:`<li><a class="dropdown-item" href="#">Action</a></li>`},
              {htmlLi:`<li><a class="dropdown-item" href="#">Action</a></li>`},
              {htmlLi:`<li><a class="dropdown-item" href="#">Action</a></li>`}
            ]
        }
    ]
}
cebHeader1.thema1={
    clsExpand:"navbar navbar-expand navbar-dark bg-light",
    clsContainer:"container",
    htmlJudul:` <a class="navbar-brand text-dark" href="#"><img src="${url+"2.png"}" width="250"></a>`,
    navbar:navbar,
    nextNav:`<div class="col-md-3 text-end">
                <button type="button" class="btn btn-outline-primary me-2">delete</button>
                <button type="button" class="btn btn-primary">Sign-up</button>
            </div>`
};


// ex2
const cebHeader2=document.createElement("ceb-header");
navbar.clsUl="nav-pills m-auto";

const cebDropdonw=document.createElement("ceb-dropdonw");
cebDropdonw.thema1={
    clsDropdonw:"",
    clsUl:" text-small",
    clsLi:"",
    htmlJudul:`
        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="${url+"1.png"}" alt="mdo" width="32" height="32" class="rounded-circle">
        </a>`,
    menu:[
        {htmlLi:`<a class="dropdown-item judulFunc" href="#">dropdon ex1</a>`},
        {htmlLi:`<a class="dropdown-item" href="#">Settings</a>`}
    ]
};

cebHeader2.thema1={
    clsExpand:"navbar navbar-expand navbar-dark bg-warning",
    clsContainer:"container-fluid",
    htmlJudul:` <a class="navbar-brand text-dark" href="#"><img src="${url+"2.png"}" width="250"></a>`,
    navbar:navbar,
    nextNav:`<div class="col-md-3">
                ${cebDropdonw.innerHTML}
            </div>`
};


// ex3
const cebHeader3=document.createElement("ceb-header");
navbar.clsUl="nav-pills";
cebHeader3.thema2={
    clsExpand:"navbar navbar-expand navbar-dark bg-success",
    clsContainer:"container",
    htmlJudul:` <a class="navbar-brand text-dark" href="#"><img src="${url+"2.png"}" width="250"></a>`,
    navbar:navbar,
    nextNav:''
};

//ex4
const cebHeader4=document.createElement("ceb-header");
navbar={
    clsUl:"navbar-nav m-auto",
    clsLi:"",
    menu:[
        {htmlLi:`<a href="#" class="nav-link text-secondary text-center ">
                    <span class="mdi mdi-car-emergency text-primary d-block mdi-18px"></span>
                    Home11
                </a>`
        },
        {htmlLi:`<a href="#" class="nav-link text-secondary text-center">
                    <span class="mdi mdi-map-marker-circle text-warning d-block mdi-18px"></span>
                    Home11
                </a>
        `}
    ]
}
cebHeader4.thema2={
    clsExpand:"navbar navbar-expand navbar-dark bg-light",
    clsContainer:"container",
    htmlJudul:` <a class="navbar-brand text-dark" href="#"><img src="${url+"2.png"}" width="250"></a>`,
    navbar:navbar,
    nextNav:''
};

//ex5
const cebNavbar2=document.createElement("ceb-navbar");
cebNavbar2.thema2={
    clsUl:"m-auto",
    clsLi:"",
    menu:[
        {htmlLi:`<a href="#" class="nav-link text-light text-center ">
                    <span class="mdi mdi-car-emergency   d-block mdi-18px"></span>
                    Home11
                </a>`
        },
        {htmlLi:`<a href="#" class="nav-link text-light text-center">
                    <span class="mdi mdi-map-marker-circle text-warning d-block mdi-18px"></span>
                    Home11
                </a>
        `}
    ]
};
const cebButton1=document.createElement("ceb-button");
cebButton1.thema1={
    clsGroup:"",
    listBtn :[
        {
            text:`<span class="mdi mdi-web"></span>`,
            cls:" btn-sm btn-primary rounded",
            attr:""
        },{
            text:"Btn Group",
            cls:" btn-sm btn-secondary ",
            attr:""
        },{
            text:"Ex1",
            cls:" btn-sm btn-success",
            attr:""
        }
    ],
};
const cebHeader5=document.createElement("ceb-header");
cebHeader5.thema3={
    clsContainer:"container-fluid p-0 m-0 exBgImgC100",
    clsHeader:"nav-pills d-flex p-3 exBgColorBlack40" ,
    htmlJudul:`
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img class="" src="${url+"1.png"}" width="40"> 
        <h3 class="judulApp ">Header Exp 2</h3>
      </a>
    `,
    clsKeterangan:"d-flex align-items-center  my-3 text-white  p-3",
    htmlMenu:cebNavbar2.innerHTML,
    htmlKeterangan:cebButton1.innerHTML,
};


// ex6
const cebHeader6=document.createElement("ceb-header");
cebHeader6.thema3={
    clsContainer:"container-fluid p-0 m-0 exBgImgC100",
    clsHeader:"nav-pills d-flex p-3 exBgColorBlack40" ,
    htmlJudul:`
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img class="" src="${url+"1.png"}" width="40"> 
        <h3 class="judulApp ">Header Exp 2</h3>
      </a>
    `,
    clsKeterangan:"d-flex align-items-center  my-3 text-white  p-3",
    htmlMenu:cebNavbar2.innerHTML,
    htmlKeterangan:cebButton1.innerHTML,
    tukar:"Bagus H"
};


// ex7
const cebHeader7=document.createElement("ceb-header");
cebHeader7.thema4={
    clsContainer:"container",
    clsHeader:"collapse bg-dark" ,
    clsJudul:"navbar-dark bg-dark shadow-sm",
    idCollapse:"idCollapse1",
    htmlJudul:`
      <a href="#" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          <strong>Album Tukar</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#idCollapse1" aria-controls="idCollapse1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
    `,
    htmlKeterangan:`
    <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
        <h4 class="text-white">About</h4>
        <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-3 offset-md-1 py-4">
        <h4 class="text-white">Contact</h4>
        <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
        </ul>
        </div>
    </div>
    `
};

// ex8
const cebHeader8=document.createElement("ceb-header");
cebHeader8.thema4={
    clsContainer:"container",
    clsHeader:"collapse bg-dark" ,
    clsJudul:"navbar-dark bg-dark shadow-sm",
    idCollapse:"idCollapse2",
    tukar:"Bagus H",
    htmlJudul:`
      <a href="#" class="navbar-brand d-flex align-items-center">
            <img src="${url+"1.png"}" class="me-2" width="40"> 
            <strong>Album Tukar</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#idCollapse2" aria-controls="idCollapse2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
    `,
    htmlKeterangan:`
    <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
        <h4 class="text-white">About</h4>
        <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-3 offset-md-1 py-4">
            ${cebNavbar2.innerHTML}
        </div>
    </div>
    `
};



// ex9
const cebHeader9=document.createElement("ceb-header");
cebHeader3.thema2={
    clsExpand:"navbar navbar-expand navbar-dark exBgColorBlack20",
    clsContainer:"container-fluid",
    htmlJudul:` <a class="navbar-brand text-dark" href="#"><img src="${url+"2.png"}" width="250"></a>`,
    navbar:navbar,
    nextNav:''
};
cebHeader9.thema5={
    clsCover:"container-fluid exBgImgC d-flex mx-auto p-0 flex-column",
    header:cebHeader3.innerHTML,
    clsMain:"p-3 container mhight250",
    htmlMain:`
      <h1>Cover your page.</h1>
      <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
      <p class="lead">
        <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
      </p>
    `,
};




const main=document.getElementById("main");
const cebcar1=document.createElement("ceb-card");
cebcar1.thema1={
    clsCard: "col-4 p-0 m-3",
    file:`<img src="${url+"anggrek.jpg"}" class="bd-placeholder-img card-img-top" width="100%" height="180">`,
    clsHeader:" p-2 bg-light  h3",
    htmlHeader:"Informasi Penerimaan",
    clsBody:"",
    htmlBody:"Some quick example text to build on the card Header and make up the bulk of the card's content.",
};

const cebcar2=document.createElement("ceb-card");
cebcar2.thema1={
    clsCard: "col-4 p-0 m-3",
    file:`<img src="${url+"anggrek.jpg"}" class="bd-placeholder-img card-img-top" width="100%" height="180">`,
    clsHeader:" p-2 bg-light  h3",
    htmlHeader:"Informasi Penerimaan",
    clsBody:"",
    tukar:"Bagus H",
    htmlBody:"Some quick example text to build on the card Header and make up the bulk of the card's content.",
};

const cebcar3=document.createElement("ceb-card");
cebcar3.thema2={
    clsCard: "col-4 p-0 m-3",
    file:`<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><Header>Placeholder</Header><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>`,
    clsHeader:"",
    htmlHeader:"Informasi Penerimaan",
    clsBody:"",
    tukar:"Bagus H",
    htmlBody:"Some quick example text to build on the card Header and make up the bulk of the card's content.",
};

const cebcar4=document.createElement("ceb-card");
cebcar4.body={
    clsHeader:" ",
    htmlHeader:"Informasi Penerimaan",
    clsBody:"",
    tukar:"Bagus H",
    htmlBody:"Some quick example text to build on the card Header and make up the bulk of the card's content.",
}

const cebStyle=document.createElement("ceb-style");
cebStyle.rowCol={
    clsRow:"",
    col:[
        {
            cls:"-4 p-0",
            html:`<img src="${url+"anggrek.jpg"}" class="bd-placeholder-img card-img-top" width="100%" height="180">`
        },
        {
            cls:"-8  pcard3",
            html:cebcar4.innerHTML
        }
    ]
}
cebcar4.thema3={
    cls:"col-4 p-0 m-3",
    html:cebStyle.innerHTML
};

const cebcar5=document.createElement("ceb-card");
cebNavbar2.thema2={
    clsUl:"align-items-baseline",
    clsLi:"",
    menu:[
        {htmlLi:`<span class="mdi mdi-car-emergency text-primary d-block mdi-18px"></span>`},
        {htmlLi:`<b class="m-2">Home11</b>`}
    ]
};
cebStyle.rowCol={
    clsRow:"",
    col:[
        {
            cls:"-6 p-0 align-self-center",
            html:cebNavbar2.innerHTML
        },
        {
            cls:"-6  pcard3 text-end",
            html:`
                <button type="button" class="btn btn-outline-primary me-2">delete</button>
                <button type="button" class="btn btn-primary">Sign-up</button>
            `
        }
    ]
}
cebcar5.thema2={
    clsCard: "col-4 p-0 m-3",
    clsHeader:"",
    htmlHeader:cebStyle.innerHTML,
    clsBody:"",
    tukar:"Bagus H",
    htmlBody:"Some quick example text to build on the card Header and make up the bulk of the card's content.",
};


const cardButton=document.createElement("ceb-card");
cebButton1.thema1={
    clsGroup:"",
    listBtn :[
        {
            text:`<span class="mdi mdi-web"></span>`,
            cls:" btn-sm btn-primary rounded",
            attr:""
        },{
            text:"Btn Group",
            cls:" btn-sm btn-secondary ",
            attr:""
        },{
            text:"Ex1",
            cls:" btn-sm btn-success",
            attr:""
        }
    ],
};
const cebButton2=document.createElement("ceb-button")
cebButton2.thema2={
    text:`<span class="mdi mdi-web"></span>ex2 btn Popover`,
    cls:"btn-sm btn-primary",
    msg:"Aksi ini sedang di kunci",
    posisi:"top"
};
const cebButton3=document.createElement("ceb-button")
cebButton3.thema3={
    text:`<span class="mdi mdi-web"></span>Bagus H`,
    cls:" btn-sm btn-primary rounded",
    attr:""
};
cardButton.thema2={
    clsCard: "col-4 p-0 m-3",
    clsHeader:" bg-dark text-light",
    htmlHeader:"Button",
    clsBody:"",
    htmlBody:cebButton1.outerHTML
        +'<br><br>'
        +cebButton2.outerHTML
        +'<br><br>'
        +cebButton3.outerHTML
    ,
};


cebDropdonw.thema1={
    clsDropdonw:"",
    clsUl:" text-small",
    clsLi:"",
    htmlJudul:`
        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="${url+"1.png"}" alt="mdo" width="32" height="32" class="rounded-circle">
        </a>`,
    menu:[
        {htmlLi:`<a class="dropdown-item judulFunc" href="#">dropdon ex1</a>`},
        {htmlLi:`<a class="dropdown-item" href="#">Settings</a>`}
    ]
};
const cebDropdonw2=document.createElement("ceb-dropdonw")
cebDropdonw2.thema2={
    clsGroup:" bg-primary",
    cls:" text-small btn-sm text-white",
    text:"ex2 small",
    attr:"",
    menu:[
        {htmlLi:`<a class="dropdown-item judulFunc" href="#">dropdon ex1</a>`},
        {htmlLi:`<a class="dropdown-item" href="#">Settings</a>`}
    ]
}    
const cebDropdonw3=document.createElement("ceb-dropdonw")
cebDropdonw3.thema3={
    text:`<span class="mdi mdi-web"></span>sasa`,
    cls:"btn-sm btn-primary",
    msg:"Aksi ini sedang di kunci",
    posisi:"top",
    menu:[
        {htmlLi:`<a class="dropdown-item judulFunc" href="#">dropdon ex1</a>`},
        {htmlLi:`<a class="dropdown-item" href="#">Settings</a>`}
    ]
}
const cardDropdonw=document.createElement("ceb-card");
cardDropdonw.thema2={
    clsCard: "col-4 p-0 m-3",
    clsHeader:" bg-dark text-light",
    htmlHeader:"Dropdonw",
    clsBody:"",
    htmlBody:cebDropdonw.outerHTML
        +'<br><br>'
        +cebDropdonw2.outerHTML
        +'<br><br>'
        +cebDropdonw3.outerHTML
    ,
};


const galery1=document.createElement("ceb-galery");
const styleContentBetween=document.createElement("ceb-style");
const tsmall=document.createElement("ceb-text");
tsmall.small={
    cls:"text-muted",
            text:"9 mins"
}
styleContentBetween.contentBetween={
    cls:"d-flex align-items-center",
    html:cebButton1.innerHTML
        +tsmall.innerHTML
}
galery1.thema1={
    clsCard:"card shadow-sm",
    htmlFile:`<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>`,
    clsCardBody:"card-body",
    htmlBody:`
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>`
    +styleContentBetween.innerHTML
}

const cardGalery=document.createElement("ceb-card");
cardGalery.thema2={
    clsCard: "col-4 p-0 m-3",
    clsHeader:" bg-dark text-light",
    htmlHeader:"Galery",
    clsBody:"",
    htmlBody:galery1.outerHTML
        +'<br><br>'
        // +cebDropdonw2.outerHTML
        +'<br><br>'
        // +cebDropdonw3.outerHTML
    ,
};


const input1=document.createElement("ceb-input");
input1.thema1={
    id:"text",
    tipe:"text",
    cls:"form-control",
    attr:`placeholder="ex1"`
};

const input2=document.createElement("ceb-input");
input2.thema2={
    clsDiv:"mb-3",
    text:"Username",
    id:"text",
    tipe:"text",
    cls:"form-control",
    attr:`placeholder="ex2"`
};

const input3=document.createElement("ceb-input");
input3.thema3={
    clsDiv:"mb-3",
    text:"Username",
    id:"text",
    tipe:"text",
    cls:"form-control",
    attr:`placeholder="ex3"`,
    ket:"We'll never share your email with anyone else."
};

const input4=document.createElement("ceb-input");
input4.thema4={
    clsDiv:"input-group mb-3",
    clsInput:" bg-info",
    text:"Username",
    id:"text",
    tipe:"text",
    cls:"form-control",
    attr:`placeholder="ex4 "`,
};

const input5=document.createElement("ceb-input");
input5.thema5={
    clsDiv:"input-group mb-3",
    clsInput:" bg-info",
    tukar:"Bagus H",
    textS:"$",
    textE:".00",
    id:"text",
    tipe:"text",
    cls:"form-control",
    attr:`placeholder="ex5"`,
};

const input6=document.createElement("ceb-input");
input6.thema6={
    clsDiv:"mb-3",
    text:"ex6",
    id:"text",
    tipe:"text",
    cls:"form-control",
    attr:``
};

const input7=document.createElement("ceb-input");
input7.thema7={
    clsDiv:"mb-3",
    text:"email",
    id:"text",
    tipe:"text",
    cls:"form-control is-invalid",
    attr:``,
    respValidasi:{
        sukses:"Bagus!",
        error:"manimal 4 carakter!"
    }
};

const check1=document.createElement("ceb-input");
check1.check1={
    cls:"form-check-input",
    id:"check"
};
const check2=document.createElement("ceb-input");
check2.check2={
    clsDiv:"mb-3 form-check",
    cls:"form-check-input",
    id:"check",
    text:"ex check 2",
    attr:`style="float:right;"`,
};

const radio1=document.createElement("ceb-input");
radio1.radio1={
    cls:"form-check-input",
    id:"radio",
    name:"radios",
    attr:""
};
const radio2=document.createElement("ceb-input");
radio2.radio2={
    clsDiv:"mb-3 form-check",
    cls:"form-check-input",
    id:"radio",
    name:"radios",
    text:"ex radio 2",
    attr:``,
};

const select=document.createElement("ceb-input");
select.select={
    cls:"form-select",
    id:"select",
    // attr:` style="padding-inline-start: 30px;"`,
    attr:``,
    list:[
      {value:"bgs",valueName:"Bagus h"},
      {value:"ain",valueName:"amin ku"}
    ],
};


const cardInput=document.createElement("ceb-card");
cardInput.thema2={
    clsCard: "col-4 p-0 m-3",
    clsHeader:" bg-dark text-light",
    htmlHeader:"Input",
    clsBody:"",
    htmlBody:input1.innerHTML
        +'<br>'
        +input2.innerHTML
        +'<br>'
        +input3.outerHTML
        +'<br>'
        +input4.innerHTML
        +'<br>'
        +input5.outerHTML
        +'<br>'
        +input6.innerHTML
        +'<br>'
        +input7.outerHTML
        +'<br>'
        +check1.innerHTML
        +'<br>'
        +check2.outerHTML
        +'<br>'
        +radio1.innerHTML
        +'<br>'
        +radio2.outerHTML
        +'<br>'
        +select.outerHTML
    ,
};


const slider=document.createElement("ceb-slider");
const sliderGetFile=document.createElement("ceb-slider");
sliderGetFile.getFileH={
    url:url+"anggrek.jpg",
    height:"400px",
    color:"black",
    opacityDiv:"0.6",
    opacityImg:"0.4"
}
let list=[];
list.push({
    file:sliderGetFile.innerHTML,
    cls:" d-none d-md-block",
    attr:"",
    html:`<h5>slide label</h5>
    <p>Some representative placeholder content for the first slide.</p>`
});

sliderGetFile.getFileH={
    url:url+"Bunga-Melati.webp",
    height:"400px",
    color:"black",
    opacityDiv:"0.6",
    opacityImg:"0.4"
}
list.push({
    file:sliderGetFile.innerHTML,
    cls:" d-none d-md-block",
    attr:"",
    html:`<h5>slide label</h5>
    <p>Some representative placeholder content for the first slide.</p>`
});
sliderGetFile.getFileH={
    url:url+"padma.webp",
    height:"400px",
    color:"black",
    opacityDiv:"0.6",
    opacityImg:"0.4"
}
list.push({
    file:sliderGetFile.innerHTML,
    cls:" d-none d-md-block",
    attr:"",
    html:`<h5>slide label</h5>
    <p>Some representative placeholder content for the first slide.</p>`
});
list.push({
    file:`<svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>`,
    cls:" d-none d-md-block",
    html:`<h5>First slide label</h5>
    <p>Some representative placeholder content for the first slide.</p>`
});
slider.thema1={
    id:"carouselExampleCaptions",
    list:list
};
const cardSlider=document.createElement("ceb-card");
cardSlider.thema2={
    clsCard: "col-4 p-0 m-3",
    clsHeader:" bg-dark text-light",
    htmlHeader:"Slider",
    clsBody:"",
    htmlBody:slider.innerHTML
        +'<br>'
        // +input2.innerHTML
        +'<br>'
    ,
};


const tab=document.createElement("ceb-tab");
tab.thema1={
    clsTab:"shadow",
    id:"tab1",
    clsHBody:"",
    clsHeader:"bg-info form-control p-3",
    htmlHeader:"Tahapan 1",
    clsBody:"p-2",
    htmlBody:"It is hidden by default, until the collapse plugin adds the"
}
const tab2=document.createElement("ceb-tab");
tab2.thema2={
    id:"tab2",
    tab:[
    {
        text:'Home',
        cls:'',
        active:"show active",
        html:`
        <p>This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
        `,
    },{
        text:'Agenda',
        cls:'',
        html:`
        <p>Bagus H</p>
        `, 
    }
    ]
}

const cardTab=document.createElement("ceb-card");
cardTab.thema2={
    clsCard: "col-4 p-0 m-3",
    clsHeader:" bg-dark text-light",
    htmlHeader:"Tab",
    clsBody:"",
    htmlBody:tab.innerHTML
        +'<br>'
        +tab2.innerHTML
        +'<br>'
    ,
};



// header
header.appendChild(cebHeader1);
header.appendChild(cebHeader2);
header.appendChild(cebHeader3);
header.appendChild(cebHeader4);
header.appendChild(cebHeader5);
header.appendChild(cebHeader6);
header.appendChild(cebHeader7);
header.appendChild(cebHeader8);
header.appendChild(cebHeader9);

// card 
main.innerHTML=`
    <div class="row p-3">
        ${cebcar1.innerHTML}
        ${cebcar2.innerHTML}
        ${cebcar3.innerHTML}
        ${cebcar4.innerHTML}
        ${cebcar5.innerHTML}
    <div>
`;

// button
main.appendChild(cardButton)

// dropdonw
main.appendChild(cardDropdonw)

// galery
main.appendChild(cardGalery)

// input 
main.appendChild(cardInput)

// silder
main.appendChild(cardSlider)

// tab
main.appendChild(cardTab)