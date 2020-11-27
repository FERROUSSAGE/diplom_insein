const sliderRepairTypes = () => {
    const navList = document.querySelector('.nav-list-repair'),
        repairItems = document.querySelectorAll('.repair-types-nav__item'),
        repairSlider = document.querySelector('.repair-types-slider'),
        typesSliderItems = repairSlider.querySelectorAll('.types-repair__item'),
        repairCounter = document.getElementById('repair-counter'),
        repairArrowLeft = document.getElementById('repair-types-arrow_left'),
        repairArrowRight = document.getElementById('repair-types-arrow_right'),
        navArrowLeft = document.getElementById('nav-arrow-repair-left_base'),
        navArrowRight = document.getElementById('nav-arrow-repair-right_base');

    let slideWidth = typesSliderItems[0].children[0].offsetWidth,
        count = 0,
        currentSlide = 0,
        countSlides = 3,
        countItem = 0,
        base = 0,
        navListRepairWidth = 0,
        repairWidth = document.querySelector('.repair-types-nav').offsetWidth;

    repairItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            repairItems.forEach((itemR, i) => {
                typesSliderItems[i].style.display = 'none';
                itemR.classList.remove('active');
            });
            typesSliderItems[i].style.display = 'block';
            item.classList.add('active')
        
            countSlides = typesSliderItems[i].children.length;
            repairCounter.children[0].children[0].textContent = 1;
            repairCounter.children[0].children[1].textContent = countSlides;
            count = 0;
            currentSlide = 0;
            base = 0;
            countItem = i;
            typesSliderItems[i].style.cssText = 'will-change: transform;';
        });
    });

    repairArrowRight.addEventListener('click', () => {
        count++; currentSlide--;
        if(count >= countSlides){
            count = 0; currentSlide = 0;
        }
        typesSliderItems[countItem].style.transform = `translateY(${currentSlide * slideWidth}px)`;
        repairCounter.children[0].children[0].textContent = count + 1;
    });
    repairArrowLeft.addEventListener('click', () => {
        count--; currentSlide++;
        if(count < 1){
            count = countSlides; currentSlide = -countSlides;
        }
        typesSliderItems[countItem].style.transform = `translateY(${currentSlide * slideWidth}px)`;
        repairCounter.children[0].children[0].textContent =- currentSlide;
    });


    navArrowRight.addEventListener(`click`, () =>{    
        if (base >= navList.children.length) return;
        base++;
        navListRepairWidth = (navList.offsetWidth - repairWidth) / navList.children.length;
        navList.style.transform = `translateX(-${navListRepairWidth * base}px)`;
    });
    navArrowLeft.addEventListener(`click`, () =>{    
        if (base <= 0) return;
        base--;
        navListRepairWidth = (navList.offsetWidth - repairWidth) / navList.children.length;
        navList.style.transform = `translateX(-${navListRepairWidth * base}px)`;
    });

};

export default sliderRepairTypes;