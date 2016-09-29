// $(function(){
//     $('#login').popover({
//
//         placement: 'bottom',
//         // title: 'Popover Form',
//         html:true,
//         content:  $('#myForm').html()
//     }).on('click', function(){
//       // had to put it within the on click action so it grabs the correct info on submit
//       $('.btn-primary').click(function(){
//        $('#result').after("form submitted by " + $('#email').val())
//         $.post('/echo/html/',  {
//             email: $('#email').val(),
//             name: $('#name').val(),
//             gender: $('#gender').val()
//         }, function(r){
//           $('#pops').popover('hide')
//           $('#result').html('resonse from server could be here' )
//         })
//       })
//   })
// })



//enable popovers
// $(function () {
//   $('[data-toggle="popover"]').popover();
// });


//color selector
// $(function() {
//     $('#cp4').colorpicker().on('changeColor', function(e) {
//         $('#cp4')[0].style.backgroundColor = e.color.toHex();
//     });
// });


//needed to make dropdown work again in nav
$(document).ready(function () {
    debugger;
    $('.dropdown-toggle').dropdown();


//datepicker

  $('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    autoclose: true,
  });







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
