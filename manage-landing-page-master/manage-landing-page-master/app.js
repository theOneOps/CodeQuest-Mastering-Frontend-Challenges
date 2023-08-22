let burger=document.querySelector('.burger');

let ul=document.querySelector('.navigation');

burger.addEventListener('click',()=>{
    burger.classList.toggle('actived');
    ul.classList.toggle('active_ul');
})