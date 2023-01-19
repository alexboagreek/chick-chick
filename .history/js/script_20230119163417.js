
const addPreload = (elem) => {
    elem.classList.add('preload');
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};

const startSlider = () => {
    addPreload(slider);
};


const initSlider = () => {
    const slider = document.querySelector('.slider');

    addPreload(slider);
    window.addEventListener('load', () =>  {
        startSlider(slider)
    };
    slider.remove();

};

