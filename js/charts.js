var options = {
    series: [85],
    chart: {
        height: 120,
        width: 80,
        type: 'radialBar',
    },
    colors: ['#002561'],
    labels: ["82%"]
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var options = {
    series: [32],
    chart: {
    height: 180,
    width: 140,
    type: 'radialBar',
    },
    plotOptions: {
    radialBar: {
        hollow: {
        size: '60%',
        }
    },
    },
    colors: ['#f7df1e'],
    labels: ['JS','Hola'],
    };

    var chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();