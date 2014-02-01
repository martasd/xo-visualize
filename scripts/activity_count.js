define (["jquery", "highcharts"], function($, highcharts) {

  return {
    create_chart: function(deployment) {
      var current_chart = $('#center-container').highcharts();
      if (current_chart)
        current_chart.destroy();

      var options = {
        chart: {
          renderTo: 'center-container',
          type: 'column'
        },
        title: {
          text: 'Activity Frequency'
        },
        xAxis: {
          title: {
            text: 'Activity Name'
          }
        },
        yAxis: {
          title: {
            text: "Launched Instances",
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
            colorByPoint: true
          }
        },
          series: [{}]
      };

      var data =
          {
            "stats": [
              2,
              5,
              9,
              11,
              13,
              25,
              25,
              35,
              43,
              59,
              62,
              89,
              98,
              118,
              156,
              167,
              189,
              204,
              216,
              282,
              360,
              413,
              731
            ],
            "categories": [
              "Finance",
              "InfoSlicer",
              "ReadEtexts",
              "FlipSticks",
              "VisualMatch",
              "Etoys",
              "Castle",
              "Boxes",
              "Scribble",
              "Read",
              "Clock",
              "TypingTurtle",
              "Terminal",
              "Web",
              "Pippy",
              "SocialCalc",
              "Memorize",
              "Colors",
              "Oficina",
              "AbiWord",
              "Maze",
              "Jukebox",
              "Record"
            ]
          };

      var series = {
        name: "Number of instances launched",
        data: data.stats
      }

      options.series.push(series);
      options.xAxis.categories = data.categories;
      var chart = new Highcharts.Chart(options);
    }
  }
});
