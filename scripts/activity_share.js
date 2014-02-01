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
        plotOptions: {
          area: {
            fillColor: '#77a1e5'
          }
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
