function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");
    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // Insert two new cells in the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Set the text content for each cell
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
  
}
