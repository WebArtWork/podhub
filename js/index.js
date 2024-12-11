 // Отримуємо елементи меню
 const menuLiquids = document.getElementById('menuLiquids');
 const submenuLiquids = document.getElementById('submenuLiquids');

 const menuDevices = document.getElementById('menuDevices');
 const submenuDevices = document.getElementById('submenuDevices');

 // Функція для перемикання активного класу і показу підменю
 function toggleMenu(menu, submenu) {
     menu.classList.toggle('active');
     if (menu.classList.contains('active')) {
         submenu.style.display = 'block';
     } else {
         submenu.style.display = 'none';
     }
 }

 // Додаємо обробники подій для відкриття/закриття меню
 menuLiquids.addEventListener('click', function() {
     toggleMenu(menuLiquids, submenuLiquids);
 });

 menuDevices.addEventListener('click', function() {
     toggleMenu(menuDevices, submenuDevices);
 });
document.querySelector(".burger-wrap").addEventListener("click", () => {
    document.querySelector(".header__navigation").classList.toggle("header__navigation--open");
    document.querySelector(".burger").classList.toggle("burger--close");
});
var acc = document.getElementsByClassName("accordion");
        for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                var arrow = this.querySelector(".arrow");

                // Динамічне відкриття/закриття панелі з урахуванням висоти контенту
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    panel.classList.remove("show");
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px"; // Динамічне встановлення висоти
                    panel.classList.add("show");
                }
            });
}





//////

const priceRangeMin = document.getElementById('priceRangeMin');
        const priceRangeMax = document.getElementById('priceRangeMax');
        const minPriceInput = document.getElementById('minPrice');
        const maxPriceInput = document.getElementById('maxPrice');
        const sliderRange = document.getElementById('sliderRange');

        // Функція для оновлення слайдера та інпутів
        function updateSlider() {
            const minValue = priceRangeMin.value;
            const maxValue = priceRangeMax.value;

            // Оновлення положення лінії між точками
            sliderRange.style.left = `${(minValue / priceRangeMin.max) * 100}%`;
            sliderRange.style.width = `${((maxValue - minValue) / priceRangeMax.max) * 100}%`;

            // Оновлення значень інпутів
            minPriceInput.value = minValue;
            maxPriceInput.value = maxValue;
        }

        // Обробники подій для змін у слайдерах та інпутах
        priceRangeMin.addEventListener('input', updateSlider);
        priceRangeMax.addEventListener('input', updateSlider);

        minPriceInput.addEventListener('input', function() {
            const minValue = Math.min(parseInt(minPriceInput.value), parseInt(maxPriceInput.value));
            priceRangeMin.value = minValue;
            updateSlider();
        });

        maxPriceInput.addEventListener('input', function() {
            const maxValue = Math.max(parseInt(minPriceInput.value), parseInt(maxPriceInput.value));
            priceRangeMax.value = maxValue;
            updateSlider();
        });

        // Початкове оновлення слайдера
        updateSlider();


        ////////////
        document.addEventListener('DOMContentLoaded', function () {
            const burger = document.querySelector('.products-burger');
            const sidebar = document.querySelector('.products-sidebar');
            const overlay = document.querySelector('.overlay');
            const closeBtn = document.querySelector('.close-btn');
          
            // Открываем сайдбар и затемняющий блок
            burger.addEventListener('click', function () {
              sidebar.classList.add('products-sidebar--open');
              overlay.classList.add('active');
            });
          
            // Закрываем сайдбар и затемняющий блок при клике на крестик
            closeBtn.addEventListener('click', function () {
              sidebar.classList.remove('products-sidebar--open');
              overlay.classList.remove('active');
            });
          
            // Закрываем сайдбар и затемняющий блок при клике на затемняющий блок
            overlay.addEventListener('click', function () {
              sidebar.classList.remove('products-sidebar--open');
              overlay.classList.remove('active');
            });
          });