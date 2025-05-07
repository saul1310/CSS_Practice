
const menuBtn = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-button');
const overlay = document.getElementById('overlay');



menuBtn.addEventListener('click',()=>{
    sidebar.classList.add('active');
    overlay.classList.add('active');




});


closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active')
    overlay.classList.remove('active')






});