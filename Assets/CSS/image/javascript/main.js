function menuFunction(){

    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }else{
        menuBtn.classList = "nav-menu"
    }
}
/*--------------------typing effect----------------*/
var typingEffect=new Typed(".typedText",{
    strings: ["Systems Engineer","estudiant",""],
    loop: true,
    typespeed:80,
    backspeed:80,
    backDelay:3000,

});
/*-------------------SCROOL reveal----------------*/
/*------------------Scroll animation--------------*/
const sr=scrollReveal({
origin: "Top",
distance: "80px",
duration:2000,
reset: true
});
/*-----------Home-----------------*/
sr.reveal('.featured-text-card',{});
sr.reveal('.featured-name',{delay:100});
sr.reveal('.featured-text-info',{delay:200});
sr.reveal('.featured-text-btn',{delay:200});
sr.reveal('.featured-image',{delay:300});
/*Headin*/
sr.reveal('.top-header', {});
/*---------ABOUT INFO & CONTACT INFO------------------------------------*/
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});
srLeft.reveal(".about-info",{delay:100});
srLeft.reveal(".contact-info",{delay:100});
/*---------SKILLS & CONTACT FORM------------------------------------*/
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});
srLeft.reveal(".skills-box",{delay:100});
srLeft.reveal(".form-control",{delay:100});
/*---------PROJECTS------------------------------------*/
sr.reveal('.project-box', {interval: 200});


/*-----------------CHANGE ACTIVE LINK------------------------------------ */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

