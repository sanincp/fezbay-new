function navClick() {
  var x = screen.width
  if (x <= 951) {
    var navMD = document.getElementById("navMd");
    if (navMD.style.display === "none") {
      navMD.style.display = "block";
    } else {
      navMD.style.display = "none";
    }
  }
  if (x <= 500) {
    var navSM = document.getElementById("navSm");
  if (navSM.style.display === "none") {
    navSM.style.display = "block";
  } else {
    navSM.style.display = "none";
  }
  }
  }
  
  $('.owl-carousel').owlCarousel({
    center: true,

    margin: 0,
    nav: true,
    items: 3,
    smartSpeed: 750,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      641: {
        items: 3
      }
    }
  });
