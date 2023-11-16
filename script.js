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
  
    
    const btn = document.querySelector("#sound"); 
const audio = new Audio("tom-2.mp3"); 

btn.addEventListener("click", () => {
  audio.play();
});
const menuBtn = document.getElementById("menu-btn");
const menuClickSound = document.getElementById("menuClickSound");

menuBtn.addEventListener("click", () => {
    menuClickSound.play();
    
});


    
    document.addEventListener("keypress", (event) => {
      console.log(`Key pressed: ${event.key}`);
    });
  });
  function animateElement() {
    var elem = document.getElementById("animate");
    var positionX = 0;
    var positionY = 0;
    var directionX = 1;
    var directionY = 1;

    var interval = setInterval(frame, 10);

    function frame() {
        if (positionX == 300) {
            directionX = -1;
        } else if (positionX == 0) {
            directionX = 1;
        }

        if (positionY == 300) {
            directionY = -1;
        } else if (positionY == 0) {
            directionY = 1;
        }

        positionX += directionX;
        positionY += directionY;

        elem.style.left = positionX + 'px';
        elem.style.top = positionY + 'px';
    }
}

animateElement();

function addSnakeBorderAnimation() {
  var image = document.querySelector('.image img');

  var borderSize = 2;

  function animateBorder() {
      borderSize += 2; 
      image.style.border = borderSize + 'px solid #3498db';

      
      image.style.transition = 'border 0.5s ease';

      if (borderSize < 20) {
          requestAnimationFrame(animateBorder);
      } else {
          
          setTimeout(function () {
              image.style.border = 'none';
          }, 2000); 
      }
  }

  
  document.addEventListener('DOMContentLoaded', function () {
      animateBorder();
  });
}


addSnakeBorderAnimation();
