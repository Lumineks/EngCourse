let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {

        },
        630: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 2,

        },
        1260: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        }
    }

})

document.querySelector('.preview__link').addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('.try').scrollIntoView({
        behavior: 'smooth'
    });
});

let links = document.querySelectorAll('.header__link');

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        let id = links[i].getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__list').classList.toggle('active');
});

document.querySelector('.header__menu').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__list').classList.toggle('active');
});