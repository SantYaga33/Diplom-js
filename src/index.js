'use strict';

//импорт полифилов
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


// импорт модулей js 
import changeClub from './modules/changeClub';
import actionPopup  from './modules/actionPopup';
import getGift  from './modules/getGift';
import sendForm  from './modules/sendForm';
import mainSlider  from './modules/mainSlider';
import servicesSlider  from './modules/servicesSlider';
import gallerySlider  from './modules/gallerySlider';
import getSailAnchor  from './modules/getSailAnchor';
import calc  from './modules/calc';


// вызов функций модулей 
changeClub();
actionPopup();
getGift();
sendForm();
mainSlider();
// servicesSlider();
gallerySlider();
getSailAnchor();
calc();
