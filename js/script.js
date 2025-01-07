// Smooth Scrolling Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Sticky Header Effect
window.onscroll = function () {
    stickyHeader();
};

var header = document.querySelector('header');
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// CTA Button Hover Animation
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseover', function () {
    ctaButton.style.transform = "scale(1.1)";
    ctaButton.style.transition = "transform 0.3s ease-in-out";
});

ctaButton.addEventListener('mouseout', function () {
    ctaButton.style.transform = "scale(1)";
});

// Dropdown Menu Hover Effect
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function () {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', function () {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });
});

// About Section Title Underline Animation
const aboutTitle = document.querySelector('#about h2');
aboutTitle.addEventListener('mouseover', function () {
    aboutTitle.classList.add('underline-animation');
});
aboutTitle.addEventListener('mouseout', function () {
    aboutTitle.classList.remove('underline-animation');
});

