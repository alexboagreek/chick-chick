const addPreload = (elem) => {
    elem.classList.add('preload');
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};

const startSlider = (slider) => {
    removePreload(slider);

    const 
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