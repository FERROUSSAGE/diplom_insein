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