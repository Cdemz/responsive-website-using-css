 /* function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

 
  function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } */
   const icon = document.querySelector(".icon")
   const navMenu = document.querySelector(".nav-menu")

   icon.addEventListener ("click", mobileMenu) ;

   function mobileMenu() {
    icon.classList.toggle("active")
    navMenu.classList.toggle("active")
   }
