'use strict';

import fromFooterToTop from './modules/footer';
import formula from './modules/formula';
import telAccord from './modules/header-tel';
import menu from './modules/menu';
import { popupConsultation } from './modules/popup-consultation';
import { popupRepair } from './modules/popup-repair-types';
import { popupPrivacy } from './modules/privacy-policy';
import sliderRepairTypes from './modules/types-repair';
import sendData from './modules/send-data';
import accordion from './modules/faq';
import reviews from './modules/reviews';
import documents from './modules/documents';
import { Partners } from './modules/partners';

let windowWidth = window.innerWidth;

telAccord();
menu();
sendData();
fromFooterToTop();
popupRepair();
popupPrivacy();
formula(windowWidth);
sliderRepairTypes(windowWidth)
window.addEventListener('resize', (e) =>{
    let windowWidth = e.target.innerWidth; 
    formula(windowWidth);
    documents(windowWidth);
});
popupConsultation();
accordion();
reviews();
documents();
const partnersSlider = new Partners({
    main: '.partners > .wrapper',
    wrap: '.partners-slider',
    next: '#partners-arrow_right',
    prev: '#partners-arrow_left',
    infinity: true,
    responsive: [
        {
            breakpoint: 1260,
            slideToShow: 2
        },
        {
            breakpoint: 768,
            slideToShow: 1
        }
    ]
});
partnersSlider.init();
