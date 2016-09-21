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



//record text selection with jquery and ajax
//source: https://davidwalsh.name/text-selection-ajax
//other site helpful when changing color http://stackoverflow.com/questions/795600/change-highlight-color
/* attempt to find a text selection */
function getSelected() {
	if(window.getSelection) { return window.getSelection(); }
	else if(document.getSelection) { return document.getSelection(); }
	else {
		var selection = document.selection && document.selection.createRange();
		if(selection.text) { return selection.text; }
		return false;
	}
	return false;
}
/* create sniffer */
$(document).ready(function() {
	$('#content-area').mouseup(function() {
		var selection = getSelected();
		if(selection && (selection = new String(selection).replace(/^\s+|\s+$/g,''))) {
			$.ajax({
				type: 'post',
				url: 'ajax-selection-copy.php',
				data: 'selection=' + encodeURI(selection)
			});
		}
	});
});





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
