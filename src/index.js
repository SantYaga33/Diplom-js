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


// вызов функций модулей 
changeClub();
actionPopup();
