var app = window.app = {};

app.Users = function() {
  this._input = $('#users-search-txt');
  this._initAutocomplete();
};

app.Users.prototype = {

};

_initAutocomplete: function() {
  this._input
    .autocomplete({
      source: '/users',
      appendTo: '#users-search-results',
      select: $.proxy(this._select, this)
    })
    .autocomplete('instance')._renderItem = $.proxy(this._render, this);
}

_select: function(e, ui) {
  this._input.val(ui.item.title + ' - ' + ui.item.author);
  return false;
}

_render: function(ul, item) {
  var markup = [
    '<span class="img">',
      '<img src="' + item.image_url + '" />',
    '</span>',
    '<span class="title">' + item.title + '</span>',
    '<span class="author">' + item.author + '</span>',
    '<span class="price">' + item.price + '</span>'
  ];
  return $('<li>')
    .append(markup.join(''))
    .appendTo(ul);
}





$(document).ready(function() {

  function addSnippets(color, snippets){
    var content = $("#content-div > p").html();
    var newHTML = "";

    prevIndex = 0;
    snippets.forEach(function(item){
      newHTML += content.substring(prevIndex, item[0]);
      newHTML += '<span style="background-color:' + color + '">' + content.substring(item[0], item[1]) + '</span>';
      // newHTML += '<span style="background-color:yellow">' + content.substring(item[0], item[1]) + '</span>';
      prevIndex = item[1];
    });
    newHTML += content.substring(prevIndex, content.length);
    $("#content-div > p").html(newHTML);
  }

  if (gon.snippets){
    addSnippets("rgb(255, 133, 168)", JSON.parse(gon.snippets))
  }






  var selectedHighlights = [];

  $('#add-highlights-button').on('click', function(e){
    console.log("clicked add-highlights-button");
    // e.stopPropogation();
    var contentDiv = document.getElementById("content-div");
    record()
  });

  function record(){
    $("#main-record-index").on('mouseup', function(){
      console.log("clicked main record index", this);
      var result = getSelectionCharOffsetsWithin(this);
      selectedHighlights.push([result.start, result.end]);
      alert(selectedHighlights);
    })
  }

  function getSelectionCharOffsetsWithin(element) {
    var start = 0, end = 0;
    var sel, range, priorRange;
    if (typeof window.getSelection != "undefined") {
      range = window.getSelection().getRangeAt(0)
      priorRange = range.cloneRange();
      priorRange.selectNodeContents(element);
      priorRange.setEnd(range.startContainer, range.startOffset);
      start = priorRange.toString().length;
      end = start + range.toString().length;
    } else if (typeof document.selection != "undefined" &&
      (sel = document.selection).type != "Control") {
      range = sel.createRange();
      priorRange = document.body.createTextRange();
      priorRange.moveToElementText(element);
      priorRange.setEndPoint("EndToStart", range);
      start = priorRange.text.length;
      end = start + range.text.length;
    }
    return {
      start: start,
      end: end
    };
  }

  $("#save-highlights-button").on("click", function(){
    var url = window.location.href
    var speechId = url.substring(url.lastIndexOf("/") + 1, url.length);
    $.ajax({
      type: 'POST',
      url: "/highlights",
      data: {data: {snippets: JSON.stringify(selectedHighlights), speech_id: speechId}}
    })
    event.preventDefault();
  });

  $("#update-highlights-button").click(function(event){
    var url = window.location.href
    var speechId = url.substring(url.lastIndexOf("/") + 1, url.length);
    $.ajax({
        type: "PATCH",
        url: "/highlights/" + gon.highlight_id,
        dataType: "json",
        data: {data: {snippets: JSON.stringify(selectedHighlights), speech_id: speechId}},
        complete: function(){
          alert("success")
        }
    });
    event.preventDefault();
  });


  $("#delete-highlights-button").click(function(event){
    var url = window.location.href
    var speechId = url.substring(url.lastIndexOf("/") + 1, url.length);
    $.ajax({
        type: 'DELETE',
        url: "/highlights/" + gon.highlight_id,
        data: {data: {speech_id: speechId}},
        complete: function(result) {
          alert("success")
        }
    });
  });

})
