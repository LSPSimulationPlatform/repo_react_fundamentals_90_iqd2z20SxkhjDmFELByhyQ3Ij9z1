// Define the ProductCreate component
function ProductCreate() {

  // Define styles for the "Back to Main Page" button
  const backButtonStyle = {
    marginTop: 15,              // Space above the button
    marginLeft: 15,             // Space to the left
    backgroundColor: "gray",    // Gray background color
    color: "white",             // White text color
    padding: "10px 20px",       // Padding: 10px top/bottom, 20px left/right
    border: "none",             // No border
    borderRadius: 5,            // Rounded corners
    cursor: "pointer",          // Cursor changes to pointer on hover
    fontSize: 16,               // Text size
  };

  // JSX returned by the component
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",        // Light gray background for the form container
        width: 600,                        // Set fixed width of the form
        borderRadius: 5,                   // Rounded corners for the box
        padding: "20px 40px 20px 20px",    // Padding: top/right/bottom/left
        margin: "10px auto",               // Vertical margin and horizontal centering
        fontFamily: "Arial, sans-serif",   // Use Arial font
      }}
    >

      <h1 style={{ color: "blue" }}>Product Create Page</h1>

      <label>Product Name</label><br />
      <input
        type="text"
        placeholder="Product Name"
        style={{
          width: "100%",           // Full width input
          padding: 8,              // Inner space
          marginBottom: 15         // Space below the input
        }}
      /><br />

      <label>Product Code</label><br />
      <input
        type="text"
        placeholder="Product Code"
        style={{
          width: "100%",           // Full width
          padding: 8,              // Inner space
          marginBottom: 15         // Bottom margin
        }}
      /><br />

      <label>Release Date</label><br />
      <input
        type="date"
        style={{
          width: "100%",           // Full width
          padding: 8,              // Padding inside input
          marginBottom: 15         // Margin below input
        }}
      /><br />

      <label>Product Category</label><br />
      <select
        style={{
          width: "100%",           // Full width dropdown
          padding: 8,              // Padding for text space
          marginBottom: 15         // Space below dropdown
        }}
      >
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
        <option>Home & Kitchen</option>
        <option>Toys & Games</option>
        <option>Health & Beauty</option>
      </select><br />

      <label>Product Description</label><br />
      <textarea
        placeholder="Product Description"
        rows={4}
        style={{
          width: "100%",           // Take full width of container
          padding: 8,              // Inner spacing
          marginBottom: 20         // Space below textarea
        }}
      ></textarea><br />

      <button
        style={{
          backgroundColor: "blue",   // Blue background
          color: "white",            // White text
          padding: "10px 20px",      // Padding inside button
          border: "none",            // No border
          borderRadius: 5,           // Rounded corners
          cursor: "pointer",         // Pointer on hover
          fontSize: 16               // Font size
        }}
      >
        Save
      </button>

      <button style={backButtonStyle}>
        Back to Main Page
      </button>

    </div>
  );
}

// Export the component so it can be imported in other files
export default ProductCreate;

  