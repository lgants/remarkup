// //ajax tutorial: https://tests4geeks.com/tutorials/using-ajax-in-a-ruby-on-rails-app/
// //helpful to record entire snippets, http://jsfiddle.net/yeyene/GYuBv/2/
// var asdf = [];
// //helpful to record selected text indexes: http://jsfiddle.net/UuDpL/2/
// function getSelectionCharOffsetsWithin(element) {
//     var start = 0, end = 0;
//     var sel, range, priorRange;
//     if (typeof window.getSelection != "undefined") { // all browsers, except IE before version 9
//         range = window.getSelection().getRangeAt(0);
//         priorRange = range.cloneRange();
//         debugger;
//         priorRange.selectNodeContents(element);
//         priorRange.setEnd(range.startContainer, range.startOffset);
//         start = priorRange.toString().length;
//         end = start + range.toString().length;
//     } else if (typeof document.selection != "undefined" &&
//             (sel = document.selection).type != "Control") { // Internet Explorer
//         //IE
//         range = sel.createRange();
//         priorRange = document.body.createTextRange();
//         priorRange.moveToElementText(element);
//         priorRange.setEndPoint("EndToStart", range);
//         start = priorRange.text.length;
//         end = start + range.text.length;
//     }
//     asdf.push([start, end])
//     return {
//         start: start,
//         end: end
//         // x.push([start: start,
//         // end: end])
//     };
// }
//
// // if on this page
// // on click button to add highlights
// // if using IE
//   // on mouse down
//   // ...
//   // on mouse up
// // if using not defunct browser
//   // on mouse down
//   // ...
//   // on mouse up
// //on click button to persist highlights
//
//
//
//
// //
// // function GetSelectedText(){
// //   if (window.getSelection) {  // all browsers, except IE before version 9
// //     var range = window.getSelection();
// //     var y = range.toString();
// //    }
// //    else {
// //     if (document.selection.createRange) { // Internet Explorer
// //       var range = document.selection.createRange();
// //       alert (range.text);
// //       }
// //    }
// // }
// //
// // $(document).ready(function() {
// //   GetSelectedText()
// // })
//
//
//
//
//
//
//
//
//
//
// //record text selection with jquery and ajax
// //source: https://davidwalsh.name/text-selection-ajax
// //other site helpful when changing color http://stackoverflow.com/questions/795600/change-highlight-color
// /* attempt to find a text selection */
// function getSelected() {
// 	if(window.getSelection) { return window.getSelection(); }
// 	else if(document.getSelection) { return document.getSelection(); }
// 	else {
// 		var selection = document.selection && document.selection.createRange();
// 		if(selection.text) { return selection.text; }
// 		return false;
// 	}
// 	return false;
// }
// /* create sniffer */
// $(document).ready(function() {
// 	$('#content-area').mouseup(function() {
// 		var selection = getSelected();
// 		if(selection && (selection = new String(selection).replace(/^\s+|\s+$/g,''))) {
// 			$.ajax({
// 				type: 'post',
// 				url: 'ajax-selection-copy.php',
// 				data: 'selection=' + encodeURI(selection)
// 			});
// 		}
// 	});
// });
//
//
//
//
//
//
//
// function alertSelection() {
//     var mainDiv = document.getElementById("main-record-index");
//     var sel = getSelectionCharOffsetsWithin(mainDiv);
//     alert(sel.start + ": " + sel.end);
// }
//
//
//
//
//
// function GetSelectedText(){
//   if (window.getSelection) {  // all browsers, except IE before version 9
//     var range = window.getSelection();
//     var y = range.toString();
//    }
//    else {
//     if (document.selection.createRange) { // Internet Explorer
//       var range = document.selection.createRange();
//       alert (range.text);
//       }
//    }
// }
//
// $(document).ready(function() {
//   GetSelectedText()
// })
//
//
//
//
// //ajax tutorial: https://tests4geeks.com/tutorials/using-ajax-in-a-ruby-on-rails-app/
// //helpful to record entire snippets, http://jsfiddle.net/yeyene/GYuBv/2/
//
// //helpful to record selected text indexes: http://jsfiddle.net/UuDpL/2/
// function getSelectionCharOffsetsWithin(element) {
//   var start = 0, end = 0;
//   var sel, range, priorRange;
//   if (typeof window.getSelection != "undefined") { // all browsers, except IE before version 9
//     range = window.getSelection().getRangeAt(0);
//     priorRange = range.cloneRange();
//     priorRange.selectNodeContents(element);
//     priorRange.setEnd(range.startContainer, range.startOffset);
//     start = priorRange.toString().length;
//     end = start + range.toString().length;
//   } else if (typeof document.selection != "undefined" &&
//     (sel = document.selection).type != "Control") { // Internet Explorer
//     range = sel.createRange();
//     priorRange = document.body.createTextRange();
//     priorRange.moveToElementText(element);
//     priorRange.setEndPoint("EndToStart", range);
//     start = priorRange.text.length;
//     end = start + range.text.length;
//   }
//   recordHighlights.push([start, end]);
// }
//
//
// function getSelectionCharOffsetsWithin() {
//   alert(recordHighlights);
// }
//
//
// // if on this page
// // on click button to add highlights
// // if using IE
//   // on mouse down
//   // ...
//   // on mouse up
// // if using not defunct browser
//   // on mouse down
//   // ...
//   // on mouse up
// //on click button to persist highlights
//
// $(function() {
//     $("body").click(function(e) {
//         if (e.target.id == "myDiv" || $(e.target).parents("#myDiv").size()) {
//             alert("Inside div");
//         } else {
//            alert("Outside div");
//         }
//     });
// })
//
//
// $(document).ready(function(){
//   // if on desired page - not sure how to make this relative ???
//   if (top.location.pathname === '/speeches/show/'){
//     //declare temporary variable to store highlights
//     let recordHighlights = [];
//     //on click button to add highlights
//
//
//
//     $('add-highlights').on('click', function(){
//       //on mouse down inside the speech-container
//       $('speech-container').on('mousedown', function(){
//         getSelectionCharOffsetsWithin(content);
//       });
//     })
//     //on click button save highlights to the database ALSO clear temp
//     $('save-highlights').on('click', function(){
//       //on mouse up inside the speech-container
//       $('speech-container').on('mouseup', function(){
//         saveSelectionCharOffsetsWithin(content);
//       });
//       //maybe use jquery autosave plugin instead
//     })
//   }
// })
