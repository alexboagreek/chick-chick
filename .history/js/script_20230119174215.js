const addPreload = (elem) => {
    elem.classList.add('preload');
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};

const startSlider = () => {
    const slider
    let activeSlide = 1;

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