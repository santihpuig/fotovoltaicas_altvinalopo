// Sidebar

function toggleSidebar(id) {
  var elem = document.getElementById(id);
  var classes = elem.className.split(" ");
  var collapsed = classes.indexOf("collapsed") !== -1;

  var padding = {};

  if (collapsed) {
    // Remove the 'collapsed' class from the class list of the element, this sets it back to the expanded state.
    classes.splice(classes.indexOf("collapsed"), 1);

    padding[id] = 300; // In px, matches the width of the sidebars set in .sidebar CSS class
    map.easeTo({
      padding: padding,
      duration: 1000, // In ms, CSS transition duration property for the sidebar matches this value
    });
  } else {
    padding[id] = 0;
    // Add the 'collapsed' class to the class list of the element
    classes.push("collapsed");

    map.easeTo({
      padding: padding,
      duration: 1000,
    });
  }

  // Update the class list on the element
  elem.className = classes.join(" ");
}

map.on("load", function () {
  toggleSidebar("left");
});
