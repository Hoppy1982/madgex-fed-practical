/*
 *
 */
(function() {

  function navInit() {
    var nav = document.querySelector('nav');
    var navButton =  document.querySelector('#main-nav-toggle');
    nav.classList.add('js-closed');

    function navToggle() {
      nav.classList.toggle('js-closed');
    }
  
    navButton.addEventListener('click', navToggle);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', navInit);
  } else {
    navInit();
  }

})();
