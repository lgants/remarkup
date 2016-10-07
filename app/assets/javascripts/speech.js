$(document).ready(function() {
  //this will be used for tracking the selected users
  var sidebarSelectionTracker = {

  }

  var grabUserTest = {

  }



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
    //changes the background color for demonstration purposes
    $('#user-paint-brush').css("background-color","rgb(255, 133, 168)");
    debugger
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
