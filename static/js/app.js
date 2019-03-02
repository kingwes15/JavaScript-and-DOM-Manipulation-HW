// from data.js
var tableData = data;

// YOUR CODE HERE!

// Grab the table body
var tbody = d3.select("tbody");

// Write the data into the table
tableData.forEach(item =>{
    // First add a row for each object element
    var addRow = tbody.append("tr");
    // Then write the data into the table
    Object.entries(item).forEach(([key,value]) =>{
        addRow.append("td").text(value);
    })
})

// Grab the Date Filter user form
var filterButton = d3.select("#filter-btn");

// Create an event
filterButton.on("click", function(){
    
    //prevent page from refreshing
    d3.event.preventDefault();
    
    // Caputer the date the user input
    var userDate = d3.select("#datetime")
    var userDateInput = userDate.property("value")
    console.log(userDateInput)

    // Delete old data
    tableData.forEach(item =>{
        /// Delete data from the table so the filtered data can be appened
        Object.entries(item).forEach(([key,value]) =>{
            d3.select("td").remove()
        })
    })

    // Filter the date the user wishes to filter on
    var filteredData = tableData.filter(item => item.datetime === userDateInput)

    // Add filtered data
    filteredData.forEach(item =>{
        // First add a row for each object element
        // d3.select("tr").remove()
        var addRow = tbody.append("tr");
        // Then write the data into the table
        Object.entries(item).forEach(([key,value]) =>{
            // d3.select("td").remove()
            addRow.append("td").text(value);
        })
    })
    // console.log(filteredData)
    // Empty the form
    userDate.property("value","")
})