// image uploading for user profiles
$(function() {
  $('#pictureInput').on('change', function(event) {
    var files = event.target.files;
    var image = files[0]
    var reader = new FileReader();
    reader.onload = function(file) {
      var img = new Image();
      img.width = "200";
      img.height = "200";
      img.src = file.target.result;
      $('#target').html(img);
    }
    reader.readAsDataURL(image);
  });
});
