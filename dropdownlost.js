
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const listmenu = document.querySelector('.listmenu');
const btn=document.querySelector(".btn");
const dropdown=document.querySelector(".dropdown");
const hargaestimasi=document.querySelector(".harga-estimasi");
const bx=document.querySelector(".bx")
const hargaesti=document.querySelector(".hargaesti");
const harga=document.querySelector(".harga")


let hargadefault=document.querySelector(".harga");
let luas=document.querySelector(".alamat2");
let estimasiharga=document.querySelector(".estimasibiaya");
function  hasil(){
  luastanah=luas.value;
  hargabangu=hargadefault.value;
  hasiljumlah=luastanah*hargabangu;
  
  estimasiharga.innerHTML=hasiljumlah;
}
hargadefault.addEventListener("input", hasil);
luas.addEventListener("input", hasil);



document.querySelectorAll(".listmenu").forEach(n => n.
 addEventListener("click" , ()=>{
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
  }));
document.querySelectorAll(".menu").forEach(n => n.
 addEventListener("click" , ()=>{
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
  }));
btn.addEventListener ('click', function(){
    dropdown.classList.toggle("show");
  });
document.querySelectorAll(".dropdown").forEach(n => n. 
  addEventListener("click", ()=>{
    hargaesti.classList.add("show");
    dropdown.classList.remove("show")
  })
);
const pilihlantai=document.querySelector(".dropdown").children;
pilihlantai[0].addEventListener('click', function(){
  harga.value=800;
  btn.textContent="satu lantai";
});
pilihlantai[1].addEventListener('click', function(){
  harga.value=900;
  btn.textContent="dua lantai";
});
pilihlantai[2].addEventListener('click', function(){
  harga.value=1000;
  btn.textContent="standart";
});
pilihlantai[3].addEventListener('click', function(){
  harga.value=1100;
  btn.textContent="mewah";
});



menuToggle.addEventListener("click", ()=>{
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

  
