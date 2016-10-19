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



var colorOptionsTracker = 0;

var colorOptions = [
  {refVal: 0, colorCode: "rgb(255, 243, 133)"},
  {refVal: 1, colorCode: "rgb(255, 214, 133)"},
  {refVal: 2, colorCode: "rgb(255, 133, 168)"},
  {refVal: 3, colorCode: "rgb(133, 255, 208)"},
  {refVal: 4, colorCode: "rgb(133, 194, 255)"},
  {refVal: 5, colorCode: "rgb(255, 133, 243)"}
]

window.colorizedContent = function(color, snippets, uncolorizedSpeechContent){
  var newHTML = "";
  prevIndex = 0;
  snippets.sort().forEach(function(item){
    newHTML += uncolorizedSpeechContent.substring(prevIndex, item[0]);
    newHTML += '<span style="background-color:' + color + '">' + uncolorizedSpeechContent.substring(item[0], item[1]) + '</span>';
    prevIndex = item[1];
  });
  newHTML += uncolorizedSpeechContent.substring(prevIndex, uncolorizedSpeechContent.length);
  return newHTML;
}


window.colorSelector = function(tracker, options){
  //hack - since index corresponds to refVal
  return options[tracker];
  // options.filter(function(element){
  //   if (element.refVal === tracker){
  //     return element;
  //   }
  // });
}

//refactor to combine incrementColorTracker and colorSelector
window.incrementColorTracker = function(tracker){
  tracker+=1;
  if (tracker >= 6){
    tracker = 0;
  }
  colorOptionsTracker = tracker;
}
