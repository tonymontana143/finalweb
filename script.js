document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".navbar");
  

    menu.addEventListener("click", () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    });
  
    
    window.addEventListener("scroll", () => {
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");
    });
  
    
    const homeSection = document.querySelector(".home");
    homeSection.addEventListener("mouseover", () => {
      homeSection.style.backgroundColor = "#f0f0f0";
    });
  
    
    homeSection.addEventListener("mouseout", () => {
      homeSection.style.backgroundColor = "transparent";
    });
  
    
    const btn = document.querySelector("sound");
    const audio = new Audio("tom-2.mp3"); 
    btn.addEventListener("click", () => {
      audio.play();
    });
  
    
    document.addEventListener("keypress", (event) => {
      console.log(`Key pressed: ${event.key}`);
    });
  });
  