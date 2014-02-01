define (["jquery", "highcharts"], function($, highcharts) {

  return {
    create_chart: function(deployment) {
      var current_chart = $('#center-container').highcharts();
      if (current_chart)
        current_chart.destroy();

      var options = {
        chart: {
          renderTo: 'center-container',
          type: 'area'
        },
        title: {
          text: 'Activity Sharing'
        },
        xAxis: {
          title: {
            text: 'Activity Name'
          }
        },
        yAxis: {
          title: {
            text: "Shared Instances",
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
        },
        series: [{}]
      };

      var data =
          {
            "stats": [
              1,
              5,
              9,
              11,
              13,
              29,
              25,
              35,
              43,
              57,
              59,
              62,
              98,
              161,
              174,
              189,
              203,
              278,
              350,
              413,
              729
            ],
            "categories": [
              "Finance",
              "InfoSlicer",
              "VisualMatch",
              "Etoys",
              "Clock",
              "Implode",
              "TypingTurtle",
              "Terminal",
              "ListenAndSpell",
              "Web",
              "Pippy",
              "SocialCalc",
              "TurtleArt",
              "Chat",
              "Colors",
              "Oficina",
              "Speak",
              "TamTamMini",
              "Maze",
              "Jukebox",
              "Record"
            ]
          };
      var series = {
        name: "Number of activities shared",
        data: data.stats
      }

      options.series.push(series);
      options.xAxis.categories = data.categories;
      var chart = new Highcharts.Chart(options);
    }
  }
});
