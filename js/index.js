document.querySelector(".burger-wrap").addEventListener("click", () => {
    document.querySelector(".header__navigation").classList.toggle("header__navigation--open");
    document.querySelector(".burger").classList.toggle("burger--close");
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.tugle');
    const descriptionText = document.querySelector('.description-text');
    if (toggleButton && descriptionText) {
        toggleButton.addEventListener('click', () => {
            descriptionText.classList.toggle('expanded');
            toggleButton.textContent = descriptionText.classList.contains('expanded')
                ? 'Показати менше'
                : 'Показати більше';
        });
    }

    const burger = document.querySelector('.products-burger');
    const sidebar = document.querySelector('.products-sidebar');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    if (burger && sidebar && overlay && closeBtn) {
        burger.addEventListener('click', function () {
            sidebar.classList.add('products-sidebar--open');
            overlay.classList.add('active');
            document.body.style.overflowY = 'hidden';
        });

        closeBtn.addEventListener('click', function () {
            sidebar.classList.remove('products-sidebar--open');
            overlay.classList.remove('active');
            document.body.style.overflowY = '';
        });

        overlay.addEventListener('click', function () {
            sidebar.classList.remove('products-sidebar--open');
            overlay.classList.remove('active');
            document.body.style.overflowY = '';
        });
    }

    // Випадаючі меню
    const menuLiquids = document.getElementById('menuLiquids');
    const submenuLiquids = document.getElementById('submenuLiquids');
    const menuDevices = document.getElementById('menuDevices');
    const submenuDevices = document.getElementById('submenuDevices');

    function toggleMenu(menu, submenu) {
        if (menu && submenu) {
            menu.classList.toggle('active');
            submenu.style.display = menu.classList.contains('active') ? 'block' : 'none';
        }
    }

    if (menuLiquids && submenuLiquids) {
        menuLiquids.addEventListener('click', function () {
            toggleMenu(menuLiquids, submenuLiquids);
        });
    }

    if (menuDevices && submenuDevices) {
        menuDevices.addEventListener('click', function () {
            toggleMenu(menuDevices, submenuDevices);
        });
    }

    // Аккордеони
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel) {
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    panel.classList.remove('show');
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                    panel.classList.add('show');
                }
            }
        });
    }

    // Слайдер діапазону цін
    const priceRangeMin = document.getElementById('priceRangeMin');
    const priceRangeMax = document.getElementById('priceRangeMax');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const sliderRange = document.getElementById('sliderRange');

    function updateSlider() {
        if (priceRangeMin && priceRangeMax && sliderRange) {
            const minValue = priceRangeMin.value;
            const maxValue = priceRangeMax.value;
            sliderRange.style.left = `${(minValue / priceRangeMin.max) * 100}%`;
            sliderRange.style.width = `${((maxValue - minValue) / priceRangeMax.max) * 100}%`;

            if (minPriceInput && maxPriceInput) {
                minPriceInput.value = minValue;
                maxPriceInput.value = maxValue;
            }
        }
    }

    if (priceRangeMin && priceRangeMax) {
        priceRangeMin.addEventListener('input', updateSlider);
        priceRangeMax.addEventListener('input', updateSlider);
    }

    if (minPriceInput) {
        minPriceInput.addEventListener('input', function () {
            const minValue = Math.min(parseInt(minPriceInput.value), parseInt(maxPriceInput.value));
            if (priceRangeMin) priceRangeMin.value = minValue;
            updateSlider();
        });
    }

    if (maxPriceInput) {
        maxPriceInput.addEventListener('input', function () {
            const maxValue = Math.max(parseInt(minPriceInput.value), parseInt(maxPriceInput.value));
            if (priceRangeMax) priceRangeMax.value = maxValue;
            updateSlider();
        });
    }

    // Ініціалізація слайдера
    updateSlider();
});


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
