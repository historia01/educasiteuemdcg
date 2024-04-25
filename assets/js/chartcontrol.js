let usageChart;
let countryChart;
let facebook;

$(document).ready(function(){
    usageChart = new Chart("mostUsedChart", {
        type: "pie",
        data: {
            labels: ["Facebook", "Instagram", "Pinterest", "Twitter", "Reddit", "Otros"],
            datasets: [{
                backgroundColor: [
                    "#3b5998",  // Facebook blue
                    "#C13584",  // Instagram gradient (approximate)
                    "#CD212A",  // Pinterest red
                    "#1DA1F2",  // Twitter blue
                    "#FF4500",  // Reddit orange
                    "#737373"   // Gray for "Otros"
                ],
                data: [5820591841, 855955237, 719774229, 639799315, 66792236, 685499266]
            }]
        },
        options: {
            legend: {
                display: true,
                labels:{
                    fontFamily: 'PinkChicken',
                    fontColor: 'white'
                }
            },
            title: {
                display: false,
                text: ''
            }
        }
    });
    countryChart = new Chart("countriesChart", {
        type: "bar",
        data: {
            labels: ["EAU", "Corea del Sur", "HK", "Paises Bajos", "Canada"],
            datasets: [{
                backgroundColor: [
                    "#53e079",  // Facebook blue
                    "#f2dce2",  // Instagram gradient (approximate)
                    "#f53131",  // Pinterest red
                    "#12a4ff",  // Twitter blue
                    "#ff1212",  // Reddit orange
                ],
                data: [105.5, 92, 89.2, 88.10, 85.7]
            }]
        },
        options: {
            legend: {
                display: false,
                labels:{
                    fontFamily: 'PinkChicken',
                    fontColor: 'white'
                } 
            },
            title: {
                display: false,
                text: ''
            },
            scales: {
                y: {
                  beginAtZero: true
                }
            }
        }
    });
    facebook = new Chart("fbGrowth", {
        type: "line",
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [{
                backgroundColor: [
                    "#2f7dfa"
                ],
                data: [0.17, 0.88, 1.37, 1.16]
            }]
        },
        options: {
            legend: {
                display: false,
                labels:{
                    fontFamily: 'PinkChicken',
                    fontColor: 'white'
                } 
            },
            title: {
                display: false,
                text: ''
            },
            scales: {
                y: {
                  beginAtZero: true
                }
            }
        }
    });
});