define (["jquery", "highcharts"], function($, highcharts) {

  return {
    create_chart: function(deployment) {
      var current_chart = $('#center-container').highcharts();
      if (current_chart)
        current_chart.destroy();

      var options = {
        chart: {
          renderTo: 'center-container',
          type: 'line'
        },
        title: {
          text: 'Activity Files Generated'
        },
        xAxis: {
          title: {
            text: 'Activity Name'
          }
        },
        yAxis: {
          title: {
            text: "Files Generated",
            offset: 100,
            rotation: 0
          }
        },
        legend: {
          enabled: false
        },
        colors: [
          '#2f7ed8',
          '#0d233a',
          '#8bbc21',
          '#910000',
          '#1aadce',
          '#492970',
          '#f28f43',
          '#77a1e5',
          '#c42525',
          '#a6c96a'
        ],
        plotOptions: {
          series: {
            dashStyle: 'Solid'
          }
        },
        series: [{}]
      };

      var data =
          {
            "stats": [
              2,
              8,
              13,
              25,
              43,
              82,
              89,
              105,
              123,
              166
            ],
            "categories": [
              "Finance",
              "TurtleArt",
              "VisualMatch",
              "TypingTurtle",
              "Etoys",
              "Web",
              "Pippy",
              "SocialCalc",
              "Oficina",
              "AbiWord"
            ]
          };
      var series = {
        name: "Number of files created",
        data: data.stats
      }

      options.series.push(series);
      options.xAxis.categories = data.categories;
      var chart = new Highcharts.Chart(options);
    }
  }
});
