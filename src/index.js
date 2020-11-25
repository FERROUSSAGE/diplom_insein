'use strict';

import fromFooterToTop from './modules/footer';
import telAccord from './modules/header-tel';
import menu from './modules/menu';
import { popupRepair } from './modules/popup-repair-types';

telAccord();
menu();
fromFooterToTop();
popupRepair();