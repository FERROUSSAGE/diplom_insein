const scheme = () => {
    const schema = document.querySelector('.scheme'),
        navWrap = schema.querySelector('.nav-wrap'),
        navList = navWrap.querySelector('.nav-list'),
        schemeSliderSlides = schema.querySelectorAll('.scheme-slider__slide'),
        schemeDescriptionBlock = schema.querySelectorAll('.scheme-description-block'),
        context = navList.children;
    schemeDescriptionBlock[0].classList.add('visible-content-block');
    const clear = () => {
        [...context].forEach((item, i) =>{
            item.classList.remove('active');
            item.dataset.num = i;
            schemeSliderSlides[i].style.display = 'none';
            schemeDescriptionBlock[i].classList.remove('visible-content-block');
        });
    };

    navWrap.addEventListener('click', (e) => {
        const target = e.target;
            
        let buffer = 0,
            navWidth = navList.parentNode.offsetWidth;
        if(target.matches('.scheme-nav__item')){
            clear();
            target.classList.add('active');
            schemeSliderSlides[target.dataset.num].style.display = 'flex';
            schemeDescriptionBlock[target.dataset.num].classList.add('visible-content-block');
        }

        if(target.matches('.nav-arrow_right')){
            buffer = (navList.offsetWidth - navWidth);
            navList.style.transform = `translateX(${-1 * buffer}px)`;
            target.style.display = 'none';
            target.previousElementSibling.style.display = 'block';
        }
        if(target.matches('.nav-arrow_left')){
            buffer = (navList.offsetWidth - navWidth) / (context.length * context.length);
            navList.style.transform = `translateX(${1 * buffer}px)`;
            target.style.display = 'none';
            target.nextElementSibling.style.display = 'block';
        }
    });
};

export default scheme;