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
  .enter()
  .append('div')
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
  .enter()
  .append('div')
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
  .exit()
  .remove();

selection
  .style("height", d => d + "px")
  .style("background-color", color(iteration++));

/**
 * 4. Updating existing data
 */
var updatedData = [80, 100, 120];
console.log(updatedData);

var selection = parent.selectAll("div.demo-box");
selection.data(updatedData)
  .style("height", d => d + "px")
  .style("background-color", color(iteration++));

/**
 * 5. Combining all operations together
 */
function renderBars(newData) {
  var newSelection = parent.selectAll("div.demo-box").data(newData);
  console.log(`newSelection: ${newSelection}`);
  
  var enterSelection = newSelection
    .enter()
    .append('div')
      .classed("demo-box", true)
      .style("height", d => d + "px")
      .style("background-color", color(iteration++));
  console.log(`enterSelection: ${enterSelection}`);
  
  var exitSelection = newSelection.exit().remove();
  console.log(`exitSelection: ${exitSelection}`);
  
  enterSelection.merge(newSelection)
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
