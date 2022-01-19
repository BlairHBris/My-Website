// Old Function
// function openSection(evt, tabName) {
//     var i, tabcontent, tablinks;
// 		// locates the content on the page that is tagged with tabcontent
//     tabcontent = document.getElementsByClassName("tabcontent");
// 		// Clears style.display for all tabcontents
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
// 		// locates the content on the page that is tagged with tablinks
//     tablinks = document.getElementsByClassName("tablinks");
// 		// Clears "active" from className for all tablinks so all are hidden
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
// 		// Sets the style.display for the tabName you sent
//     document.getElementById(tabName).style.display = "block";
// 		// Sets the event target className to active
//     evt.currentTarget.className += " active";
// }

// Get the tabgroup name
function openSection(evt) {

	var btn = evt.currentTarget;
  var divGroup = btn.parentElement;
  var divGroupId = divGroup.id;

  openSectionForGroup(evt, divGroupId);
}

// Use tabgroup name to clear tabcontents from group and display correct contents
function openSectionForGroup(evt, groupId) {
  var group = document.getElementById(groupId);

  // Get the buttons inside the group
  groupButtons = group.children;
  for (var i = 0; i < groupButtons.length; i++) {
    // Clears "active" from className to represent hidden
    groupButtons[i].className = groupButtons[i].className.replace(" active", "");
    // sets display of tabcontent to none to hide
    document.getElementById(groupButtons[i].innerText).style.display = "none";
  }

  // Sets the style.display for the tabName you sent
  document.getElementById(evt.currentTarget.innerText).style.display = "block";
  // Sets the event target className to active
  evt.currentTarget.className += " active";
}