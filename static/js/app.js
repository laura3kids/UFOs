// import the data from data.js
const tableData = data; 
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// start new function
function buildTable(data) {
    //clear out any exising data
    tbody.html("");

    data.forEach((dataRow) => {
        //finds the <tbody> tag and adds a table row "tr"
        let row = tbody.append("tr"); 

    //tells to reference one object from the UFO data file and put it in a "datarow" For each "val" means we want one obeject per row
        Object.values(dataRow).forEach((val) => { 
            let cell = row.append("td");
            cell.text(val); 
    });
});
}

// Keep track of all filters
var filters = {};

    // Filter save and update function
    function updateFilters() {
    let inputfilter=d3.select(this);
        
    // Save the element, value, and id of the filter that was changed
    let value = inputfilter.property("value");
    let id = inputfilter.attr("id");

    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object
    if (value) {
        filters[id] = value;
    }
    else {delete filters[id];}

    // Call function to apply all filters and rebuild the table
    filterTable();
    }

function filterTable() {
    //we're telling D3 to look for the #datetime id in the HTML tags 
    //and grab (select) that value and hold it in date form 
// Set the filteredData to the tableData
    let filteredData=tableData
// Loop through all of the filters and keep any data that matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value); });

// Finally, rebuild the table using the filtered Data
buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);





