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
//= require bootstrap-datepicker
//= require turbolinks
//= require_tree .


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
$(function(){
    $('#login').popover({

        placement: 'bottom',
        // title: 'Popover Form',
        html:true,
        content:  $('#myForm').html()
    }).on('click', function(){
      // had to put it within the on click action so it grabs the correct info on submit
      $('.btn-primary').click(function(){
       $('#result').after("form submitted by " + $('#email').val())
        $.post('/echo/html/',  {
            email: $('#email').val(),
            name: $('#name').val(),
            gender: $('#gender').val()
        }, function(r){
          $('#pops').popover('hide')
          $('#result').html('resonse from server could be here' )
        })
      })
  })
})



//enable popovers
// $(function () {
//   $('[data-toggle="popover"]').popover();
// });


//color selector
$(function() {
    $('#cp4').colorpicker().on('changeColor', function(e) {
        $('#cp4')[0].style.backgroundColor = e.color.toHex();
    });
});


//needed to make dropdown work again in nav
$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});

//datepicker
$(document).ready(function(){
  $('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    autoclose: true,
  });
});





$(document).ready(function(){
$("#mytable #checkall").click(function () {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("[data-toggle=tooltip]").tooltip();
});






$(function() {
    $('#cp2').colorpicker();
});









$(function () {
    $('.navbar-toggle').click(function () {
        $('.navbar-nav').toggleClass('slide-in');
        $('.side-body').toggleClass('body-slide-in');
        $('#search').removeClass('in').addClass('collapse').slideUp(200);

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').toggleClass('slide-in');

    });

   // Remove menu for searching
   $('#search-trigger').click(function () {
        $('.navbar-nav').removeClass('slide-in');
        $('.side-body').removeClass('body-slide-in');

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').removeClass('slide-in');

    });
});
