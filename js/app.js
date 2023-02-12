const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');
// Add Fixed Class To Navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});
// Show Sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
  document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  document.body.style.overflow = 'visible';
});
// Smooth Scoll
const scrollLink = document.querySelector('.scroll-link');
if (window.location.pathname === '/index.html') {
  scrollLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position - navHeight + 5,
    });
  });
}
// Set Year
date.innerHTML = new Date().getFullYear();

// MailChip
if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/newsletter.html'
) {
  (function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
    fnames[5] = 'BIRTHDAY';
    ftypes[5] = 'birthday';
  })(jQuery);
  var $mcj = jQuery.noConflict(true);
}

// Newsletter Tabs
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
about?.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
