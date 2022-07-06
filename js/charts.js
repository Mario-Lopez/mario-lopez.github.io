var options = {
series: [100],
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
colors: ['#5254ce'],
labels: ['HTML','Hola'],
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var options = {
series: [65],
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
colors: ['#002561'],
labels: ['CSS','Hola'],
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
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