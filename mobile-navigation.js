const mobileNavToggle = document.getElementsByClassName("main-header__toggle")[0];
const mobileNav = document.getElementsByClassName("main-nav--mobile")[0];

const backdrop = document.getElementsByClassName("backdrop")[0];

mobileNavToggle.addEventListener("click", () => {
    mobileNav.style.display = "block";
    backdrop.style.display = "block";
    setTimeout(() => {
        mobileNav.classList.add("open-mobile-nav");
    }, 10)
})

backdrop.addEventListener("click", () => {
    mobileNav.classList.remove("open-mobile-nav");
    setTimeout(() => {
        mobileNav.style.display = "none";
        backdrop.style.display = "none";
    }, 500)


})


