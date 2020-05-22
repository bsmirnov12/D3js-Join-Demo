var colors = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow'];
function color(i) {
  return colors[i % colors.length];
}
var iteration = 0;

var parent = d3.select("#content");

/**
 * Basic flow
 */

/**
 * 1. Populating the page
 *    Initial state: parent element has no child elements
 */

var initialData = [30, 40, 50];

var selection = parent.selectAll("div.demo-box");
selection.data(initialData)
  .join('div')
    .classed("demo-box", true)
    .style("height", d => d + "px")
    .style("background-color", color(iteration++));

/**
 * 2. Appending data
 */

var extendedData = initialData.concat([60, 70]);
console.log(extendedData);

var selection = parent.selectAll("div.demo-box");
selection.data(extendedData)
  .join('div')
    .classed("demo-box", true)
    .style("height", d => d + "px")
    .style("background-color", color(iteration++));

/**
 * 3. Removing data
 */
var reducedData = extendedData.slice(2);
console.log(reducedData);

var selection = parent.selectAll("div.demo-box");
selection.data(reducedData)
  .join('div')
    .style("height", d => d + "px")
    .style("background-color", color(iteration++));

/**
 * 4. Updating existing data
 */

var updatedData = [80, 100, 120];
console.log(updatedData);

var selection = parent.selectAll("div.demo-box");
selection.data(updatedData)
  .join('div')
    .style("height", d => d + "px")
    .style("background-color", color(iteration++));

/**
 * 5. Combining all operations together
 */
function renderBars(newData) {

  parent.selectAll("div.demo-box")
    .data(newData)
    .join('div')
      .classed("demo-box", true)
      .style("height", d => d + "px")
      .style("background-color", color(iteration++));

}

// Update
renderBars([10, 20, 30]);

// Append
renderBars([40, 50, 10, 20, 30]);

// Delete
renderBars([]);

// Repopulate
renderBars([90, 80, 70, 60, 50, 40, 30]);

// Delete from random positions of the array
renderBars([90, 80, 60, 40, 30, 100]);
