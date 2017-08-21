import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Chart  from 'chart.js';

import './main.html';
import '../imports/ui/components/stock-monitor.html';
import '../imports/ui/components/stock-monitor.js';
import '../imports/ui/components/my-stocks.html';
import '../imports/ui/components/my-stocks.js';
import '../imports/ui/components/header.html';
import '../imports/ui/components/header.js';


Template.ApplicationLayout.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('stockMonitor');
});

Router.route('/my-stocks', function () {
  this.render('myStocks');
});