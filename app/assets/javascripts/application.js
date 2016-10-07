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



// $( function() {
    // var projects = [
    //   {
    //     value: "jquery",
    //     label: "jQuery",
    //     desc: "the write less, do more, JavaScript library",
    //     icon: "jquery_32x32.png"
    //   },
    //   {
    //     value: "jquery-ui",
    //     label: "jQuery UI",
    //     desc: "the official user interface library for jQuery",
    //     icon: "jqueryui_32x32.png"
    //   },
    //   {
    //     value: "sizzlejs",
    //     label: "Sizzle JS",
    //     desc: "a pure-JavaScript CSS selector engine",
    //     icon: "sizzlejs_32x32.png"
    //   }
    // ];


        // <div id="project-label">Select a project (type "j" for a start):</div>
        // <img id="project-icon" src="images/transparent_1x1.png" class="ui-state-default" alt="">
        // <input id="project">
        // <input type="hidden" id="user-search-hidden">
        // <p id="project-description"></p>



var ready;
// var test = [{
//   name: "jquery",
//   highlights: "jQuery",
// }]
ready = (function() {
  // var x = [];
  // $.getJSON(
  //   "/users/autocomplete.json",
  //   { term:request.term, speech_id: gon.speech_id },
  //   function(data){
  //     console.log(data)
  //     x = data;
  //   }
  // );

$( "#user-search-input" ).autocomplete({
  minLength: 1,
  source: function(request, response) {
    $.getJSON(
      "/users/autocomplete.json",
      { term:request.term, speech_id: gon.speech_id },
      function(data) {
        response(data);
      }
    );
  },
  focus: function( event, object) {
    $( "#user-search-input" ).val( object.item.user_full_name );
    return false;
  },
  select: function( event, object ) {
    $( "#user-search-input" ).val( object.item.user_full_name );
    $( "#user-search-hidden" ).val( object.item.highlights );
    // $( "#project-description" ).html( ui.item.desc );
    // $( "#project-icon" ).attr( "src", "images/" + ui.item.icon );
    return false;
  }
})
.autocomplete( "instance" )._renderItem = function( ul, item ) {
  return $( "<li>" )
    .append( "<div>" + item.user_full_name + "</div>" )
    .appendTo( ul );
};
} );




// var ready;
// ready = (function() {
//   debugger
//   $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
//   $("#user-search-input").autocomplete({
//     // source: '/users/autocomplete.json',
//     source: function(request, response) {
//       $.getJSON(
//         "/users/autocomplete.json",
//         { term:request.term, speech_id: gon.speech_id },
//         response
//       );
//     },
//     minLength: 2,
//     select: function(e, ui) {
//
//     }
//     // select: function(event, ui) {
//     //   $('#select_origin').val(ui.item.user.first_name);
//     //   $('#link_origin_id').val(ui.item.user.id);
//     //   return false;
//     // }
//   });
// });

$(document).ready(ready);
$(document).on('page:load', ready);


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
