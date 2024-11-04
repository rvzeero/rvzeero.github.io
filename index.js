const containergambar=document.querySelector('.containergambar');
const besar=document.querySelector('.besar');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const listmenu = document.querySelector('.listmenu');
const btn=document.querySelector(".btn");
const dropdown=document.querySelector(".dropdown");

menuToggle.addEventListener("click", ()=>{
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});
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

 
containergambar.addEventListener('click', function(e){
  if (e.target.className=='kecil'){
    besar.src=e.target.src;
  }
});

/*slider gambar*/
const carousel = document.querySelector(".carousel");
firstImg =  document.querySelectorAll("img")[0];
arrowIcon = document.querySelectorAll(".wrapper i");

let ifDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 4 ;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcon = () => {
    arrowIcon[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcon[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcon.forEach(icon => {
    icon.addEventListener("click", ()=>{
         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
         showHideIcon() 
    });
});

const autoslide = ()=> {
    let positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 4;
    let valDiverence = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft){
       return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDiverence : -positionDiff
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDiverence : -positionDiff

  
}


const dragstart = (e)=> {
    ifDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e)=> {
    if(!ifDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragstop = () => {
    ifDragStart = false;
    carousel.classList.remove("dragging");
    

}

carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("touchstart", dragstart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragstop);
carousel.addEventListener("mouseleave", dragstop);
carousel.addEventListener("touchend", dragstop);

const fitur = document.querySelectorAll(".fiturlangkah i");
fitur.forEach(ubah => ubah.
  addEventListener("mouseenter" , (e)=>{
    e.target.style.backgroundColor="grey";
  }));
fitur.forEach(ubah => 
  ubah.addEventListener("mouseleave" , (e)=>{
    e.target.style.backgroundColor="white";
  }));









