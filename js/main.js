const mainContent = document.querySelector("main");
const navLink = document.querySelectorAll('[data-role="nav-link"]');
const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navLink.forEach(n => {
  n.addEventListener("click", () => {
    // chargeContent(n.id);
    updateAttribute(n);
    closeMobileMenu();
  });
});

navToggle.addEventListener('click', () => {
  const visibility = navigation.getAttribute('data-visible');

  if (visibility === 'false') {
    navigation.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    navigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

let timer = null;
window.addEventListener('resize', function () {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  } else {
    document.body.classList.add('stop-transition');
  }
  timer = setTimeout(() => {
    document.body.classList.remove('stop-transition');
    timer = null;
  }, 100);
});

// function chargeContent(contentId) {
//   let urlContent = '';
//   switch (contentId) {
//     case "nav-home":
//       urlContent = "../views/home.html"
//       break;
//     case "nav-projects":
//       urlContent = "../views/projects.html"
//       break;
//     case "nav-news":
//       urlContent = "../views/news.html"
//       break;
//     case "nav-about-us":
//       urlContent = "../views/about-us.html"
//       break;
//     case "nav-contact":
//       urlContent = "../views/contact.html"
//       break;
//     case "nav-admin":
//       urlContent = "../views/admin.html"
//       break;
//   }

//   fetch(urlContent)
//     .then(resp => {
//       if (resp.ok) {
//         return resp.text();
//       } else {
//         throw ("Error");
//       }
//     })
//     .then(html => {
//       mainContent.innerHTML = html;
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     })
//     .catch(error => {
//       console.error(error);
//       mainContent.innerHTML = '<div class="content-error">Error cargando contenido</div>';
//     });
// };

function updateAttribute(element) {
  navLink.forEach((n) => {
    n.setAttribute('data-status', '');
  });
  if (element.id !== 'nav-home') {
    element.setAttribute('data-status', 'active');
  }
}

function closeMobileMenu() {
  const visibility = navigation.getAttribute('data-visible');

  if (visibility === 'true') {
    navigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
}

// chargeContent("nav-home");