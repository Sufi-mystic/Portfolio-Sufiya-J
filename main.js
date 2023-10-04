//SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('toggle-btn'),
      navClose = document.getElementById('nav-close')

if(navToggle){

    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })

}

if(navClose){

    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })

}

//REMOVE MOBILE MENU
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction))

//SHADOW HEADER
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader);

/*===================MAIL JS=======================*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_bidbh4a','template_mbc0thf','#contact-form','YoHgkiEM2nY-y3OlX')
    .then(() => {
         // Show sent message
         contactMessage.textContent = 'Message sent successfully ✅';

         // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000);

         // Clear input fields
         contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 350 viewport height
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav-menu a[href*='+ sectionId +']')

              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
//const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
//const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
//const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    //themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate or deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove dark/icon theme
    document.body.classList.toggle(darkTheme)
    //themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    //localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //Animations repeat
})

sr.reveal(`.home-perfil , .about-image, .contact-mail`, {origin: 'right'})
sr.reveal(`.home-name, .home-info,
            .about-container .section__title-1,
            .contact-social, .contact-data`, {origin: 'left'})
sr.reveal(`.services-card, .projects-card`, {interval: 100})

