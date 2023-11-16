'use strict';

import Chart from './node_modules/chart.js/auto/auto';

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

btn1.addEventListener('click', function(){
    if(counter1 >= 100){
        counter1 = 0;
    } else {
        ++counter1;
    }
    myChart.data.datasets[0].data.splice(0, 1, counter1);
    myChart.update();
    // console.log(myChart.data.datasets[0].data);
});

btn2.addEventListener('click', function(){
    if(counter2 >= 100){
        counter2 = 0;
    } else {
        ++counter2;
    }
    myChart.data.datasets[0].data.splice(1, 1, counter2);
    myChart.update();
    // console.log(myChart.data.datasets[0].data);
});

btn3.addEventListener('click', function(){
    if(counter3 >= 100){
        counter3 = 0;
    } else {
        ++counter3;
    }
    myChart.data.datasets[0].data.splice(2, 1, counter3);
    myChart.update();
    // console.log(myChart.data.datasets[0].data);
});

btn4.addEventListener('click', function(){
    if(counter4 >= 100){
        counter4 = 0;
    } else {
        ++counter4;
    }
    myChart.data.datasets[0].data.splice(3, 1, counter4);
    myChart.update();
    // console.log(myChart.data.datasets[0].data);
});

btn5.addEventListener('click', function(){
    if(counter5 >= 100){
        counter5 = 0;
    } else {
        ++counter5;
    }
    myChart.data.datasets[0].data.splice(4, 1, counter5);
    myChart.update();
    // console.log(myChart.data.datasets[0].data);
});

btn6.addEventListener('click', function(){
    if(counter6 >= 100){
        counter6 = 0;
    } else {
        ++counter6;
    }
    myChart.data.datasets[0].data.splice(5, 1, counter6);
    myChart.update();
    // console.log(myChart.data.datasets[0].data);
});

const chart = document.getElementById('myChart'); 
const myChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: ['BUTTON NO. 1', 'BUTTON NO. 2', 'BUTTON NO. 3', 'BUTTON NO. 4', 'BUTTON NO. 5', 'BUTTON NO. 6'],
        datasets: [{
            label: 'Number of Clicks On Each Element',
            data: [,,,,,],
        }],
    },
    options: {
        responsive: false,
    },
});


