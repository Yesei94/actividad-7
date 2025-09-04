function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll');
  
  animatedElements.forEach(element => {
    if (isElementInViewport(element) && !element.classList.contains('animated')) {
      element.classList.add('animated');
    }
  });
}

function addAnimationClasses() {
  const sectionTitles = document.querySelectorAll('h2');
  sectionTitles.forEach((title, index) => {
    if (index % 2 === 0) {
      title.classList.add('slide-left-on-scroll');
    } else {
      title.classList.add('slide-right-on-scroll');
    }
  });
  
  const articles = document.querySelectorAll('article');
  articles.forEach((article, index) => {
    article.classList.add('animate-on-scroll');
  });
  
  const skillsList = document.querySelectorAll('main section ul');
  skillsList.forEach((list, index) => {
    if (index === 1) {
      list.classList.add('slide-left-on-scroll');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  addAnimationClasses();
  
  setTimeout(() => {
    const quienSoySection = document.querySelector('header section p');
    if (quienSoySection) {
      quienSoySection.classList.add('lazy-loaded');
    }
  }, 500);
  
  window.addEventListener('scroll', handleScrollAnimations);
  
  handleScrollAnimations();
});

let ticking = false;
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(handleScrollAnimations);
    ticking = true;
  }
}

window.addEventListener('scroll', requestTick); 