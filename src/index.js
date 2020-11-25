'use strict';

import fromFooterToTop from './modules/footer';
import formula from './modules/formula';
import telAccord from './modules/header-tel';
import menu from './modules/menu';
import { popupRepair } from './modules/popup-repair-types';
import { popupPrivacy } from './modules/privacy-policy';
import sendData from './modules/send-data';

telAccord();
menu();
sendData();
fromFooterToTop();
popupRepair();
popupPrivacy();
formula(window.innerWidth);
window.addEventListener('resize', (e) => formula(e.target.innerWidth));