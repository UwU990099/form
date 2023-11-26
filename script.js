// Function to handle form submission
function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;

    // Validate form data
    if (name === '' || address === '' || phone === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row for the table
    var table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Insert data into the table
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = address;
    cell3.innerHTML = phone;

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';

    // Save data to local storage (persistent storage)
    saveDataToLocalStorage();
}

// Function to save data to local storage
function saveDataToLocalStorage() {
    var tableData = [];

    // Get table rows
    var table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    var rows = table.rows;

    // Iterate through rows and store data
    for (var i = 0; i < rows.length; i++) {
        var rowData = {
            name: rows[i].cells[0].innerHTML,
            address: rows[i].cells[1].innerHTML,
            phone: rows[i].cells[2].innerHTML
        };

        tableData.push(rowData);
    }

    // Save data to local storage
    localStorage.setItem('tableData', JSON.stringify(tableData));
}

// Function to load data from local storage on page load
function loadTableData() {
    var storedData = localStorage.getItem('tableData');

    if (storedData) {
        var tableData = JSON.parse(storedData);

        // Populate the table with stored data
        var table = document.getElementById('data-table').getElementsByTagName('tbody')[0];

        for (var i = 0; i < tableData.length; i++) {
            var newRow = table.insertRow(table.rows.length);

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);

            cell1.innerHTML = tableData[i].name;
            cell2.innerHTML = tableData[i].address;
            cell3.innerHTML = tableData[i].phone;
        }
    }
}
