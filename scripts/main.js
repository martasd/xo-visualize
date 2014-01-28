require.config({
  baseUrl: 'scripts',
  paths: {
    jquery: 'lib/jquery-2.0.3',
    highcharts: 'highcharts/highcharts.src'
  },
  config: {
    'main': {
      modules: ['activity_count', 'activity_files', 'activity_share']
    }
  }
});

require(['jquery', 'domReady!', 'activity_count', 'activity_files', 'activity_share'],
        function($, doc, activity_count, activity_files, activity_share) {

  // specify the data source
  var deployment = 'mauwa'

  // use jQuery to create a button for each visualizations
  var label = $(document.createTextNode('Activity Frequency'));
  var button = $(document.createElement('a'))
               .attr({ href: '#',
                       class: 'theme button white'
                     })
               .click(function () { activity_count.create_chart(deployment); })
               .append(label);
  $('#left-container').append(button);


  label = $(document.createTextNode('Files Generated'));
  button = $(document.createElement('a'))
               .attr({ href: '#',
                       class: 'theme button white'
                     })
               .click(function () { activity_files.create_chart(deployment); })
               .append(label);
  $('#left-container').append(button);


  label = $(document.createTextNode('Activities Shared'));
  button = $(document.createElement('a'))
               .attr({ href: '#',
                       class: 'theme button white'
                     })
               .click(function () { activity_share.create_chart(deployment); })
               .append(label);
  $('#left-container').append(button);

});
