window.addEventListener('scroll', function() {
    var nav = document.getElementById('main-nav');
    if (window.scrollY > 0) {
      nav.classList.add('nav-down');
    } else {
      nav.classList.remove('nav-down');
    }
  });