require.config({
  baseUrl: 'scripts',
  paths: {
    jquery: 'lib/jquery-2.0.3',
    highcharts: 'highcharts/highcharts.src',
    select2: 'lib/select2-3.4.5/select2'
  },
  config: {
    'main': {
      modules: ['activity_count', 'activity_files', 'activity_share']
    }
  }
});

require(['jquery', 'domReady!', 'select2', 'buttons'],
        function($, doc, select2, buttons) {

          /// TODO: how to unhide select2 input box?
          // specify the data source
          //var deployment_sites = [
          //  {id:0, text:'mauwa'},
          //  {id:1, text:'koral'},
          //  {id:2, text:'selaling'}
          //];
          //var drop_down = $(document.createElement('input'))
          //                .attr({ 'id': 'deployments',
          //                        'type': 'hidden'
          //                     });
          //$('#deployments').select2({ data: deployment_sites});
          //$('#left-container').append(drop_down);

          var deployments = ['mauwa','koral','selaling'];
          var drop_down = $(document.createElement('select'))
                          .attr('id', 'deployments');

          var option, deployment;
          for (var i = 0; i < deployments.length; i++) {
            option = $(document.createElement('option')).attr('value', deployments[i]);
            deployment = $(document.createTextNode(deployments[i]));
            option.append(deployment);
            drop_down.append(option);
          };
          $('#left-container').append(drop_down);

          // Add button options when a deployment gets selected
          $('#deployments').change( function() {
            deployment = $('#deployments').val();

            // if buttons already exists, reload them
            if ($('#freq').length) {
              buttons.reload(deployment);
            }
            else {
              buttons.add(deployment);
            }
          });
        });