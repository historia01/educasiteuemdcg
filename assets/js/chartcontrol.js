let usageChart;
let countryChart;
let facebook;
let speedchart;
let pksize;
let pktime;
let pgsize;

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
    speedchart = new Chart("loadtimechart", {
        type: "bar",
        data: {
            labels: ["Google", "Facebook", "Youtube", "Amazon", "Wikipedia", "Instagram"],
            datasets: [{
                backgroundColor: [
                    "#ffcf4d", "#4d82ff", "#ff4d4d", "#f7862a", "#787cff", "#ff78e4"
                ],
                data: [
                    1.26, 7.71, 7.46, 7.66, 1.64, 14.64
                ]
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

    pktime = new Chart("packTime", {
        type: "bar",
        data: {
            labels: ["Google", "Facebook", "Youtube", "Amazon", "Wikipedia", "Instagram"],
            datasets: [{
                backgroundColor: [
                    "#ffcf4d", "#4d82ff", "#ff4d4d", "#f7862a", "#787cff", "#ff78e4"
                ],
                data: [
                    90, 90, 196, 90, 30, 77
                ]
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
                display: true,
                text: 'Tamaño de Paquetes en Kilobytes'
            },
            scales: {
                y: {
                  beginAtZero: true
                }
            }
        }
    });
    pksize = new Chart("packSize", {
        type: "bar",
        data: {
            labels: ["Google", "Facebook", "Youtube", "Amazon", "Wikipedia", "Instagram"],
            datasets: [{
                backgroundColor: [
                    "#ffcf4d", "#4d82ff", "#ff4d4d", "#f7862a", "#787cff", "#ff78e4"
                ],
                data: [
                    50, 35, 80, 35, 26, 77
                ]
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
                display: true,
                text: 'Tiempo en el que Llega el Paquete en Milisegundos'
            },
            scales: {
                y: {
                  beginAtZero: true
                }
            }
        }
    });
    pgsize = new Chart("pgsize", {
        type: "bar",
        data: {
            labels: ["Google", "Facebook", "Youtube", "Amazon", "Wikipedia", "Instagram"],
            datasets: [{
                backgroundColor: [
                    "#ffcf4d", "#4d82ff", "#ff4d4d", "#f7862a", "#787cff", "#ff78e4"
                ],
                data: [2.15, 19.72, 17.72, 7.05, 1.06, 14.63]
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
                display: true,
                text: 'Tamaño de las páginas en Megabytes'
            },
            scales: {
                y: {
                  beginAtZero: true
                }
            }
        }
    });
});