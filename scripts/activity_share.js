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
          text: 'Activity Sharing'
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
      var filepath = "http://localhost/highcharts/" + deployment + "/activity_share.json";
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
