const projects = document.querySelectorAll('.project');
const projectImg = document.querySelectorAll('.project img');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];
const projectLinks = document.querySelectorAll('.project-links')
const contactMe = document.querySelector('.project-page');
const contactPageBtn = document.querySelector('.contact-form');
const languages = document.querySelectorAll('.languages-used');
const projectDescription = document.querySelectorAll('p');
const contactForm = document.querySelector('form');


for (let i = 0; i < projects.length; i++) {
    projects[i].style.backgroundColor = rainbow[i];
    projects[i].addEventListener('mouseover', () => {
        projectImg[i].style.opacity = .5;
        projectLinks[i].classList.remove('hideProjectLinks');
        projectLinks[i].classList.add('showProjectLinks');
        languages[i].classList.add('showLanguages');
        projectDescription[i].classList.add('showDescription');
    })
    projects[i].addEventListener('mouseleave', () => {
        projectImg[i].style.opacity = 1;
        projectLinks[i].classList.remove('showProjectLinks');
        projectLinks[i].classList.add('hideProjectLinks');
        languages[i].classList.remove('showLanguages');
        projectDescription[i].classList.remove('showDescription');
    })
}

contactMe.addEventListener('click', function() {
    for (let project of projects) {
        project.classList.remove('project-page1')
        project.classList.remove('project-page2')
        project.classList.add('contact-form1');
        project.classList.add('contact-form2');
    }
    contactMe.classList.remove('back-to-projects1')
    contactPageBtn.classList.remove('back-to-projects2')
    contactMe.classList.add('contact-form-btn');
    contactPageBtn.classList.add('project-page-btn');
    contactForm.classList.add('showForm');
});

contactPageBtn.addEventListener('click', function() {
    for (let project of projects) {
        project.classList.remove('contact-form1');
        project.classList.remove('contact-form2');
        project.classList.add('project-page1')
        project.classList.add('project-page2')
    }
    contactMe.classList.remove('contact-form-btn');
    contactPageBtn.classList.remove('project-page-btn');
    contactMe.classList.add('back-to-projects1')
    contactPageBtn.classList.add('back-to-projects2')
    contactForm.classList.remove('showForm');
  
})