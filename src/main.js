import './komponen/ckomponen';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import * as exlib from './komponen/library/LibMfcHtml';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const url="http://localhost:5000/";
const header=document.querySelector("header");

const cebNavbar2=document.createElement("ceb-navbar");
cebNavbar2.thema2={
    clsUl:"m-auto",
    clsLi:"",
    menu:[
        {
            htmlLi:`<a href="#" class="nav-link text-light text-center">
                    <span class="mdi mdi-rhombus-split text-warning d-block mdi-18px"></span>
                    Prosedur
                </a>`
        },{
            htmlLi:`<a href="#" class="nav-link text-light text-center ">
                <span class="mdi mdi-desktop-mac text-primary d-block mdi-18px"></span>
                Pembahasan
            </a>`
        },{
            htmlLi:`<a href="#" class="nav-link text-light text-center ">
                <span class="mdi mdi-account-school text-success d-block mdi-18px"></span>
                Peneliti
            </a>`
        }
    ]
};

const cebHeader8=document.createElement("ceb-header");
cebHeader8.thema4={
    clsContainer:"container-fluid exBgImgC",
    clsHeader:"collapse" ,
    clsJudul:"navbar-dark p-0 shadow-sm ",
    idCollapse:"idCollapse2",
    tukar:"Bagus H",
    htmlJudul:`
      <a href="#" class="navbar-brand text-dark d-flex align-items-center">
            <img src="${url+"dev-blank.png"}" class="me-2" width="40"> 
            <strong>SMART MOBILE CATTLE</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#idCollapse2" aria-controls="idCollapse2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
    `,
    htmlKeterangan:`
    <div class="row exBgColorBlack60">
        <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">Informasi</h4>
            <p class="text-muted">dalam rangka mendorong sektor peternakan yang berperan penting dalam peningkatan 
                perekonomian masyarakat,peneliti mengembangkan sebuah sistem yang dapat memberikan solusi dari beberapa permasalahan yang ada serta dapat bermanfaat
                bagi masyarakat terutama para peternak.
            </p>
        </div>
        <div class="col-sm-3 offset-md-1 py-4">
            ${cebNavbar2.innerHTML}
        </div>
    </div>
    `
};
header.appendChild(cebHeader8); 

const main=document.getElementById("main");
const slider=document.createElement("ceb-slider");
const sliderGetFile=document.createElement("ceb-slider");
let heightSlider="600px;";

sliderGetFile.getFileH={
    url:url+"s1.jpg",
    height:heightSlider,
    color:"black",
    opacityDiv:"0.6",
    opacityImg:"0.4"
}
let list=[];
list.push({
    file:sliderGetFile.innerHTML,
    cls:" d-none d-md-block",
    attr:"",
    html:`<h5>4 bagian</h5>
    <p>yang merupakan peran dari sistem untuk menghasilkan laporan yang dibutuhkan</p>`
});

sliderGetFile.getFileH={
    url:url+"s2.jpg",
    height:heightSlider,
    color:"black",
    opacityDiv:"0.6",
    opacityImg:"0.4"
}
list.push({
    file:sliderGetFile.innerHTML,
    cls:" d-none d-md-block",
    attr:"",
    html:`<h5>4 Tahapan</h5>
    <p>yang merupakan proses pengembangan sistem</p>`
});
slider.thema1={
    id:"carouselExampleCaptions",
    list:list
};
main.appendChild(slider);


let listHLogin= exlib.listOL({
    cls:'',
    clsLi:'',
    list:[
        "User, pengguna yang berperan sebagai masyarakat yang memiliki ternak yang akan dilakukan pendataan terhadap ternak yang dimilikinya",
        "Admin, pengguna yang berperan sebagai admin OPD terkaid yang bertanggung jawab memvalidasi transaksi serta pendataan terhadap aktivitas disistem",
        "Developer, pengguna yang berperan untuk melakukan akses ke seluruh tingkatan pengguna guna untuk melakukan penelusuran data dan penanganan cepat sistem"
    ]
})
const cebcar4=document.createElement("ceb-card");
cebcar4.body={
    clsHeader:" bg-warning",
    htmlHeader:"Halaman Login",
    clsBody:"",
    tukar:"Bagus H",
    htmlBody:`
        Halaman ini digunakan oleh beberapa kategori pengguna diantaranya adalah :
        <br>
        ${listHLogin}
    `,
}
const cebStyle=document.createElement("ceb-style");
cebStyle.rowCol={
    clsRow:" col-10 m-auto p-3 shadow",
    col:[
        {
            cls:"-4 p-0",
            html:`<img src="${url+"app1.jpg"}" class="bd-placeholder-img card-img-top" width="100%" height="100%">`
        },
        {
            cls:"-8  pcard3",
            html:cebcar4.innerHTML
        }
    ]
}
cebcar4.thema3={
    cls:"p-0 m-0",
    html:cebStyle.innerHTML
};
main.appendChild(cebcar4);


