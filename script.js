window.addEventListener('load', function() {
  var typeSelector = document.getElementById("type-selector");
  var tableRows = document.querySelectorAll("table tbody tr");

  typeSelector.addEventListener("change", function() {
      var selectedType = this.value;
      // Loop through all rows and hide those with the wrong type
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
});
