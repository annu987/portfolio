// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill Modal Logic (Existing, but styled for new theme)
const skillCards = document.querySelectorAll('.skill-card');
const skillModal = document.getElementById('skillModal');
const modalSkillTitle = document.getElementById('modalSkillTitle');
const modalSkillDescription = document.getElementById('modalSkillDescription');
const skillModalCloseBtn = skillModal.querySelector('.modal-close-btn'); // Specific to skill modal

const skillDescriptions = {
    "C": {
        title: "C Programming",
        description: "<p>My foundational understanding of C programming allows me to grasp core computing concepts, memory management, and data structures. It provides a solid base for low-level system programming and efficient algorithm implementation, crucial for understanding how software interacts with hardware.</p>"
    },
    "Java": {
        title: "Java Programming",
        description: "<p>Proficient in Java, I can develop robust, object-oriented applications suitable for various platforms. My skills include working with Java's extensive libraries and frameworks, enabling me to build scalable and maintainable software solutions, from enterprise systems to Android applications.</p>"
    },
    "HTML": {
        title: "HTML5",
        description: "<p>I master HTML5 to structure the content of web pages effectively and semantically. My expertise ensures that websites are well-organized, accessible, and ready to be styled and made interactive, forming the backbone of any web project.</p>"
    },
    "CSS": {
        title: "CSS3",
        description: "<p>Using CSS3, I design visually appealing and responsive user interfaces, transforming raw HTML into engaging web experiences. I am skilled in creating layouts, applying styles, and implementing animations to ensure a consistent and attractive look across devices.</p>"
    },
    "JavaScript": {
        title: "JavaScript",
        description: "<p>My JavaScript skills bring interactivity and dynamic functionality to web pages, enabling rich user experiences. I am capable of implementing complex client-side logic, handling events, and interacting with APIs to build modern, responsive web applications.</p>"
    },
    "GitHub": {
        title: "GitHub & Version Control",
        description: "<p>I effectively utilize GitHub for version control and collaborative development. My proficiency includes branching, merging, pull requests, and managing repositories, ensuring efficient teamwork and organized project history, essential for professional software development.</p>"
    },
    "VS Code": {
        title: "VS Code (Integrated Development Environment)",
        description: "<p>I leverage Visual Studio Code as my primary IDE, utilizing its powerful features for efficient coding, debugging, and project management. Its extensive ecosystem of extensions and integrated terminal significantly boosts my development workflow across various programming languages.</p>"
    }
};

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        const skillName = card.dataset.skill;
        const skillInfo = skillDescriptions[skillName];
        if (skillInfo) {
            modalSkillTitle.textContent = skillInfo.title;
            modalSkillDescription.innerHTML = skillInfo.description;
            skillModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }
    });
});

skillModalCloseBtn.addEventListener('click', () => {
    skillModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close skill modal if clicked outside content
skillModal.addEventListener('click', (e) => {
    if (e.target === skillModal) {
        skillModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// New Photo Modal Logic
const profilePhotoContainer = document.getElementById('profilePhotoContainer');
const photoModal = document.getElementById('photoModal');
const photoModalCloseBtn = document.getElementById('photoModalCloseBtn');
const modalPhotoImage = document.getElementById('modalPhotoImage');

profilePhotoContainer.addEventListener('click', () => {
    modalPhotoImage.src = profilePhotoContainer.querySelector('.profile-photo').src;
    photoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

photoModalCloseBtn.addEventListener('click', () => {
    photoModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close photo modal if clicked outside content
photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
function animateName(el) {
  el.classList.add('clicked');
  setTimeout(() => {
    el.classList.remove('clicked');
  }, 400);
}
function animateName(element) {
  element.classList.add('animate');
  setTimeout(() => {
    element.classList.remove('animate');
  }, 400); // Match with animation duration
}
