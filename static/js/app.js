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
    }
    );
});
}

