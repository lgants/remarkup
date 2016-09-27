// var colorAjaxSuccessListener = function() {
//   debugger
//  $("#save-highlights-button").on("ajax:complete", function(e, request, status){
//    var response = request.responseJSON;
//    binding.pry
//    addSnippets("rgb(255, 133, 168)", response.snippets)
//  });
// }
//
// $(document).ready(function () {
//   colorAjaxSuccessListener();
// });




$(document).ready(function () {
   $("#save-highlights-button").on("ajax:complete", function(e, request, status){
     var response = request.responseJSON;
     addSnippets("rgb(255, 133, 168)", response.snippets)
   });
});
