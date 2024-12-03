document.querySelector(".burger-wrap").addEventListener("click", () => {
    document.querySelector(".header__navigation").classList.toggle("header__navigation--open");
    document.querySelector(".burger").classList.toggle("burger--close");
});
