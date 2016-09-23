function GetSelectedText(){
  if (window.getSelection) {  // all browsers, except IE before version 9
    var range = window.getSelection();
    var y = range.toString();
   }
   else {
    if (document.selection.createRange) { // Internet Explorer
      var range = document.selection.createRange();
      alert (range.text);
      }
   }
}

$(document).ready(function() {
  GetSelectedText()
})




//ajax tutorial: https://tests4geeks.com/tutorials/using-ajax-in-a-ruby-on-rails-app/
//helpful to record entire snippets, http://jsfiddle.net/yeyene/GYuBv/2/

//helpful to record selected text indexes: http://jsfiddle.net/UuDpL/2/
function getSelectionCharOffsetsWithin(element) {
  var start = 0, end = 0;
  var sel, range, priorRange;
  if (typeof window.getSelection != "undefined") { // all browsers, except IE before version 9
    range = window.getSelection().getRangeAt(0);
    priorRange = range.cloneRange();
    priorRange.selectNodeContents(element);
    priorRange.setEnd(range.startContainer, range.startOffset);
    start = priorRange.toString().length;
    end = start + range.toString().length;
  } else if (typeof document.selection != "undefined" &&
    (sel = document.selection).type != "Control") { // Internet Explorer
    range = sel.createRange();
    priorRange = document.body.createTextRange();
    priorRange.moveToElementText(element);
    priorRange.setEndPoint("EndToStart", range);
    start = priorRange.text.length;
    end = start + range.text.length;
  }
  recordHighlights.push([start, end]);
}

// if on this page
// on click button to add highlights
// if using IE
  // on mouse down
  // ...
  // on mouse up
// if using not defunct browser
  // on mouse down
  // ...
  // on mouse up
//on click button to persist highlights

$(function() {
    $("body").click(function(e) {
        if (e.target.id == "myDiv" || $(e.target).parents("#myDiv").size()) {
            alert("Inside div");
        } else {
           alert("Outside div");
        }
    });
})


$(document).ready(function(){
  // if on desired page - not sure how to make this relative ???
  if (top.location.pathname === '/speeches/show/'){
    //declare temporary variable to store highlights
    let recordHighlights = [];
    //on click button to add highlights
    $('add-highlights').on('click', function(){
      getSelectionCharOffsetsWithin(content);
    })
    //on click button save highlights to the database ALSO clear temp
    $('save-highlights').on('click', function(){
      saveSelectionCharOffsetsWithin(content);
      //maybe use jquery autosave plugin instead 
    })
  }
})
