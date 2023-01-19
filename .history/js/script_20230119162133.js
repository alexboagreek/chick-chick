
const addPreload = (elem) => {
    elem.classList.add('preload');
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};


const initSlider = () => {
    const slider = document.querySelector('.slider');

    addPreload();
    window.addEventListener('load', startSlider);
    slider.remove();

};

