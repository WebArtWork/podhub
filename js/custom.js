
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);

///


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousels");
  const prevBtn = document.querySelector(".prev-btns");
  const nextBtn = document.querySelector(".next-btns");

  prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -200, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: 200, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const paginationContainer = document.getElementById("pagination");
  const totalPages = 10; // Змінити на кількість сторінок
  let currentPage = 1;

  function renderPagination() {
      paginationContainer.innerHTML = "";

      for (let i = 1; i <= totalPages; i++) {
          const li = document.createElement("li");
          li.textContent = i;
          li.classList.add(i === currentPage ? "active" : "");

          li.addEventListener("click", () => {
              currentPage = i;
              renderPagination();
              console.log(`Page ${currentPage} clicked`);
          });

          paginationContainer.appendChild(li);
      }
  }

  renderPagination();
});

///

document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", function(event) {
      if (event.target.classList.contains("product-img")) {
          document.querySelectorAll(".product-img").forEach(el => el.classList.remove("active"));
          event.target.classList.add("active");
      } else if (event.target.id == 'toggleButton') {
        let descContainer = document.getElementById("description");
        let toggleButton = document.getElementById("toggleButton");

        if (descContainer.classList.contains("expanded")) {
          descContainer.classList.remove("expanded");
          toggleButton.textContent = "Показати більше";
      } else {
          descContainer.classList.add("expanded");
          toggleButton.textContent = "Показати менше";
      }
      }
  });
});