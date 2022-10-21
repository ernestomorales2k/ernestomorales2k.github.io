window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    while (currScrollPos2 > 0) {
      document.getElementById('siteHeader').style.opacity = 1;
    }
  }
);
