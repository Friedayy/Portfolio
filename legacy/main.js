// ==================== DARK MODE ====================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkModeIcon');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('uil-moon', 'uil-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('uil-sun', 'uil-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Default: dark mode unless user explicitly chose light
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    document.getElementById('darkModeIcon').classList.replace('uil-sun', 'uil-moon');
}

// ==================== BLOB PARALLAX ====================
const blob1 = document.querySelector('.blob-1');
const blob2 = document.querySelector('.blob-2');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blob1.style.transform = `translateY(${scrollY * 0.25}px) translateX(${scrollY * 0.05}px)`;
    blob2.style.transform = `translateY(${-scrollY * 0.2}px) translateX(${-scrollY * 0.05}px)`;
});

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }else{
        menuBtn.className = "nav-menu"
    }
}

// ==================== SCROLL PROGRESS & BACK TO TOP ====================
function updateScrollFeatures() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    
    // Update top progress bar
    const progressBar = document.getElementById('scrollProgressBar');
    if (progressBar) {
        progressBar.style.width = progressPercent + '%';
    }

    // Toggle back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        if (scrollY > 350) {
            backToTopBtn.classList.add('show-back-to-top');
        } else {
            backToTopBtn.classList.remove('show-back-to-top');
        }
    }
}

function headerShadow(){
    const navHeader = document.getElementById("header");
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if(scrollY > 50){
        navHeader.classList.add("header-scrolled");
    } else {
        navHeader.classList.remove("header-scrolled");
    }
}

window.addEventListener('scroll', () => {
    headerShadow();
    updateScrollFeatures();
});

// ==================== PROJECT CARDS ====================
const projectBoxes = document.querySelectorAll(".project-box[data-url]");

projectBoxes.forEach(box => {
    const openProject = () => {
        const url = box.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    box.addEventListener("click", openProject);

    box.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProject();
        }
    });
});

var typingEffect = new Typed(".typedText",{
    strings : ["Designer", "Gamer", "Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000,
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.status-badge',{})
sr.reveal('.featured-text-card',{delay:50})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:150})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.hero-stats',{delay:250})
sr.reveal('.social_icons',{delay:300})
sr.reveal('.featured-image',{delay:300})
sr.reveal('.floating-badge',{delay:400, interval: 150})
sr.reveal('.project-box',{interval: 200})
sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

const sections = document.querySelectorAll(`section[id]`)

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute(`id`);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
