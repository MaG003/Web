const TTSV_root = {
    mssv: 20205047,
    hoten: "Mai Hoàng Việt",
    namvaotruong: 2020,
    bacdaotao: "KSCLC-TN-TT-VN-ICT",
    chuongtrinh: "Công nghệ thông tin Việt-Nhật 2020",
    khoavienquanly: "Trường Công nghệ Thông tin và Truyền thông",
    tinhtrang: "Học",
    gioitinh: "Nam",
    lop: "Việt Nhật 01-K65",
    khoahoc: 65,
    email: "viet.mh205047@sis.hust.edu.vn",
    img: "avata.jpg"
};
const TTSV = {
    mssv: 20205047,
    hoten: "Mai Hoàng Việt",
    namvaotruong: 2020,
    bacdaotao: "KSCLC-TN-TT-VN-ICT",
    chuongtrinh: "Công nghệ thông tin Việt-Nhật 2020",
    khoavienquanly: "Trường Công nghệ Thông tin và Truyền thông",
    tinhtrang: "Học",
    gioitinh: "Nam",
    lop: "Việt Nhật 01-K65",
    khoahoc: 65,
    email: "viet.mh205047@sis.hust.edu.vn",
    img: "avata.jpg"
};

const update = function(){
    TTSV.mssv = document.querySelectorAll('.mssv')[1].value;
    TTSV.hoten = document.querySelectorAll('.hoten')[1].value ;
    TTSV.namvaotruong = document.querySelectorAll('.namvaotruong')[1].value;
    TTSV.bacdaotao = document.querySelectorAll('.bacdaotao')[1].value ;
    TTSV.chuongtrinh = document.querySelectorAll('.chuongtrinh')[1].value ;
    TTSV.khoavienquanly = document.querySelectorAll('.khoavienquanly')[1].value;
    TTSV.tinhtrang = document.querySelectorAll('.tinhtrang')[1].value;
    TTSV.gioitinh = document.querySelectorAll('.gioitinh')[1].elements['gender'].value ;
    TTSV.lop = document.querySelectorAll('.lop')[1].value ;
    TTSV.khoahoc = document.querySelectorAll('.khoahoc')[1].value;
    TTSV.email = document.querySelectorAll('.email')[1].value;
    TTSV.img = document.querySelector('#img').src;
}


const change = function (){
    document.querySelector('.mssv').innerHTML = TTSV.mssv;
    document.querySelector('.hoten').innerHTML = TTSV.hoten;
    document.querySelector('.namvaotruong').innerHTML = TTSV.namvaotruong;
    document.querySelector('.bacdaotao').innerHTML = TTSV.bacdaotao;
    document.querySelector('.chuongtrinh').innerHTML = TTSV.chuongtrinh;
    document.querySelector('.khoavienquanly').innerHTML = TTSV.khoavienquanly;
    document.querySelector('.tinhtrang').innerHTML = TTSV.tinhtrang;
    document.querySelector('.gioitinh').innerHTML = TTSV.gioitinh;
    document.querySelector('.lop').innerHTML = TTSV.lop;
    document.querySelector('.khoahoc').innerHTML = TTSV.khoahoc;
    document.querySelector('.email').innerHTML = TTSV.email; 
    document.querySelector('#img').src = TTSV.img;
    document.querySelector('#avatar').src = TTSV.img;
    console.log(TTSV);
};


const change_root = function (){
    document.querySelector('.mssv').innerHTML = TTSV_root.mssv;
    document.querySelector('.hoten').innerHTML = TTSV_root.hoten;
    document.querySelector('.namvaotruong').innerHTML = TTSV_root.namvaotruong;
    document.querySelector('.bacdaotao').innerHTML = TTSV_root.bacdaotao;
    document.querySelector('.chuongtrinh').innerHTML = TTSV_root.chuongtrinh;
    document.querySelector('.khoavienquanly').innerHTML = TTSV_root.khoavienquanly;
    document.querySelector('.tinhtrang').innerHTML = TTSV_root.tinhtrang;
    document.querySelector('.gioitinh').innerHTML = TTSV_root.gioitinh;
    document.querySelector('.lop').innerHTML = TTSV_root.lop;
    document.querySelector('.khoahoc').innerHTML = TTSV_root.khoahoc;
    document.querySelector('.email').innerHTML = TTSV_root.email;
    document.querySelector('#img').src = TTSV_root.img;
    document.querySelector('#avatar').src = TTSV_root.img;
    console.log(TTSV_root);

};


const tranfer_back = function(){
    let event1 = document.querySelectorAll('.infor');
    let event2 = document.querySelectorAll('.box');
    let event3 = document.querySelectorAll('.icon');
    
    for(let i = 0; i < event1.length; i++){
        event1[i].classList.replace("display-none","display-inline");
    }
    
    for(let i = 0; i < event2.length; i++){
        event2[i].classList.replace("display-inline","display-none");
    }

    for(let i = 0; i < event3.length; i++){
        event3[i].classList.replace("display-inline","display-none");
    }

};

const form = document.querySelector('.form-img');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
        const container = document.getElementById('img');
        const avatar = document.getElementById('avatar');
        container.src = img.src;
        avatar.src = img.src;
        }
    }

});




let element1 = document.querySelector('#edit');
element1.addEventListener('click', function(){
    let event1 = document.querySelectorAll('.infor');
    let event2 = document.querySelectorAll('.box');
    let event3 = document.querySelectorAll('.icon');
    for(let i = 0; i < event1.length; i++){
        event1[i].classList.replace("display-inline","display-none");
    }
    
    for(let i = 0; i < event2.length; i++){
        event2[i].classList.replace("display-none","display-inline");
    }

    for(let i = 0; i < event3.length; i++){
        event3[i].classList.replace("display-none","display-inline");
    }

});



let element2 = document.querySelector('#ok');
element2.addEventListener('click', update);
element2.addEventListener('click', tranfer_back);
element2.addEventListener('click', change);



let element3 = document.querySelector('#cancel');
element3.addEventListener('click', tranfer_back);
element3.addEventListener('click', change);


let element4 = document.querySelector('#reset');
element4.addEventListener('click', tranfer_back);
element4.addEventListener('click', change_root);

