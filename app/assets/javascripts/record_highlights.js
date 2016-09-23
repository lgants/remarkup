// // <input type="button" onclick="alertSelection()" unselectable="on" value="Get selection">
// //
// // <div id="main" onmouseup="alertSelection()">
// //
// // <div>hi</div> <div>dude!</div>
// //
// // </div>
// //
// // <p>
// //   Hello World
// // </p>
//
//
//
// var output = [];
//
// function getSelectionCharOffsetsWithin(element) {
//   var start = 0, end = 0;
//   var sel, range, priorRange;
//   if (typeof window.getSelection != "undefined") {
//   	range = window.getSelection().getRangeAt(0)
//     priorRange = range.cloneRange();
//     priorRange.selectNodeContents(element);
//     priorRange.setEnd(range.startContainer, range.startOffset);
//     start = priorRange.toString().length;
//     end = start + range.toString().length;
//   } else if (typeof document.selection != "undefined" &&
//     (sel = document.selection).type != "Control") {
//     range = sel.createRange();
//     priorRange = document.body.createTextRange();
//     priorRange.moveToElementText(element);
//     priorRange.setEndPoint("EndToStart", range);
//     start = priorRange.text.length;
//     end = start + range.text.length;
//   }
//   return {
//     start: start,
//     end: end
//   };
// }
//
// function alertSelection() {
//     var mainDiv = document.getElementById("main");
//     var sel = getSelectionCharOffsetsWithin(mainDiv);
//     output.push("[" + sel.start + ": " + sel.end + "]")
//     alert(output);
// }
