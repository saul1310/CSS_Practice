
const menuBtn = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-button');
const overlay = document.getElementById('overlay');
const navbarTexts = document.querySelectorAll('nav-bar-text');
const testelement = document.getElementById('nav-bar-text1')
const navBar = document.getElementById("navbar");


menuBtn.addEventListener('click',()=>{
    sidebar.classList.add('active');
    overlay.classList.add('active');

   




});


closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active')
    overlay.classList.remove('active')






});



navBar.addEventListener('mouseover' , () => {
     navBar.classList.add("navbargrey")
      testelement.classList.add("black")
      navbarTexts.forEach(el => el.classList.add('black'));
      




});

navBar.addEventListener('mouseleave', () => {
     navBar.classList.remove('navbargrey');
      testelement.classList.remove("black")
    



})




const triggerPoint = 120; 
 window.addEventListener("scroll", function () {
    

    if (window.scrollY > triggerPoint) {
      navBar.classList.add("sticky");
      navBar.classList.add("navbargrey")
      testelement.classList.add("black")
      navbarTexts.forEach(el => el.classList.add('black'));
      
      
    } else {
      navBar.classList.remove("sticky");  
      navBar.classList.remove('navbargrey');

      
    }
  });


