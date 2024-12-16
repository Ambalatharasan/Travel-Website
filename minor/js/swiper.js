const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
        translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    loop: true,
    direction: "horizontal",
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    spaceBetween: 100,
});

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween:35,
    slidesPerGroup:1,
    loop: true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    loopfillGroupwithBlack:true,
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    //get from swiper js website
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        760: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        }
    }
});

const swiper3 = new Swiper('.swiper4', {
    slidesPerView: 1,
    spaceBetween:95,
    slidesPerGroup:1,
    loop: true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    loopfillGroupwithBlack:true,
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    //get from swiper js website
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        760: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 1,
        }
    }
});
