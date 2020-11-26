const designs = () => {
    const design = document.getElementById('designs'),
        navWrap = design.querySelector('.nav-wrap'),
        navList = navWrap.querySelector('.nav-list'),
        designsSliderWrap = design.querySelector('.designs-slider-wrap'),
        designsSlider = designsSliderWrap.querySelector('.designs-slider'),
        designSliderStyle = [...designsSlider.children],
        previewBlocks = design.querySelectorAll('.preview-block'),
        context = navList.children;


    const clear = () => {
        [...context].forEach((item, i) => {
            item.classList.remove('active');
            item.dataset.num = i;
            designSliderStyle[i].dataset.num = i;
            [...designSliderStyle[i].children].forEach((item, index) => item.dataset.slide_num = index);
            designSliderStyle[i].style.display = 'none';
            previewBlocks[i].classList.remove('visible');
        });
    };

    clear();
    context[0].classList.add('active');
    previewBlocks[0].classList.add('visible');
    designSliderStyle[0].style.display = 'flex';

    navWrap.addEventListener('click', (e) => {
        const target = e.target;

        let buffer = 0,
        navWidth = navList.parentNode.offsetWidth;

        if(target.matches('.designs-nav__item')){
            clear();
            target.classList.add('active');
            designSliderStyle[target.dataset.num].style.display = 'flex';
            previewBlocks[target.dataset.num].classList.add('visible');
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

    previewBlocks.forEach((item, index) => {
        [...item.children].forEach((j, i) => {
            j.dataset.preview_num = i;
        });
        item.addEventListener('click', (e) => {
            const target = e.target;
            [...target.parentNode.parentNode.children].forEach(h => [...h.children].forEach(b => b.classList.remove('preview_active')));
            [...designSliderStyle[index].children].forEach((slide, i) => {
                slide.style.display = 'none';
                if(target.parentNode.dataset.preview_num === slide.dataset.slide_num){
                    target.classList.add('preview_active');
                    slide.style.display = 'block';
                }
            });
        });
    });
};
export default designs;