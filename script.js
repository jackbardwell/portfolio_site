window.addEventListener('load', function(){
    var typeSelector = document.getElementById("type-selector");
    var tableRows = document.querySelectorAll("table tbody tr");
    dragElement(document.getElementById("card"));

    typeSelector.addEventListener("change", function() {
        var selectedType = this.value;
        // loop through all rows and hide those with the wrong type
        for (var i = 0; i < tableRows.length; i++) {
            var row = tableRows[i];
            var rowType = row.querySelector("td.type").textContent;
            if (selectedType === "all" || selectedType === rowType) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        }
    });


    function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

   // Generate random position for the element when page loads
    elmnt.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    elmnt.style.left = Math.floor(Math.random() * window.innerWidth) + "px";

    elmnt.style.visibility = "visible";


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

        // Add click event listener to the draggable element
    elmnt.addEventListener("click", function() {
        // Remove the element from the DOM when it's clicked
        elmnt.remove();
    });

  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }


}
});
