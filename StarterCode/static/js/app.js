// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var output = d3.select("tbody");

console.log(data);

function populate(data)
{
  data.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

populate(tableData);

button.on("click", function() {
  output.html("");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  // console.log(tableData); 


  var filteredData = tableData.filter(row => row.datetime === inputValue);
  populate(filteredData);
});
