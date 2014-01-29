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
          text: 'Activity Files Generated'
        },
        xAxis: {
        },
        legend: {
          enabled: false
        },
        series: [{}]
      };

      // retrieve local json file
      var filepath = "http://localhost/highcharts/" + deployment + "/activity_files.json";
      $.ajax({
        'async': false,
        'global': false,
        'url': filepath,
        'dataType': "json"
      })
      .done(function (data) {

          var series = {
            name: "Number of files created",
            data: data.stats
          }

          options.series.push(series);
          options.xAxis.categories = data.categories;
          var chart = new Highcharts.Chart(options);
      });
    }
  }
});