const cebcar1=document.createElement("ceb-card");
listHLogin= exlib.listOL({
    cls:'',
    clsLi:'',
    list:[
        "data, merupakan menu untuk mendata anggota pengguna sistem, data ternak hingga vaksinasi ternak per anggota",
        "pasar, merupakan fitur untuk memudahkan para penjual dan pembeli untuk melakukan intraksi jual beli ternak",
        "transaksi, merupakan daftar transaksi yang sedang berproses maupun yang telah selesai",
        "informasi, merupakan fitur edukasi dari tim peneliti yang memberikan informasi seputar peternakan"
    ]
})
cebcar1.body={
    clsHeader:" bg-primary text-white",
    htmlHeader:"Halaman Dashboard",
    clsBody:"",
    tukar:"Bagus H",
    htmlBody:`
        Halaman ini merupakan menu utama setelah melewati portal Halaman Login, dengan penjelasan sebagai berikut :
        <br>
        ${listHLogin}
    `,
}
cebStyle.rowCol={
    clsRow:" col-10 m-auto p-3 shadow",
    col:[
        {
            cls:"-4 p-0",
            html:`<img src="${url+"app2.jpg"}" class="bd-placeholder-img card-img-top" width="100%" height="100%">`
        },
        {
            cls:"-8  pcard3",
            html:cebcar1.innerHTML
        }
    ]
}
cebcar1.thema3={
    cls:"p-0 m-0",
    html:cebStyle.innerHTML
};
main.appendChild(cebcar1);

const cebcar2=document.createElement("ceb-card");
listHLogin= exlib.listOL({
    cls:'',
    clsLi:'',
    list:[
        "Data Pengguna, merupakan menu untuk mendata setiap pengguna sistem",
        "Data Ternak, merupakan menu untuk mendata setiap ternak peranggota dan aksi untuk melakukan penjualan ternak",
        "Data Vaksinasi, merupakan menu untuk mendata berbagai ciri-ciri ternak yang dilakukan setiap tahunnya sebagai dasar penerbitan kartu ternak"
    ]
})
cebcar2.body={
    clsHeader:" bg-info text-white",
    htmlHeader:"Halaman Data",
    clsBody:"",
    tukar:"Bagus H",
    htmlBody:`
        Halaman ini merupakan menu untuk mendata anggota pengguna sistem, data ternak hingga vaksinasi ternak per anggota
        <br>
        ${listHLogin}
    `,
}
cebStyle.rowCol={
    clsRow:" col-10 m-auto p-3 shadow",
    col:[
        {
            cls:"-4 p-0",
            html:`<img src="${url+"app4.jpg"}" class="bd-placeholder-img card-img-top" width="100%" height="100%">`
        },
        {
            cls:"-8  pcard3",
            html:cebcar2.innerHTML
        }
    ]
}
cebcar2.thema3={
    cls:"p-0 m-0",
    html:cebStyle.innerHTML
};
main.appendChild(cebcar2);


const cebcar3=document.createElement("ceb-card");
listHLogin= exlib.listOL({
    cls:'',
    clsLi:'',
    list:[
        "Penjual, merupakan pengguna yang memiliki ternak aktif yang melakukan penjualan ternak dengan akti jual ternak pada menu data ternak",
        "Pembeli untuk menternak, maka sistem akan memindahkan data ternak kepemilikan tersebut kepada pembeli dan dinonaktifkan di daftar ternak penjual",
        "Pembeli untuk pemotongan, maka sistem akan menonaktifkan data / kartu ternak tersebut, sehingga kartu ternak tersebut tidak dapat dimanfaatkan kembali",
        "Admin Penanggung Jawab, merupakan seseorang yang menjadi saksi terhadap aktivitas penjual dan pembeli"
    ]
})
cebcar3.body={
    clsHeader:" bg-success text-white",
    htmlHeader:"Halaman Pasar",
    clsBody:"",
    tukar:"Bagus H",
    htmlBody:`
        Halaman ini merupakan menu untuk melakukan transaksi jual beli ternak, adapun yang terlibat disini adalah 
        <br>
        ${listHLogin}
    `,
}
cebStyle.rowCol={
    clsRow:" col-10 m-auto p-3 shadow",
    col:[
        {
            cls:"-4 p-0",
            html:`<img src="${url+"app3.jpg"}" class="bd-placeholder-img card-img-top" width="100%" height="100%">`
        },
        {
            cls:"-8  pcard3",
            html:cebcar3.innerHTML
        }
    ]
}
cebcar3.thema3={
    cls:"p-0 m-0",
    html:cebStyle.innerHTML
};
main.appendChild(cebcar3);

const cebcar5=document.createElement("ceb-card");
cebcar5.thema1={
    clsCard: "p-0 m-3",
    file:`<img src="${url+"pnt1.png"}" class="bd-placeholder-img card-img-top" width="100%" height="450">`,
    clsHeader:" p-2 bg-info text-center h3",
    htmlHeader:"Bagus Hartiansyah",
    clsBody:" text-center",
    tukar:"Bagus H",
    htmlBody:"<b>Informatika <br>ITN MALANG</b>",
}
const cebcar6=document.createElement("ceb-card");
cebcar6.thema1={
    clsCard: "p-0 m-3",
    file:`<img src="${url+"pnt2.png"}" class="bd-placeholder-img card-img-top" width="100%" height="450">`,
    clsHeader:" p-2 bg-info text-center h3",
    htmlHeader:"Sofian",
    clsBody:" text-center",
    tukar:"Bagus H",
    htmlBody:"<b>Peternakan <br>UNIVERSITAS MATARAM</b>",
}
cebStyle.rowCol={
    clsRow:" col-10 m-auto p-3 shadow",
    col:[
        {
            cls:"-6 p-0",
            html:cebcar5.innerHTML
        },
        {
            cls:"-6 ",
            html:cebcar6.innerHTML
        }
    ]
}
main.appendChild(cebStyle);


const loader=document.createElement("ce-loader");
loader.thema1={};
console.log(loader);
