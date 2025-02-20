function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* Слайдер */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  Array.from(slides).forEach(slide => slide.style.display = "none");
  Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

/* Анімація новинних блоків */
document.querySelectorAll('.articlePDF, .article').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.03)';
      item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
  });
  item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});

/* Кнопка "Вгору" */
function scrollToTop() {
  document.getElementById("topSection").scrollIntoView({ behavior: "smooth" });
}

window.onscroll = function () {
  const button = document.querySelector(".buttonToTop");
  button.style.display = document.documentElement.scrollTop > 100 ? "block" : "none";
};









/* Модальні вікна */
document.addEventListener('DOMContentLoaded', () => {
  const modalButtons = document.querySelectorAll('.js-open-modal');
  const overlay = document.querySelector('.js-overlay-modal');
  const closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(button => {
      button.addEventListener('click', event => {
          event.preventDefault();
          const modalId = button.getAttribute('data-modal');
          const modalElem = document.querySelector(`.modal[data-modal="${modalId}"]`);

          modalElem.classList.add('active');
          overlay.classList.add('active');
      });
  });

  closeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const parentModal = button.closest('.modal');
          parentModal.classList.remove('active');
          overlay.classList.remove('active');
      });
  });

  document.body.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
          const activeModal = document.querySelector('.modal.active');
          if (activeModal) {
              activeModal.classList.remove('active');
              overlay.classList.remove('active');
          }
      }
  });

  overlay.addEventListener('click', () => {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
          activeModal.classList.remove('active');
          overlay.classList.remove('active');
      }
  });
});


/*********************************  overlay menu***********************************/
document.addEventListener("DOMContentLoaded", function () {
  const navMenuItems = [
      { name: "Про нас", link: "aboutUs.html" },
      { name: "Новини", link: "index.html" },
      { name: "Контакти", link: "contacts.html" },
      { name: "Співпраця", link: "cooperation.html" },
      { name: "Діяльність", link: "School_activities.html" },
      { name: "Безпека", link: "security.html" },
      { name: "Вибір підручників", link: "textbook.html" },
      { name: "Педагогічна скарбничка", link: "education.html" },
      { name: "Батькам", link: "parents.html" },
      { name: "Нове про оцінювання", link: "assessment.html" },
      { name: "Прозорість", link: "transparency.html" }

  ];
  
  // Знайти елемент навігаційного меню
  const navMenu = document.querySelector(".overlay-content");
 
  // Очистити поточне меню, якщо воно вже є
  navMenu.innerHTML = "";

  // Динамічно створити пункти меню
  navMenuItems.forEach(item => {
      const menuItem = document.createElement("a");
      menuItem.href = item.link;
      menuItem.textContent = item.name;
      navMenu.appendChild(menuItem);
  });
});



/**************************************logo ********************************/
document.addEventListener('DOMContentLoaded', () => {
    const logoBlock = document.querySelector('.logo');

    if (logoBlock) {
        logoBlock.addEventListener('click', () => {           
            window.location.href = 'http://www.school130.org.ua/index.html';
        });
    }
});