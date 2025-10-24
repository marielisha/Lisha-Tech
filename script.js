// scripts.js — simple site scripts for Lisha Tech

// Set current year in footer
(function setYear(){
  var yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();
})();

// Small enhancement: smooth scroll for same-page links (works in modern browsers)
(function smoothScroll(){
  if (!('querySelectorAll' in document)) return;
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(a){
    a.addEventListener('click', function(e){
      var hash = a.getAttribute('href');
      if (hash.length > 1) {
        var target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();

// Placeholder for future interactivity (quote form, product filter, etc.)
var LishaTech = {
  version: '1.0',
  init: function(){ /* future init code */ }
};
window.LishaTech = LishaTech;