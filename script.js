document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to my website!');
});

/*Parallax top*/
document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var parallax = document.querySelector('.parallax');

    // Adjust the scale value as needed based on the scroll position
    // For example, starting at 100% and increasing by a factor of the scroll position
    var scale = 100 + scrollPosition / 80; // Adjust this formula as needed

    parallax.style.backgroundSize = `${scale}% auto`;
});

/*Parallax bottom*/
document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var parallaxBottom = document.querySelector('.parallax-bottom');

    // Adjust the scale value as needed based on the scroll position
    var scale = 100 + scrollPosition / 80; // Adjust this formula as needed

    parallaxBottom.style.backgroundSize = `${scale}% auto`;
});

/*Animated squares */
document.addEventListener('DOMContentLoaded', () => {
    const aboutBlurb = document.querySelector('.blurb-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutBlurb.style.animation = 'fadeInDrop 3s forwards';
            } else {
                aboutBlurb.style.animation = 'fadeOutRise 3s forwards';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutBlurb);
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutPic = document.querySelector('#about-pic');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutPic.style.animation = 'fadeInDrop 3s forwards .5s';
            } else {
                aboutPic.style.animation = 'fadeOutRise 3s forwards .5s';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutPic);
});

/*Floating Menu*/
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.floating-menu .menu-item');

    function highlightCurrentSection() {
        let scrollPosition = window.pageYOffset;
        menuItems.forEach(item => {
            let section = document.querySelector(item.getAttribute('href'));
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection(); // Highlight the current section on page load
});

/*Ham Menu*/
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});