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
    // newHTML += '<span style="background-color:yellow">' + content.substring(item[0], item[1]) + '</span>';
    prevIndex = item[1];
  });

  newHTML += uncolorizedSpeechContent.substring(prevIndex, uncolorizedSpeechContent.length);
  
  return newHTML;
}









// this is the old autocomplete
// <script type="text/javascript">
//   $(function() {
//     $('#select_origin').autocomplete({
//       minLength: 3,
//       source: '<%= users_path(:json) %>',
//       focus: function(event, ui) {
//         $('#select_origin').val(ui.item.user.first_name);
//         return false;
//       },
//       select: function(event, ui) {
//         $('#select_origin').val(ui.item.user.first_name);
//         $('#link_origin_id').val(ui.item.user.id);
//           return false;
//       }
//       })
//       .data( "autocomplete" )._renderItem = function( ul, item ) {
//         return $( "<li></li>" )
//           .data( "item.autocomplete", item )
//             .append( "<a>" + item.user.first_name + item.user.last_name + "</a>" )
//               .appendTo( ul );
//       };
//     });
// </script>


//START HIGHLIGHTS SECTION
//record highlights - not ajaxified yet
// var selectedHighlights = [];
//
// $('#add-highlights-button').on('click', function(e){
//   e.stopPropogation();
//   var contentDiv = document.getElementById("content-div");
// });
//
// $("#main-record-index").on('mouseup', function(){
//   var result = getSelectionCharOffsetsWithin(contentDiv);
//   selectedHighlights.push("[" + result.start + ": " + result.end + "]");
//   alert(selectedHighlights);
// })
//
//
// function getSelectionCharOffsetsWithin(element) {
//   var start = 0, end = 0;
//   var sel, range, priorRange;
//   if (typeof window.getSelection != "undefined") {
//     range = window.getSelection().getRangeAt(0)
//     priorRange = range.cloneRange();
//     priorRange.selectNodeContents(element);
//     priorRange.setEnd(range.startContainer, range.startOffset);
//     start = priorRange.toString().length;
//     end = start + range.toString().length;
//   } else if (typeof document.selection != "undefined" &&
//     (sel = document.selection).type != "Control") {
//     range = sel.createRange();
//     priorRange = document.body.createTextRange();
//     priorRange.moveToElementText(element);
//     priorRange.setEndPoint("EndToStart", range);
//     start = priorRange.text.length;
//     end = start + range.text.length;
//   }
//   return {
//     start: start,
//     end: end
//   };
// }




// //save highlights - not ajaxified yet
// $('save-highlights-button').on('click', function(){
//
//
// }
//
// //clear highlights - not ajaxified yet
// $('clear-highlights-button').on('click', function(){
//
// }

//load highlights if exist - not ajaxified yet

  //check if highlihts exists
  //iterate through and insert a span with a change background color


//END HIGHLIGHTS SECTION



//popover with form
//made edits, source: http://jsfiddle.net/apougher/rjRwV/
