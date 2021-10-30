/*
 *
 */
(function() {

  function init() {
    var html = document.querySelector('html');
    html.classList.add('js-enabled');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();