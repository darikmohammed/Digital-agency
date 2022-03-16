const mobileMenu = document.getElementById('mobile-menu'); 
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click' , ()=>{
    nav.classList.add('open-menu'); 
})
closeBtn.addEventListener('click' , ()=>{
    nav.classList.remove('open-menu'); 
})

//modal

const modalServices = document.getElementById('modal-services');
const servicesBtn = document.getElementById('services-btn'); 
const closeModalBtn = document.getElementById('modal-close'); 

servicesBtn.onclick = ()=>{
    modalServices.style.display="flex"; 
}
closeModalBtn.onclick = ()=>{
    modalServices.style.display = "none"; 
}