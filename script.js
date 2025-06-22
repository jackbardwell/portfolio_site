  async function fetchLatestArenaBlock(channelSlug) {
    const apiUrl = `https://api.are.na/v2/channels/${channelSlug}?per=1`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const latestBlock = data.contents[0];
      const targetDiv = document.querySelector('.sticker_3');

      if (latestBlock.class === 'Text') {
        targetDiv.textContent = latestBlock.content;
      } else {
        targetDiv.textContent = `Latest block is not text (type: ${latestBlock.class})`;
      }

    } catch (error) {
      console.error('Error fetching Are.na content:', error);
    }
}

  // Replace with your channel slug
  fetchArenaChannel('jack-bardwell-i-would-like-to');


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
