const elHamburgerBtn = document.querySelector("#hamburger");
const elNavigation = document.querySelector("#navigation");
const elDetails = document.querySelectorAll("#faq__details");

function menuBtnFunction(menuBtn) {
   menuBtn.classList.toggle("active");
   document.body.classList.toggle("unscroll");
   elNavigation.classList.toggle("hidden");
   elNavigation.classList.toggle("flex");
}

elDetails.forEach((details) => {
   details.addEventListener("toggle", () => {
      if (details.open) {
         elDetails.forEach((det) => {
            if (det !== details) {
               det.removeAttribute("open");
            }
         });
      }
   });
});






$('.responsive-slick').slick({
   dots: false,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 4,
   autoplay: true,
   autoplaySpeed: 5000,
   arrows: true,
   responsive: [
      {
         breakpoint: 1250,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
         }
      },
      {
         breakpoint: 958,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 5000,
         }
      },
      {
         breakpoint: 640,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            infinite: true
         }
      }
   ]
});