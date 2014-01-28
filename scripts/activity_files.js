define (["jquery", "highcharts"], function($, highcharts) {

  return {
    create_chart: function() {
      var options = {
        chart: {
          renderTo: 'center-container',
          type: 'column'
        },
        title: {
          text: 'Activity Files Generated'
        },
        xAxis: {
          tickInterval: 1
        },
        legend: {
          enabled: true
        },
        series: [{}]
      };

      // retrieve local json file
      var filepath = "http://localhost/highcharts/activity_files.json";
      $.ajax({
        'async': false,
        'global': false,
        'url': filepath,
        'dataType': "json",
        'success': function (data) {

          options.series = data;
          //options.xAxis.categories = data
          var chart = new Highcharts.Chart(options);

        }
      });

    }
  }
});
