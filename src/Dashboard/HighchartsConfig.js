export default function () {
    return {
        colors: [
            '#52ce65'
        ],

        title: {
            text: 'CryptoCurrency Data'
        },

        subtitle: {
            text: 'Source: cryptocompare.com'
        },
        credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: 'Price'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010,
                shadow: true
            }



        },

        series: [{
            name: 'Price',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },

                }
            }]
        }

    }


}