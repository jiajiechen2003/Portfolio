const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

const startSlide = () => {
    const firstBox = document.querySelector('.slider .box:first-child');
    slider.appendChild(firstBox);
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';
    setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
    }, 50);
};

const autoSlide = () => {
    const firstBoxWidth = document.querySelector('.slider .box').offsetWidth;
    const marginRight = parseFloat(getComputedStyle(document.querySelector('.box')).marginRight);
    const totalWidth = (firstBoxWidth + marginRight) * 1;
    slider.style.transform = `translateX(-${totalWidth}px)`;
    setTimeout(startSlide, 500);
};


setInterval(autoSlide, 2500);
