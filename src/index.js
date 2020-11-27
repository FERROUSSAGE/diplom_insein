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
import problems from './modules/problems';
import scheme from './modules/scheme';
import designs from './modules/designs';
import { popupDesign } from './modules/popup-dialog-design';
import portfolio from './modules/portfolio';
import portfolioPopup from './modules/portfolio-popup';

let windowWidth = window.innerWidth;

telAccord();
menu();
sendData();
fromFooterToTop();
popupRepair();
popupPrivacy();
formula(windowWidth);
sliderRepairTypes(windowWidth)
problems(windowWidth);
documents();
popupConsultation();
accordion();
reviews();
scheme();
designs();
popupDesign();
portfolio();
portfolioPopup();
window.addEventListener('resize', (e) =>{
    windowWidth = e.target.innerWidth; 
    formula(windowWidth);
    documents(windowWidth);
    problems(windowWidth);
});

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
