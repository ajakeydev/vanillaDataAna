'use strict';

import Chart from './node_modules/chart.js/auto/auto';

const chart = document.getElementById('myChart'); 
const myChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: ['BUTTON NO. 1', 'BUTTON NO. 2', 'BUTTON NO. 3', 'BUTTON NO. 4', 'BUTTON NO. 5', 'BUTTON NO. 6'],
        datasets: [{
            label: 'Online Tutorial',
            data: [20, 30, 40, 50, 60, 70],
        }],
    },
    options: {
        responsive: false,
    },
});