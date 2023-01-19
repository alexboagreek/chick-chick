
const addPreload = (elem) => {
    elem.classList.radd('preload');
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};


const initSlider = () => {
    const slider = document.querySelector('.slider');
    window.addEventListener('load', initSlider);
    slider.remove();

};

