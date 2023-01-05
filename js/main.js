// 검색창 요소(.search) 찾기
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
   searchInputEl.focus();
});

//검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
   searchEl.classList.add('focused');
   searchInputEl.setAttribute('placeholder', '통합검색');
});

//검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
   searchEl.classList.remove('focused');
   searchInputEl.setAttribute('placeholder', '');
});

//페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', function () {
   console.log(window.scrollY);
   if (window.scrollY > 500) {
      //badgeEl.style.display = 'none';
      gsap.to(badgeEl, .6, {
         opacity: 0,
         display: 'none'
      });
   } else {
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, .6, {
         opacity: 1,
         display: 'block'
      });
   }
});

//나타탈 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
//요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function(fadeEl, index) {
   gsap.to(fadeEl, 1, {
      delay: (index + 1) * .7,
      opacity:1
   });
});

new Swiper('.notice .swiper', {
   direction: 'vertical',
   autoplay: true,
   loop: true
});

new Swiper('.promotion .swiper', {
   autoplay: true,
   loop: true,
   slidesPerView: 3,
   spaceBetween: 10,
   centeredSlides: true,
   pagination: {
      el: '.promotion .swiper-pagination',
      clickable: true
   },
   navigation: {
      prevEl: '.promotion .swiper-button-prev',
      nextEl: '.promotion .swiper-button-next'
   }
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function() {
   if(promotionEl.classList.contains('hide')) {
      promotionEl.classList.remove('hide');
   } else {
      promotionEl.classList.add('hide');
   }
});