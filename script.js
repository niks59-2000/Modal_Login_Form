let loginLink=document.getElementById('login');
let modal=document.querySelector('.modal');
let overlay=document.querySelector('.overlay');
// let hidden=document.querySelector('.hidden');
let close=document.querySelector('.close');

loginLink.addEventListener('click',function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
close.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
