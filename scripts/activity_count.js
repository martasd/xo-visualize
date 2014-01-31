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

      // retrieve local json file
      var filepath = "http://localhost/highcharts/" + deployment + "/activity_count.json";
      $.ajax({
        'async': false,
        'global': false,
        'url': filepath,
        'dataType': "json",
        'success': function (data) {

          var series = {
            name: "Number of instances launched",
            data: data.stats
          }

          options.series.push(series);
          options.xAxis.categories = data.categories;
          var chart = new Highcharts.Chart(options);

        }
      });
    }
  }
});
