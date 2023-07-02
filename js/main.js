import { readJSONFile } from '../utils/common.js';

const mainContent = document.querySelector("main");
const navLink = document.querySelectorAll('[data-role="nav-link"]');
const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navAdmin = document.getElementById("nav-admin");

const userActionContainer = document.getElementById("user-action");
const loginAction = document.getElementById("login");
const logoutAction = document.getElementById("logout");
const signUpAction = document.getElementById("sign-up");

navLink.forEach(n => {
  n.addEventListener("click", () => {
    updateAttribute(n);
    closeMobileMenu();
  });
});

if (logoutAction) {
  logoutAction.addEventListener('click', () => {
    localStorage.removeItem('logged-user');
  });
}

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

function checkLoggedUser() {
  const user = readJSONFile('logged-user');
  if (user) {
    if (user?.role?.name === 'admin') {
      navAdmin?.setAttribute('data-visible', true);
    } else {
      navAdmin?.setAttribute('data-visible', false);
    }
    if (loginAction) loginAction.classList.add('invisible');
    if (signUpAction) signUpAction.classList.add('invisible');
    if (logoutAction) logoutAction.classList.remove('invisible');
    if (userActionContainer) userActionContainer.classList.add('user-action-simple');
  } else {
    if (loginAction) loginAction.classList.remove('invisible');
    if (signUpAction) signUpAction.classList.remove('invisible');
    if (userActionContainer) userActionContainer.classList.remove('user-action-simple');
    if (logoutAction) logoutAction.classList.add('invisible');
  }
}

checkLoggedUser();