var colors = ['red', 'green', 'blue', 'cyan', 'magenta', 'orange', 'brown', 'darkcyan'];
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
console.log(initialData);

var selection = parent.selectAll("div.demo-box");
selection.data(initialData)
  .enter()
  .append('div')
    .classed("demo-box", true)
    .style("background-color", color(iteration++))
    .style("height", d => d + "px")
    .text(d => d);

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
    .style("background-color", color(iteration++))
    .style("height", d => d + "px")
    .text(d => d);

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
  .style("background-color", color(iteration++))
  .style("height", d => d + "px")
  .text(d => d);

// Alternative variant: value as a key
//   - removes correct elements
//   - doesn't require re-styling (updating)
// selection.data(reducedData, d => d)
//  .exit()
//  .remove();

/**
 * 4. Updating existing data
 */

var updatedData = [80, 100, 120];
console.log(updatedData);

var selection = parent.selectAll("div.demo-box");
selection.data(updatedData)
  .style("background-color", color(iteration++))
  .style("height", d => d + "px")
  .text(d => d);

/**
 * 5. Combining all operations together
 */
function renderBars(newData) {

  var newSelection = parent.selectAll("div.demo-box").data(newData); // .data(newData, d => d);
  console.log(`newSelection: ${newSelection}`);
  
  var enterSelection = newSelection
    .enter()
    .append('div')
      .classed("demo-box", true)
      .style("background-color", color(iteration++))
      .style("height", d => d + "px")
      .text(d => d);

  console.log(`enterSelection: ${enterSelection}`);
  
  var exitSelection = newSelection.exit().remove();
  console.log(`exitSelection: ${exitSelection}`);
  
  enterSelection.merge(newSelection)
    .style("height", d => d + "px")
    .text(d => d);

}

// Update
renderBars([20, 40, 60]);

// Append
renderBars([20, 40, 60, 30, 100]);

// Delete
renderBars([]);

// Repopulate
renderBars([90, 80, 70, 60, 50, 40, 30]);

// Delete from random positions of the array
renderBars([90, 80, 60, 40, 30]);
