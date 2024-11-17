
let openNavIcon = document.getElementById('open-nav');

let closeNavIcon = document.getElementById('close-nav');

let sideBar = document.getElementById('sidebar');

let ph1 = document.getElementById('ph-1');

let ph2 = document.getElementById('ph-2');

let ph3 = document.getElementById('ph-3');

let div1 = document.getElementById('div-1');

let div2 = document.getElementById('div-2');

let div3 = document.getElementById('div-3');

let image1 = document.getElementById('image-1');

let image2 = document.getElementById('image-2');

function openNav() {
  
  sideBar.classList.remove('-translate-y-full');
  
  sideBar.classList.add('translate-y-0');
  
  openNavIcon.classList.add('hidden');
  
  closeNavIcon.classList.remove('hidden');

}
function closeNav() {
    
  sideBar.classList.add('-translate-y-full');
    
  sideBar.classList.remove('translate-y-0');
    
  openNavIcon.classList.remove('hidden');
  
  closeNavIcon.classList.add('hidden');

}
function showImage(imageId) {
                                    
  ph1.classList.add("opacity-0");
  
  ph2.classList.add("opacity-0");
  
  ph3.classList.add("opacity-0");
          
  document.getElementById(imageId).classList.remove("opacity-0");
}
function resetImage() {

  showImage("ph-1");

}
window.addEventListener("load", function() {

  showImage("ph-1");

});
function moveRight() {

  image1.classList.toggle('translate-x-[110%]');

  image2.classList.toggle('-translate-x-[100%]');

}
function moveLeft() {

  image1.classList.toggle('translate-x-[110%]');

  image2.classList.toggle('-translate-x-[100%]');

}
