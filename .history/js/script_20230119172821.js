const addPreload = (elem) => {
    elem.classList.add('preload');
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};

const startSlider = (slider) => {
    removePreload(slider);

    const sliderContainer = document.querySelector('.slider__container');
    sliderContainer.style.display = ''
};


const initSlider = () => {
    const slider = document.querySelector('.slider');

    addPreload(slider);
    window.addEventListener('load', () =>  {
        startSlider(slider);
    });
};

window.addEventListener('DOMContentLoaded', initSlider);

initSlider();