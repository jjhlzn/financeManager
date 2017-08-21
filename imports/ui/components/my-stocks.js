import { Template } from 'meteor/templating';
import Chart  from 'chart.js';


Template.myStocks.onRendered(function myStocksOnRendered(){
  var ctx = document.getElementById("myChart");
  
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["现金", "中信证券", "ETF300", "华域汽车", "中国平安", "掌趣科技"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(39, 141, 233, 1)',
                'rgba(255, 70, 111, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            
            borderWidth: 2
        }]
    },
    options: {
    }
});
});
