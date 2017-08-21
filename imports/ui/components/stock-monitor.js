import { Template } from 'meteor/templating'

import './stock-line.html';
import './stock-line.js';

Template.stockMonitor.helpers({
  
    stocks() {
      return [
        {
          name: '中信证券',
          code: '600031'
        },
        {
          name: '华域汽车',
          code: '600032'
        },
        {
          name: '中国平安',
          code: '600033'
        },
        {
          name: '宋城演艺',
          code: '600034'
        }
      ]
    }
  });