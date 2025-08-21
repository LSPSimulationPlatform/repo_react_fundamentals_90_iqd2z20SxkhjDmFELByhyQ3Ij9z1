import React, { useState } from "react"; 
// Import React and useState hook for managing component state

// Define the ProductListPage component which takes two props:
// products - an array of product objects to display
// onNavigate - a function to change the current page/view
function ProductList({ products, onNavigate }) {
  // Declare a state variable 'filterCode' to hold the current filter text entered by user
  // Initialize it as an empty string
  const [filterCode, setFilterCode] = useState("");

  // Filter the products array to only include products whose productCode
  // includes the filterCode string (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.productCode.toLowerCase().includes(filterCode.toLowerCase())
  );

  // Define inline styles for the Back button
  const backButtonStyle = {
    marginTop: 20,              // Space above the button
    backgroundColor: "gray",    // Gray background color
    color: "white",             // White text color
    padding: "10px 20px",       // Padding inside the button
    border: "none",             // No border
    borderRadius: 5,            // Rounded corners
    cursor: "pointer",          // Pointer cursor on hover
    fontSize: 16,               // Font size
  };

  // Define inline styles for table header cells (<th>)
  const thStyle = {
    padding: "10px",            // Padding inside header cells
    border: "1px solid gray",   // Gray border around header cells
    textAlign: "left",          // Align text to the left
  };

  // Define inline styles for table data cells (<td>)
  const tdStyle = {
    padding: "8px",             // Padding inside data cells
    border: "1px solid gray",   // Gray border around data cells
  };

  // Return the JSX that renders the UI
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4", // Light gray background for container
        width: 900,                 // Fixed width of container
        margin: "20px auto",        // Center horizontally, 20px vertical margin
        padding: 20,                // Padding inside container
        borderRadius: 5,            // Rounded corners
        fontFamily: "Arial, sans-serif", // Font family for text
      }}
    >
      {/* Page title */}
      <h1 style={{ color: "blue" }}>Product List Page</h1>

      {/* Input field for filtering products by product code */}
      <input
        type="search"                      // Search input type
        placeholder="Type Product Code to Filter" // Placeholder text
        value={filterCode}                 // Controlled input tied to filterCode state
        onChange={(e) => setFilterCode(e.target.value)} // Update state on input change
        style={{
          width: "300px",                  // Fixed width
          padding: "8px",                  // Padding inside input
          marginBottom: "15px",            // Space below input
          borderRadius: "5px",             // Rounded corners
          border: "1px solid gray",        // Gray border
        }}
      />

      {/* Table displaying the filtered list of products */}
      <table
        style={{
          width: "100%",                  // Full width of container
          borderCollapse: "collapse",    // Collapse borders to single line
          border: "1px solid gray",       // Gray border around table
        }}
      >
        {/* Table header with column names */}
        <thead style={{ backgroundColor: "#ddd" }}>
          <tr>
            <th style={thStyle}>#</th>               {/* Serial number */}
            <th style={thStyle}>Product Code</th>    {/* Product Code column */}
            <th style={thStyle}>Product Name</th>    {/* Product Name column */}
            <th style={thStyle}>Category</th>        {/* Category column */}
            <th style={thStyle}>Release Date</th>    {/* Release Date column */}
            <th style={thStyle}>Description</th>     {/* Description column */}
          </tr>
        </thead>

        {/* Table body with dynamic rows */}
        <tbody>
          {/* If no products match filter, show a message row */}
          {filteredProducts.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "15px" }}>
                No products found.
              </td>
            </tr>
          ) : (
            /* Map each filtered product to a table row */
            filteredProducts.map((product, index) => (
              <tr key={product.productCode}>  {/* Use productCode as unique key */}
                <td style={tdStyle}>{index + 1}</td>              {/* Row number */}
                <td style={tdStyle}>{product.productCode}</td>    {/* Product Code */}
                <td style={tdStyle}>{product.productName}</td>    {/* Product Name */}
                <td style={tdStyle}>{product.productCategory}</td> {/* Category */}
                <td style={tdStyle}>{product.releaseDate}</td>    {/* Release Date */}
                <td style={tdStyle}>{product.productDescription}</td> {/* Description */}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Button to navigate back to the main page */}
      <button onClick={() => onNavigate("main")} style={backButtonStyle}>
        Back to Main Page
      </button>
    </div>
  );
}

// Export the component so it can be imported and used in other files
export default ProductList;