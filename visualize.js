var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem)
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};

function sort(json) {

  var nodes = [];
  nodes = json.values;
  nodes.sort(function(a,b) {
    return b.values - a.values;
  });
}

// an array of json data to visualize
var json_stats = {
    "activity_freq": "Activity Frequency",
    "activity_files": "Files Generated",
    "activity_share": "Activities Shared"
};

function read_json(data) {
  var json = null;
  var filepath = "http://localhost/" + data + "_stats.json";
  $.ajax({
    'async': false,
    'global': false,
    'url': filepath,
    'dataType': "json",
    'success': function (data) {
      json = data;
    }
  });
  return json;
}

var parsed_json = []; // parsed json data from all files
for (var stat in json_stats) {
  if (json_stats.hasOwnProperty(stat)) {
    parsed_json[stat] = read_json(stat);
    sort(parsed_json[stat]);
  }
}

// initialize the visualization
var viz = null;
function init() {
 viz = new $jit.BarChart({
    injectInto: 'infovis'
 });

  // add a button for each stat file in left container
  for (var stat in json_stats) {
    var button = document.createElement('a');
    button.setAttribute('href', '#');
    button.setAttribute('class', 'theme button white');
    button.setAttribute('onclick', stat + '()');
    var label = document.createTextNode(json_stats[stat]);
    button.appendChild(label);
    document.getElementById('left-container').appendChild(button);
  }
}


function activity_freq(){

  viz = new $jit.BarChart({
    injectInto: 'infovis',
    animate: true,
    orientation: 'vertical',
    barsOffset: 20,
    Margin: {
      top:5,
      left: 5,
      right: 5,
      bottom:5
    },
    labelOffset: 5,
    type: 'grouped',
    showAggregates:true,
    showLabels:true,
    hoveredColor: 'yellow',
    useCanvas: viz.canvas,
    Label: {
      type: labelType, //Native or HTML
      size: 13,
      family: 'Arial',
      color: 'white'
    },
    Tips: {
      enable: true,
      onShow: function(tip, elem) {
        tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;
      }
    }
  });

  viz.loadJSON(parsed_json['activity_freq']);
  //end
}

function activity_files(){

  viz = new $jit.BarChart({
    injectInto: 'infovis',
    animate: true,
    orientation: 'vertical',
    barsOffset: 20,
    Margin: {
      top:5,
      left: 5,
      right: 5,
      bottom:5
    },
    labelOffset: 5,
    type: 'grouped',
    showAggregates:true,
    showLabels:true,
    hoveredColor: 'yellow',
    useCanvas: viz.canvas,
    Label: {
      type: labelType, //Native or HTML
      size: 13,
      family: 'Arial',
      color: 'white'
    },
    Tips: {
      enable: true,
      onShow: function(tip, elem) {
        tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;
      }
    }
  });

  viz.loadJSON(parsed_json['activity_files']);
  //end
}

function activity_share(){

  viz = new $jit.AreaChart({
    injectInto: 'infovis',
    animate: true,
    labelOffset: 5,
    type: 'stacked',
    showAggregates:true,
    showLabels:true,
    selectOnHover:true,
    useCanvas: viz.canvas,
    Margin: {
      top:5,
      left: 5,
      right: 5,
      bottom:5
    },
    Label: {
      type: labelType, //Native or HTML
      size: 13,
      family: 'Arial',
      color: 'white'
    },
    Tips: {
      enable: true,
      onShow: function(tip, elem) {
        tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;
      }
    }
  });

  viz.loadJSON(parsed_json['activity_share']);
  //end
}