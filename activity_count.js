$(document).ready(function() {

  // an array of json data to visualize
  var charts = {
    "activity_count": "Activity Frequency",
    "activity_files": "Files Generated",
    "activity_share": "Activities Shared"
  };


  // add a button for each chart file in left container
  for (var chart in charts) {
    var button = document.createElement('a');
    button.setAttribute('href', '#');
    button.setAttribute('class', 'theme button white');
    button.setAttribute('onclick', chart + '()');
    var label = document.createTextNode(charts[chart]);
    button.appendChild(label);
    document.getElementById('left-container').appendChild(button);
  }

  var options = {
    chart: {
      renderTo: 'center-container',
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
  var filepath = "http://localhost/highcharts/activity_count.json";
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
});
