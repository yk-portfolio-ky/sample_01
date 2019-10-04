class ScrollFade {
    constructor() {
        this.ANIMATION_CLASS = 'is-animation';

        let $section = document.querySelectorAll('.js-scroll-fade:not(.is-animation), .slide-in-left:not(.is-animation), .slide-in-right:not(.is-animation)');
        if($section.length === null) {
            return;
        }
        let controller = new ScrollMagic.Controller();
        for(let i = 0; i < $section.length; i++) {
            let scene = new ScrollMagic.Scene({
                triggerElement: $section[i],
                triggerHook: 'onEnter',
                reverse: false,
                offset: 100
            })
                .addTo(controller);
            scene.on('enter', ()=>{
                $section[i].classList.add(this.ANIMATION_CLASS);
            });
            scene.on('end', ()=>{
                scene.destroy(true);
            });
        }
    }
}

new ScrollFade();

document.addEventListener('DOMContentLoaded', () => {
  const scroller = new SweetScroll({/* some options */});
}, false);

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
