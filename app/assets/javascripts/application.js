// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui/autocomplete
//= require bootstrap-datepicker
//= require bootstrap
//= require bootstrap-sprockets
// require turbolinks
//= require_tree .

//makes this a global function
window.colorizedContent = function(color, snippets, uncolorizedSpeechContent){
  var newHTML = "";
  prevIndex = 0;
  snippets.forEach(function(item){
    newHTML += uncolorizedSpeechContent.substring(prevIndex, item[0]);
    newHTML += '<span style="background-color:' + color + '">' + uncolorizedSpeechContent.substring(item[0], item[1]) + '</span>';
    prevIndex = item[1];
  });
  newHTML += uncolorizedSpeechContent.substring(prevIndex, uncolorizedSpeechContent.length);
  return newHTML;
}

window.colorSelector = function(tracker, options){
  tracker+=1;

  if (tracker >= 6){
    tracker = 0;
  }

  colorOptionsTracker = tracker;

  return options[tracker]
}

var colorOptionsTracker = 0;
var colorOptions = [
  "rgb(255, 243, 133)",
  "rgb(255, 214, 133)",
  "rgb(255, 133, 168)",
  "rgb(133, 255, 208)",
  "rgb(133, 194, 255)",
  "rgb(255, 133, 243)"
]
