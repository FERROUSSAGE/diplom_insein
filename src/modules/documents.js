const documents = (windowWidth) => {
    const transparencySlider = document.querySelector('.transparency-slider'),
        transparencyItems = transparencySlider.querySelectorAll('.transparency-item'),
        transparencyArrowLeft = document.querySelector('#transparency-arrow_left'),
        transparencyArrowRight = document.querySelector('#transparency-arrow_right'),


        popupTransparency = document.querySelector('.popup-transparency'),
        closePopup = popupTransparency.querySelector('.close'),
        popupDialogTransparency = popupTransparency.querySelector('.popup-dialog-transparency'),
        transparencyPopupSlider = document.querySelector('.popup-transparency-slider'),
        transparencyPopupSlides = transparencyPopupSlider.querySelectorAll('.popup-transparency-slider__slide'),
        transparencyCounter = popupDialogTransparency.querySelector('#transparency-popup-counter'),
        transparencyLeft = popupDialogTransparency.querySelector('#transparency_left'),
        transparencyRight = popupDialogTransparency.querySelector('#transparency_right'),
        closePopupDialog = popupDialogTransparency.querySelector('.close');
 
    let count = 0,
        numberPopupSlide = 0,
        countSlides = transparencyItems.length - 1;

    const enabled = (index = 0) => {
        transparencyItems.forEach((item, i) => {
            item.children[0].addEventListener('click', () => {
                popupTransparency.style.visibility = 'visible';
                transparencyPopupSlides[i].style.display = 'flex';
                [...transparencyPopupSlides[i].children].forEach((item) => item.style.display = 'block');
                numberPopupSlide = i;
            });
            if(windowWidth <= 1090){
                item.style.display = 'none';
            } else {
                item.style.display = 'flex';
            }
            transparencyPopupSlides[i].style.display = 'none';
            transparencyCounter.children[0].children[0].textContent = 1;
            transparencyCounter.children[0].children[1].textContent = transparencyPopupSlides[i].children.length;
        });
        transparencyItems[index].style.display = 'flex';
    };

    const listeners = () => {
        transparencyArrowLeft.addEventListener('click', () => {
            count--;
            if(count < 0){
                count = countSlides;
            }
            enabled(count);
        });
        transparencyArrowRight.addEventListener('click', () => {
            count++;
            if(count > countSlides){
                count = 0;
            }
            enabled(count);
        });

        transparencyLeft.addEventListener('click', () => {
            transparencyPopupSlides[numberPopupSlide].children[0].style.display = 'block';
            transparencyPopupSlides[numberPopupSlide].children[1].style.display = 'none';
            transparencyCounter.children[0].children[0].textContent = 1;
        });
        transparencyRight.addEventListener('click', () => {
            transparencyPopupSlides[numberPopupSlide].children[0].style.display = 'none';
            transparencyPopupSlides[numberPopupSlide].children[1].style.display = 'block';
            transparencyCounter.children[0].children[0].textContent = 2;
        });

        closePopup.addEventListener('click', () => {
            popupTransparency.style.visibility = 'hidden';
            transparencyCounter.children[0].children[0].textContent = 1;
            [...transparencyPopupSlides[numberPopupSlide].children].forEach((item) => item.style.display = 'none');
        });
        closePopupDialog.addEventListener('click', () => {
            popupTransparency.style.visibility = 'hidden';
            transparencyCounter.children[0].children[0].textContent = 1;
            [...transparencyPopupSlides[numberPopupSlide].children].forEach((item) => item.style.display = 'none');
        });
    }

    enabled();
    listeners();
};
export default documents;