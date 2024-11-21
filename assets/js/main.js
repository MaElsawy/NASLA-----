
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

let btn1 = document.getElementById('btn-1');

let btn2 = document.getElementById('btn-2');

let btn3 = document.getElementById('btn-3');

let content1 = document.getElementById('content-1');

let content2 = document.getElementById('content-2');

let content3 = document.getElementById('content-3');

let services = [
        
  document.getElementById('services-div-1'),
      
  document.getElementById('services-div-2'),
      
  document.getElementById('services-div-3'),
  
];

function openNav() {
  
  sideBar.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
  
  sideBar.classList.add('translate-y-0', 'opacity-100');

  openNavIcon.classList.add('hidden');
  
  closeNavIcon.classList.remove('hidden');

}

function closeNav() {
    
  sideBar.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
    
  sideBar.classList.remove('translate-y-0','opacity-100');

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

function showFirst(contentId) {

  content1.classList.remove('hidden');

  content2.classList.add('hidden');

  content3.classList.add('hidden');

  btn1.classList.add('bg-primary');

  btn1.classList.add('text-white');

  btn2.classList.remove('bg-primary');

  btn2.classList.remove('text-white');

  btn3.classList.remove('bg-primary');

  btn3.classList.remove('text-white');

  document.getElementById(contentId).classList.remove('opacity-0');

}


function showSecond(contentId) {

  content2.classList.remove('hidden');

  content1.classList.add('hidden');

  content3.classList.add('hidden');

  btn2.classList.add('bg-primary');

  btn2.classList.add('text-white');

  btn1.classList.remove('bg-primary');

  btn1.classList.remove('text-white');

  btn3.classList.remove('bg-primary');

  btn3.classList.remove('text-white');

  document.getElementById(contentId).classList.remove('opacity-0');

}

function showThird(contentId) {

  content1.classList.add('hidden');

  content2.classList.add('hidden');

  content3.classList.remove('hidden');

  btn3.classList.add('bg-primary');

  btn3.classList.add('text-white');

  btn1.classList.remove('bg-primary');

  btn1.classList.remove('text-white');

  btn2.classList.remove('bg-primary');

  btn2.classList.remove('text-white');

  document.getElementById(contentId).classList.remove('opacity-0');

}

let currentIndex = 0;

function updateServices() {

  services.forEach((service, index) => {
        
    service.classList.add('scale-90');
        
    setTimeout(() => {
            
      service.style.order = (index + 3 - currentIndex) % 3;
            
      service.classList.remove('scale-90');
        
    }, 500);
    
  });
}

function nextImags() {
    
  currentIndex = (currentIndex + 1) % 3;
    
  updateServices();
}

function previosImags() {
    
  currentIndex = (currentIndex + 2);
    
  updateServices();
}

updateServices();


let worksph1 = document.getElementById('works-ph-1');

let worksph2 = document.getElementById('works-ph-2');

let Worksphmini1 = document.getElementById('Works-ph-mini-1');

let Worksphmini2 = document.getElementById('Works-ph-mini-2');


function activeLeft() {

  Worksphmini1.classList.add('border-4', 'border-green-700');

  Worksphmini2.classList.remove('border-4', 'border-green-700');

  worksph1.classList.remove('hidden');

  worksph2.classList.add('hidden');

}

function activeRight() {

  Worksphmini1.classList.remove('border-4', 'border-green-700');

  Worksphmini2.classList.add('border-4', 'border-green-700');

  worksph1.classList.add('hidden');

  worksph2.classList.remove('hidden');

}

function leftImage() {

  Worksphmini1.classList.add('border-4', 'border-green-700');

  Worksphmini2.classList.remove('border-4', 'border-green-700');

  worksph1.classList.remove('hidden');

  worksph2.classList.add('hidden');

}

function rightImage() {

  Worksphmini1.classList.remove('border-4', 'border-green-700');

  Worksphmini2.classList.add('border-4', 'border-green-700');

  worksph1.classList.add('hidden');

  worksph2.classList.remove('hidden');

}