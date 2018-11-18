export default function (historical) {
  return {
    colors: ["#52ce65"],

    title: {
      text: "Historic Price from last 12 months"
    },
    chart: {
      backgroundColor: "none"
    },

    subtitle: {
      text: "Source: cryptocompare.com"
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: "datetime",
      gridLineColor: "#000",
      lineColor: "#000"
    },
    yAxis: {
      gridLineColor: "#000",

      title: {
        text: "Price"
      }
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010,
        shadow: true
      },
      areaspline: {
        fillOpacity: 0.1
      }
    },

    series: historical,

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal"
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5
            },
            title: {
              text: null
            }
          },
          subtitle: {
            text: null
          }
        }
      }]
    }
  };
}