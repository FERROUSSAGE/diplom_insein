'use strict';

import fromFooterToTop from './modules/footer';
import telAccord from './modules/header-tel';
import menu from './modules/menu';
import { popupRepair } from './modules/popup-repair-types';
import { popupPrivacy } from './modules/privacy-policy';

telAccord();
menu();
fromFooterToTop();
popupRepair();
popupPrivacy();