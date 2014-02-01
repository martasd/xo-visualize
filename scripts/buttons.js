define(['jquery', 'activity_count', 'activity_files', 'activity_share'],
       function ($, activity_count, activity_files, activity_share) {

  return {
    add: function (deployment) {
      // use jQuery to create a button for each visualizations
          var label = $(document.createTextNode('Activity Frequency'));
          var button = $(document.createElement('a'))
                       .attr({ id: 'freq',
                               href: '#',
                               class: 'theme button white'
                             })
                       .click(function () { activity_count.create_chart(deployment); })
                       .append(label);
          $('#left-container').append(button);


          label = $(document.createTextNode('Files Generated'));
          button = $(document.createElement('a'))
                   .attr({ id: 'files',
                           href: '#',
                           class: 'theme button white'
                         })
                   .click(function () { activity_files.create_chart(deployment); })
                   .append(label);
          $('#left-container').append(button);


          label = $(document.createTextNode('Activities Shared'));
          button = $(document.createElement('a'))
                   .attr({ id: 'shared',
                           href: '#',
                           class: 'theme button white'
                         })
                   .click(function () { activity_share.create_chart(deployment); })
                   .append(label);
          $('#left-container').append(button);
    },
    reload: function (deployment) {

              $('#freq').click(function () {
                activity_count.create_chart(deployment); });
              $('#files').click(function () {
                activity_files.create_chart(deployment); });
              $('#shared').click(function () {
                activity_share.create_chart(deployment); });
              }
  }
});