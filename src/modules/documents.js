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

    popupTransparency.addEventListener('click', (e) => {
        if (e.target === popupTransparency){
            popupTransparency.style.visibility = 'hidden';
        }
    });
    popupDialogTransparency.addEventListener('click', (e) => {
        if (e.target === popupDialogTransparency){
            popupDialogTransparency.style.visibility = 'hidden';
        }
    });
 
    let count = 0,
        countSlides = 0;

    const enabled = (index = 0) => {
        countSlides = transparencyItems.length - 1;
        transparencyItems.forEach((item, i) => {
            item.children[0].addEventListener('click', (e) => {
                popupTransparency.style.visibility = 'visible';
                transparencyPopupSlides[i].style.display = 'flex';
                transparencyCounter.children[0].children[0].textContent = 1;
                transparencyCounter.children[0].children[1].textContent = countSlides + 1;
            })
            if (windowWidth <= 1090) {
                item.style.display = 'none';
                transparencyPopupSlides[i].children[0].style.display = 'none';
                transparencyPopupSlides[i].children[1].style.display = 'block';

            } else {
                item.style.display = 'flex';
                transparencyPopupSlides[i].children[0].style.display = 'block';
                transparencyPopupSlides[i].children[1].style.display = 'none';
            }
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
                count--;
                if (count < 0) {
                    count = countSlides;
                }
                if (transparencyPopupSlides[count - 2]) {
                    transparencyPopupSlides[count - 2].style.display = 'none';
                }
                if (transparencyPopupSlides[count - 1]){
                    transparencyPopupSlides[count - 1].style.display = 'none';
                }
                console.log(count);
                transparencyPopupSlides[count].style.display = 'flex';
            transparencyCounter.children[0].children[0].textContent = count + 1;
        });
        transparencyRight.addEventListener('click', () => {
                count++;
                if (count > countSlides) {
                    count = 0;
                }
                if (transparencyPopupSlides[count - 1]) {
                    transparencyPopupSlides[count - 1].style.display = 'none';
                }
                transparencyPopupSlides[count].style.display = 'flex';
            transparencyCounter.children[0].children[0].textContent = count + 1;
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