import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './stock-line.html';
var moment = require('moment');

function newDate(days) {
  return days+'';
}

function randomScalingFactor() {
  return 10;
}

Template.stockLine.onRendered(function stockLineOnRendered(){
  let self = this.data;
  console.log(self);
  var ctx = document.getElementById("line_"+self.code);


  var labels = [ // Date Objects
    newDate(0), 
    newDate(1), 
    newDate(2), 
    newDate(3), 
    newDate(4), 
    newDate(5), 
    newDate(6)
  ];

  var data = [
    randomScalingFactor(), 
    randomScalingFactor(), 
    randomScalingFactor(), 
    randomScalingFactor(), 
    randomScalingFactor(), 
    randomScalingFactor(), 
    randomScalingFactor()
  ];

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: self.name,
        backgroundColor: 'rgba(39, 141, 233, 0.5)',
        borderColor:'rgba(39, 141, 233, 1)',
        borderWidth: 0.5,
        fill: false,
        data: data,
      }]
    }, 
    options: {
      elements: { point: { radius: 0 } } 
    }
  });

  setInterval( () => {
    labels.push(11);
    data.push(20);
    myLineChart.update();
   
  }, 1000);
});

Template.stockLine.helpers({

});

Template.stockLine.events({
  
});

