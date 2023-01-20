const addPreload = (elem) => {
    elem.classList.add('preload');
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};

const startSlider = () => {
    const sliderItems = document.querySelectorAll('.slider__item');
    const sliderList = document.querySelector('.slider__list');
    const btnPrevSlide = document.querySelector('.slide__arrow_left');
    const btnNextSlide = document.querySelector('.slide__arrow_right');

    let activeSlide = 1;
    let position = 0;

    const checkSlider = () => {
        if (activeSlide + 2 === sliderItems.length) {
            btnNextSlide.style.display = 'none';
        } else {
            btnNextSlide.style.display = '';
        }

        if (activeSlide === 1) {
            btnPrevSlide.style.display = 'none';
        } else {
            btnPrevSlide.style.display = '';
        } 
    };

    checkSlider();

    const nextSlide = () => {
        sliderItems[activeSlide].classList.remove('slider__item_active'); 
        position = -sliderItems[0].clientWidth * activeSlide;

        sliderList.style.transform =`translateX(${position}px)`;

        activeSlide += 1;
        sliderItems[activeSlide].classList.add('slider__item_active'); 

        checkSlider();
    };

    const prevSlide = () => {
        sliderItems[activeSlide].classList.remove('slider__item_active'); 
        position = sliderItems[0].clientWidth * (activeSlide - 2);

        sliderList.style.transform =`translateX(${position}px)`;

        activeSlide -= 1;
        sliderItems[activeSlide].classList.add('slider__item_active'); 

        checkSlider();
    };

    btnPrevSlide.addEventListener('click', prevSlide);
    btnNextSlide.addEventListener('click', nextSlide);

    window.addE

};


const initSlider = () => {
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');

    sliderContainer.style.display = 'none';
    addPreload(slider);
    
    window.addEventListener('load', () =>  {
        sliderContainer.style.display = '';
        removePreload(slider); 

        startSlider();
    });
};

window.addEventListener('DOMContentLoaded', initSlider);

initSlider();