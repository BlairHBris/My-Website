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

// Get the tabgroup name, either tabgroup1 or tabgroup2
function openSection(evt) {

  // The evt is passed on click, first we grab the element that was clicked to be the btn
	var btn = evt.currentTarget;

  // Then we look at what the btn was contained in which we know is a div
  var divGroup = btn.parentElement;

  // Then we grab the div id which is either tabgroup1 or 2
  var divGroupId = divGroup.id;

  // the group name is then passed through to the next function
  openSectionForGroup(evt, divGroupId);
}

// Use tabgroup name to clear tabcontents from group and display correct contents,
// while leaving the other tabgroup unaffected
function openSectionForGroup(evt, groupId) {
  // where the tab group ID used from the prior function
  var group = document.getElementById(groupId);

  // Get the buttons inside the group, all of the buttons(objects) which includes all properties
  // Continues executing until we are out of buttons
  // Finds anything in the div
  groupButtons = group.children;
  for (var i = 0; i < groupButtons.length; i++) {
  
    // button class name would either be tablinks or tablinks active, search for active and remove
    // if there were other functions we would need to remove them as well
    // done for coloration 
    groupButtons[i].className = groupButtons[i].className.replace(" active", "");

    // able to do this since we passed the object before, not the name
    // sets display of tabcontent to none to hide all tabs
    document.getElementById(groupButtons[i].innerText).style.display = "none";
  }

  // Sets the style.display for the tabName you sent, clicked tab will display
  // Due to the on click event line in the html
  document.getElementById(evt.currentTarget.innerText).style.display = "block";
  
  // Sets the event target className to active
  // Allows for coloration
  evt.currentTarget.className += " active";
}