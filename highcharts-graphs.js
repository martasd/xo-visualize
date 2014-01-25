$(document).ready(function() {

  var options = {
    chart: {
      renderTo: 'container',
      type: 'column'
    },
    title: {
      text: 'Activity Frequency'
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
  var filepath = "http://localhost/activity_count.json";
  $.ajax({
    'async': false,
    'global': false,
    'url': filepath,
    'dataType': "json",
    'success': function (data) {

      options.series = data;
      options.xAxis.categories = data
      var chart = new Highcharts.Chart(options);

    }
  });
});
