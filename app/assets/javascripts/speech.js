

$(document).ready(function() {
  $( "#user-search-input" ).autocomplete({
    minLength: 0,
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
        $.ajax({
          type: 'GET',
          url: '/highlights/' + 100000000000,
          data: {data: {user_id: object.item.user_id, speech_id: object.item.speech_id}}
        });
        event.preventDefault();
      return false;
    }
  }).autocomplete( "instance" )._renderItem = function( ul, item ) {
    return $( "<li>" )
      .append( "<div>" + item.user_full_name + "</div>" )
      .appendTo( ul );
  };


  if (gon.snippets){
    $.ajax({
      type: 'GET',
      url: '/highlights/' + gon.highlight_id,
      data: {data: {user_id: gon.user_id, speech_id: gon.speech_id}}
    })
  } else {
    //need to refactor later when there is more time - also this is duplicated
    $("#quick-access-toggle-box").append("<div class='row'><div class='col-lg-12 col-md-12 col-sm-12'><button id='add-highlights-button' type='button' class='btn btn-default btn-mini btn-block'>Add Highlights</button></div></div>")
  }

  $(document).on("click", "#add-highlights-button", function(e){
    console.log("clicked add-highlights-button");
    $.ajax({
      type: 'POST',
      url: "/highlights",
      data: {data: {snippets: JSON.stringify("[]"), speech_id: gon.speech_id}}
    });
  });

  $(document).on("click", "#delete-highlights-button", function(){
    console.log("clicked delete-highlights-button");
    $.ajax({
      type: 'DELETE',
      url: "/highlights/" + gon.highlight_id,
      data: {data: {speech_id: gon.speech_id}}
    });
  });



  //check box to retreive highlights and change check - incomplete
  //need to add user_id attribute with in on each row in order to retrieve
  // $(document).on("click", "#check-user-button", function(){
  //   console.log("clicked check-user-button");
  //   $.each($(".sidebar_user_box_instance .check"), function(){
  //     $(this).html("<i class='fa fa-square-o' aria-hidden='true'></i>");
  //   });
  //   debugger
  //   if (!!this.parentElement.querySelector('.check').querySelector('.fa-check-square-o')){
  //     //if selection is the check square
  //     // clears the select row
  //     this.parentElement.parentElement.parentElement.remove()
  //     //replace existing highlights
  //     $("#main-record-index").html(speechContent)
  //   } else {
  //     // clears the select row
  //     this.parentElement.parentElement.parentElement.remove()
  //   }
  // });



  //x box functionality on user box instances
  $(document).on("click", "#hide-user-button", function(){
    console.log("clicked hide-user-button");
    if (!!this.parentElement.querySelector('.check').querySelector('.fa-check-square-o')){
      //if selection is the check square
      // clears the select row
      this.parentElement.parentElement.parentElement.remove()
      //replace existing highlights
      $("#main-record-index").html(speechContent)
    } else {
      // clears the select row
      this.parentElement.parentElement.parentElement.remove()
    }
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
})







  // var ready;
  // ready = (function() {
  //
  // }
  //
  // $(document).ready(ready);
  // $(document).on('page:load', ready);
