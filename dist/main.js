!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),n.d(t,"popupRepair",(function(){return r}));var r=function(){var e=document.querySelector(".popup-repair-types"),t=document.querySelectorAll(".link-list-repair"),n=e.querySelector(".close ");t.forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".popup-dialog-menu").style.transform="translateX(645px)",e.style.visibility="visible"}))})),n.addEventListener("click",(function(){return e.style.visibility="hidden"}))}},function(e,t,n){"use strict";n.r(t);var r=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})},i=function(){document.querySelector(".button-footer").addEventListener("click",(function(e){e.preventDefault(),document.querySelector(".popup-dialog-menu").style.transform="translateX(645px)",r(e.target.attributes[0].textContent)}))},o=function(e,t){var n=document.getElementById("formula"),r=n.querySelectorAll(".formula-item"),i=n.querySelector("#formula-arrow_left"),o=n.querySelector("#formula-arrow_right"),a=n.querySelectorAll(".formula-slider__slide"),l=n.querySelector(".formula-slider-wrap"),s=n.querySelector(".formula-slider");if(e>1020)r.forEach((function(e){var t=e.querySelector(".formula-item__icon"),n=e.querySelector(".formula-item-popup"),r="";e.addEventListener("mouseenter",(function(i){t.classList.add("active-item"),n.classList.add("active-item"),e.getBoundingClientRect().top>225||(n.classList.add("active-formula"),n.style.cssText="top: 100px;  padding: 40px 40px 0;",r=n.style.top,e.style.zIndex=1e3)})),e.addEventListener("mouseleave",(function(i){t.classList.remove("active-item"),n.classList.remove("active-formula"),n.style.cssText="top: ".concat(r,"px"),e.style.zIndex=0}))}));else{var c=33,u=0,d=0;if(l.style.overflow="hidden",e<576)c=100;else{var f=a[0].cloneNode(!0),y=a[5].cloneNode(!0);s.appendChild(f),s.prepend(y)}s.style.cssText="display: flex; align-items: flex-start; will-change: transform;",a.forEach((function(e){e.style.cssText="flex: 0 0 ".concat(c,"%")}));var p=function(e){a.forEach((function(t,n){t.classList.remove("active-item"),n===e&&t.classList.add("active-item")}))};s.style.transform="translateX(".concat(d*c,"%)"),p(u),o.addEventListener("click",(function(){u++,d--,u>5&&(u=0,d=0),s.style.transform="translateX(".concat(d*c,"%)"),p(u)})),i.addEventListener("click",(function(){u--,d++,u<0&&(u=5,d=-5),s.style.transform="translateX(".concat(d*c,"%)"),p(u)}))}},a=function(){var e=document.querySelector(".header-contacts__phone-number-accord").querySelector(".header-contacts__phone-number"),t=document.querySelector(".header-contacts__arrow");t.addEventListener("click",(function(){e.classList.contains("active")?(e.style.cssText="\n                    opacity: 0;\n                ",t.style.transform="rotate(0)",e.classList.remove("active")):(e.style.cssText="\n                opacity: 1;\n                margin-top: 25px;\n            ",t.style.transform="rotate(180deg)",e.classList.add("active"))}))},l=function(){var e=document.querySelector(".popup-dialog-menu"),t=e.querySelector(".close-menu"),n=document.querySelector(".menu"),i=document.querySelector(".popup-menu-main"),o=window.innerWidth;window.addEventListener("resize",(function(t){o=t.target.innerWidth,e.style.transform=o<576?"translateY(-1500px)":"translateX(645px)"}));var a=function(){e.style.transform=o<576?"translateY(-1500px)":"translateX(645px)"};i.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.closest(".popup-menu-nav__item")&&(a(),r(t.attributes[1].textContent)),t.closest(".link-list-menu")})),n.addEventListener("click",(function(){e.style.transform="translateY(0)"})),t.addEventListener("click",a)},s=n(0),c=(n(0).popupRepair,function(){var e=document.querySelector(".nav-list-repair"),t=document.querySelectorAll(".repair-types-nav__item"),n=document.querySelector(".repair-types-slider").querySelectorAll(".types-repair__item"),r=document.getElementById("repair-counter"),i=document.getElementById("repair-types-arrow_left"),o=document.getElementById("repair-types-arrow_right"),a=document.getElementById("nav-arrow-repair-left_base"),l=document.getElementById("nav-arrow-repair-right_base"),s=n[0].children[0].offsetWidth,c=0,u=0,d=3,f=0,y=0,p=0,m=document.querySelector(".repair-types-nav").offsetWidth;t.forEach((function(e,i){e.addEventListener("click",(function(){t.forEach((function(e,t){n[t].style.display="none",e.classList.remove("active")})),n[i].style.display="block",e.classList.add("active"),d=n[i].children.length,r.children[0].children[1].textContent=d,f=i,n[i].style.cssText="will-change: transform;"}))})),o.addEventListener("click",(function(){c++,u--,c>=d&&(c=0,u=0),n[f].style.transform="translateY(".concat(u*s,"px)"),r.children[0].children[0].textContent=c+1})),i.addEventListener("click",(function(){c--,u++,c<=0&&(c=d,u=-d),n[f].style.transform="translateY(".concat(u*s,"px)"),r.children[0].children[0].textContent=-u})),l.addEventListener("click",(function(){y>=e.children.length||(y++,p=(e.offsetWidth-m)/e.children.length,e.style.transform="translateX(-".concat(p*y,"px)"))})),a.addEventListener("click",(function(){y<=0||(y--,p=(e.offsetWidth-m)/e.children.length,e.style.transform="translateX(-".concat(p*y,"px)"))}))});function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(){var e=document.querySelector(".popup-thank "),t=e.querySelector(".close"),n=e.querySelector(".popup-thank__title"),r=function(e){var t,n={},r=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=p(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}(new FormData(e).entries());try{for(r.s();!(t=r.n()).done;){var i=f(t.value,2),o=i[0],a=i[1];n[o]=a}}catch(e){r.e(e)}finally{r.f()}return JSON.stringify(n)};document.addEventListener("submit",(function(i){i.preventDefault();var o,a=i.target;a.elements[a.elements.length-1].checked?(o=a,fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:r(o)}).then((function(e){if(200===e.status)return e.text();throw new Error("Произошла ошибка с кодом: ".concat(e.status))})).then((function(r){console.log(r),n.innerHTML="".concat(r," <br> ").concat(n.textContent),e.style.visibility="visible",t.addEventListener("click",(function(){return e.style.visibility="hidden"}))})).finally((function(){return o.reset()})),a.elements[a.elements.length-2].disabled=!1):alert("Прежде чем отправить, нужно согласиться с нашей политикой конфиденциальности!")})),document.querySelectorAll("form").forEach((function(e){y(e.elements).forEach((function(e){e.removeAttribute("required"),e.addEventListener("input",(function(){var t;"button"!==e.tagName.toLowerCase()&&"button"!==e.type&&("text"===e.type&&"phone"===e.name&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function r(e){var n=e.keyCode,r=t,i=r.replace(/\D/g,""),o=this.value.replace(/\D/g,""),a=0,l=r.replace(/[_\d]/g,(function(e){return a<o.length?o.charAt(a++)||i.charAt(a):e}));-1!=(a=l.indexOf("_"))&&(l=l.slice(0,a));var s=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}var i,o=u(n);try{for(o.s();!(i=o.n()).done;){var a=i.value;a.addEventListener("input",r),a.addEventListener("focus",r),a.addEventListener("blur",r)}}catch(e){o.e(e)}finally{o.f()}}("#".concat(e.id)),"text"===e.type&&"name"===e.name&&(e.value=(t=e.value,{cirilicAndSpace:function(){return t.replace(/[^А-ЯЁа-яё ]$/,"")}}).cirilicAndSpace()))}))}))}))},h=function(){var e=document.getElementById("faq"),t=e.querySelectorAll(".title_block");e.addEventListener("click",(function(e){t.forEach((function(e){return e.classList.remove("msg-active")})),e.target.classList.add("msg-active")}))},b=function(){var e=document.getElementById("reviews"),t=e.querySelector("#reviews-arrow_left"),n=e.querySelector("#reviews-arrow_right"),r=e.querySelectorAll(".reviews-slider__slide"),i=0,o=r.length-1,a=function(e){r.forEach((function(e){e.style.display="none"})),r[e].style.display="flex"};t.addEventListener("click",(function(){--i<0&&(i=o),a(i)})),n.addEventListener("click",(function(){++i>o&&(i=0),a(i)}))};function S(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e){var t=document.querySelector(".transparency-slider").querySelectorAll(".transparency-item"),n=document.querySelector("#transparency-arrow_left"),r=document.querySelector("#transparency-arrow_right"),i=document.querySelector(".popup-transparency"),o=i.querySelector(".close"),a=i.querySelector(".popup-dialog-transparency"),l=document.querySelector(".popup-transparency-slider").querySelectorAll(".popup-transparency-slider__slide"),s=a.querySelector("#transparency-popup-counter"),c=a.querySelector("#transparency_left"),u=a.querySelector("#transparency_right"),d=0,f=0,y=t.length-1,p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.forEach((function(t,n){t.addEventListener("click",(function(){i.style.visibility="visible",l[n].style.display="flex",S(l[n].children).forEach((function(e){return e.style.display="block"})),f=n})),t.style.display=e<1090?"none":"flex",l[n].style.display="none",s.children[0].children[0].textContent=1,s.children[0].children[1].textContent=l[n].children.length})),t[n].style.display="flex"};p(),n.addEventListener("click",(function(){--d<0&&(d=y),p(d)})),r.addEventListener("click",(function(){++d>y&&(d=0),p(d)})),c.addEventListener("click",(function(){l[f].children[0].style.display="block",l[f].children[1].style.display="none",s.children[0].children[0].textContent=1})),u.addEventListener("click",(function(){l[f].children[0].style.display="none",l[f].children[1].style.display="block",s.children[0].children[0].textContent=2})),o.addEventListener("click",(function(){i.style.visibility="hidden",s.children[0].children[0].textContent=1,S(l[f].children).forEach((function(e){return e.style.display="none"}))}))};function _(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.main,r=t.wrap,i=t.next,o=t.prev,a=t.infinity,l=void 0!==a&&a,s=t.position,c=void 0===s?0:s,u=t.slidesToShow,d=void 0===u?3:u,f=t.responsive,y=void 0===f?[]:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{this.main=document.querySelector(n),this.wrap=document.querySelector(r),this.next=document.querySelector(i),this.prev=document.querySelector(o),this.slides=document.querySelector(r).children,this.slidesToShow=d,this.responsive=y,this.options={position:c,widthSlide:Math.floor(100/this.slidesToShow),infinity:l,maxPosition:this.slides.length-this.slidesToShow}}catch(e){return void console.warn("Для работы карусель слайдера, необхимо передать блок родитель всего слайдера, а также блок родитель фотографий!")}}var t,n,r;return t=e,(n=[{key:"init",value:function(){try{this.addClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.control(),this.responsive&&this.responseInit()}catch(e){}}},{key:"addClass",value:function(){this.main.classList.add("carusel-slider"),this.wrap.classList.add("carusel-slider__wrap"),_(this.slides).forEach((function(e){return e.classList.add("carusel-slider__item")}))}},{key:"addStyle",value:function(){var e=document.getElementById("carusel-slider");e||((e=document.createElement("style")).id="carusel-slider"),e.textContent="\n            .carusel-slider {\n                overflow: hidden !important;\n            }\n            .carusel-slider__wrap {\n                display: flex !important;\n                align-items:center !important;\n                transition: transform .5s !important;\n                will-change: transform !important;\n            }\n            .carusel-slider__item{\n                flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n                align-items: center !important;\n                margin: 0 auto !important;\n                max-width: 100%;\n            }\n        "),document.head.appendChild(e)}},{key:"control",value:function(){var e=this;this.prev.addEventListener("click",(function(){return e.arrowPrev()})),this.next.addEventListener("click",(function(){return e.arrowNext()}))}},{key:"arrowPrev",value:function(){this.options.position-=1,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)")}},{key:"arrowNext",value:function(){this.options.position+=1,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)")}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.classList.add("carusel-slider__prev"),this.next.classList.add("carusel-slider__next"),this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.id="carusel-slider__btn",e.textContent="\n            .carusel-slider__prev,\n            .carusel-slider__next{\n                margin: 0 10px;\n                border: 20px solid transparent;\n                background: transparent;\n            }\n            .carusel-slider__next {\n                border-left-color: #19b5fe;\n            }\n            .carusel-slider__prev {\n                border-right-color: #19b5fe;\n            }\n            .carusel-slider__prev:hover,\n            .carusel-slider__next:hover,\n            .carusel-slider__prev:focus,\n            .carusel-slider__next:focus{\n                background: transparent;\n                outline: none;\n            }\n            .carusel-slider__prev:hover,\n            .carusel-slider__next:hover{\n                opacity: 0.5;\n            }\n        ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),r=Math.max.apply(Math,_(n)),i=function(t){e.slidesToShow=t,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};window.addEventListener("resize",(function(){var o=document.documentElement.clientWidth;o<r?n.forEach((function(t,n){o<t&&i(e.responsive[n].slideToShow)})):i(t)}))}}])&&E(t.prototype,n),r&&E(t,r),e}(),q=function(e){var t=document.getElementById("problems"),n=t.querySelectorAll(".problems-item:not(.problems-slider__slide)"),r=t.querySelector(".problems-slider-wrap"),i=r.querySelector(".problems-slider"),o=i.querySelectorAll(".problems-slider__slide"),a=r.querySelector("#problems-arrow_left"),l=r.querySelector("#problems-arrow_right");if(e>1024)n.forEach((function(e){var t=e.querySelector(".problems-item__icon-inner"),n=e.querySelector(".problems-item-popup"),r=e.querySelector(".svg-wrap");r.addEventListener("mouseover",(function(){t.classList.add("active-item"),e.getBoundingClientRect().top>255?n.style.cssText="visibility: visible; opacity: 1; bottom: 86px;":(n.style.cssText="visibility: visible; opacity: 1; top: 100px; padding: 40px 40px 0;",n.classList.add("active-formula"))})),r.addEventListener("mouseleave",(function(e){t.classList.remove("active-item"),n.classList.remove("active-formula"),n.style.cssText="opacity: 0.1; visibility: hidden;"}))}));else{var s=33,c=0,u=0;if(r.style.overflow="hidden",i.querySelectorAll(".problems-slider__slide").forEach((function(e){return e.classList.remove("active-item")})),e<576)s=100;else{var d=o[0].cloneNode(!0),f=o[3].cloneNode(!0);i.appendChild(d),i.prepend(f)}i.style.cssText="display: flex; align-items: flex-start; will-change: transform;",o.forEach((function(e){e.style.cssText="flex: 0 0 ".concat(s,"%")}));var y=function(e){o.forEach((function(t,n){t.style.cssText="width: ".concat(s,"%; justify-content: center;"),t.classList.remove("active-item"),n===e&&t.classList.add("active-item")}))};i.style.transform="translateX(".concat(u*s,"%)"),y(c),l.addEventListener("click",(function(){c++,u--,c>3&&(c=0,u=0),i.style.transform="translateX(".concat(u*s,"%)"),y(c)})),a.addEventListener("click",(function(){c--,u++,c<0&&(c=3,u=-3),i.style.transform="translateX(".concat(u*s,"%)"),y(c)}))}};function A(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function(){var e=document.querySelector(".scheme"),t=e.querySelector(".nav-wrap"),n=t.querySelector(".nav-list"),r=e.querySelectorAll(".scheme-slider__slide"),i=e.querySelectorAll(".scheme-description-block"),o=n.children;i[0].classList.add("visible-content-block");t.addEventListener("click",(function(e){var t=e.target,a=0,l=n.parentNode.offsetWidth;t.matches(".scheme-nav__item")&&(A(o).forEach((function(e,t){e.classList.remove("active"),e.dataset.num=t,r[t].style.display="none",i[t].classList.remove("visible-content-block")})),t.classList.add("active"),r[t.dataset.num].style.display="flex",i[t.dataset.num].classList.add("visible-content-block")),t.matches(".nav-arrow_right")&&(a=n.offsetWidth-l,n.style.transform="translateX(".concat(-1*a,"px)"),t.style.display="none",t.previousElementSibling.style.display="block"),t.matches(".nav-arrow_left")&&(a=(n.offsetWidth-l)/(o.length*o.length),n.style.transform="translateX(".concat(1*a,"px)"),t.style.display="none",t.nextElementSibling.style.display="block")}))};function j(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C,O,X,M,W,B,P=function(){var e=document.getElementById("designs"),t=e.querySelector(".nav-wrap"),n=t.querySelector(".nav-list"),r=j(e.querySelector(".designs-slider-wrap").querySelector(".designs-slider").children),i=e.querySelectorAll(".preview-block"),o=n.children;i[0].classList.add("visible");t.addEventListener("click",(function(e){var t=e.target,a=0,l=n.parentNode.offsetWidth;t.matches(".designs-nav__item")&&(j(o).forEach((function(e,t){e.classList.remove("active"),e.dataset.num=t,r[t].style.display="none",i[t].classList.remove("visible")})),t.classList.add("active"),r[t.dataset.num].style.display="flex",i[t.dataset.num].classList.add("visible")),t.matches(".nav-arrow_right")&&(a=n.offsetWidth-l,n.style.transform="translateX(".concat(-1*a,"px)"),t.style.display="none",t.previousElementSibling.style.display="block"),t.matches(".nav-arrow_left")&&(a=(n.offsetWidth-l)/(o.length*o.length),n.style.transform="translateX(".concat(1*a,"px)"),t.style.display="none",t.nextElementSibling.style.display="block")}))},N=window.innerWidth;a(),l(),v(),i(),Object(s.popupRepair)(),C=document.querySelectorAll(".link-privacy"),O=document.querySelector(".popup-privacy"),X=O.querySelector(".close "),C.forEach((function(e){e.addEventListener("click",(function(){return O.style.visibility="visible"}))})),X.addEventListener("click",(function(){return O.style.visibility="hidden"})),o(N),c(N),q(N),w(),M=document.querySelectorAll(".button_wide"),W=document.querySelector(".popup-consultation"),B=W.querySelector(".close"),M.forEach((function(e){e.addEventListener("click",(function(){return W.style.visibility="visible"}))})),B.addEventListener("click",(function(){return W.style.visibility="hidden"})),h(),b(),I(),P(),window.addEventListener("resize",(function(e){N=e.target.innerWidth,o(N),w(N),q(N)})),new L({main:".partners > .wrapper",wrap:".partners-slider",next:"#partners-arrow_right",prev:"#partners-arrow_left",infinity:!0,responsive:[{breakpoint:1260,slideToShow:2},{breakpoint:768,slideToShow:1}]}).init()}]);