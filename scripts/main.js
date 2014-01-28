require.config({
  baseUrl: 'scripts',
  paths: {
    jquery: 'lib/jquery-2.0.3',
    highcharts: 'highcharts/highcharts'
  },
  config: {
    'main': {
      modules: ['activity_files']
    }
  }
});

require(['activity_files'], function(activity_files) {

  // use jQuery to create a button for visualizations
  var label = $(document.createTextNode('Activity Files'));
  var button = $(document.createElement('a'))
               .attr({ href: '#',
                       class: 'theme button white'
                     })
               .click(function () { activity_files.create_chart(); })
               .append(label);
  $('#left-container').append(button);

});
