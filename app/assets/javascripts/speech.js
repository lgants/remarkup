$(document).ready(function() {
  //this will be used for tracking the selected users

  //selectedHighlights will be removed once AJAX requests are submitted after each iteration
  // var selectedHighlights =[];


  //note that i need to send the user id here because on the other side the show action will correspond to self and others
  if (gon.snippets){
    $.ajax({
      type: 'GET',
      url: '/highlights/' + gon.highlight_id,
      data: {data: {user_id: gon.user_id, speech_id: gon.speech_id}}
    })
  } else {
    //need to refactor later when there is more time
    $("#quick-access-toggle-box").append("<div class='row'><div class='col-lg-12 col-md-12 col-sm-12'><button id='add-highlights-button' type='button' class='btn btn-default btn-mini btn-block'>Add Highlights</button></div></div>")
  }

  $('#add-highlights-button').on('click', function(e){
    console.log("clicked add-highlights-button");
    $.ajax({
      type: 'POST',
      url: "/highlights",
      data: {data: {snippets: JSON.stringify("[]"), speech_id: gon.speech_id}}
    });
  });


  $("#content-div p").on('mouseup', function(){
    console.log("clicked content div p", this);
    var result = getSelectionCharOffsetsWithin(this);
    $.ajax({
      type: "PATCH",
      url: "/highlights/" + gon.highlight_id,
      data: {data: {snippets: `[${result.start},${result.end}]`, speech_id: gon.speech_id}}
    });
  })


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



  $("#delete-highlights-button").click(function(event){
    var url = window.location.href
    var speechId = url.substring(url.lastIndexOf("/") + 1, url.length);
    $.ajax({
      type: 'DELETE',
      url: "/highlights/" + gon.highlight_id,
      data: {data: {speech_id: speechId}}
    });
  });


})
