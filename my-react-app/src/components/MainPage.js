// Define the MainPage component which accepts onSelectPage function as a prop
function MainPage({ onSelectPage }) {
  // Define a reusable style object for all buttons on the page
  const buttonStyle = {
    display: "block",             // Makes the button take full line
    width: "80%",                 // Button width is 80% of its container
    margin: "15px auto",          // Vertical spacing + horizontally centered
    padding: "12px 0",            // Top-bottom padding only
    fontSize: 18,                 // Text size inside the button
    borderRadius: 6,              // Rounded corners
    border: "none",               // No border line
    backgroundColor: "#4D7AFF",   // Blue background
    color: "white",               // White text color
    cursor: "pointer",            // Cursor becomes pointer on hover
  };


  // Return the JSX layout to render
  return (
    <div
      style={{
        maxWidth: 600,               // Maximum width of the container
        margin: "20px auto",         // Center the container horizontally with margin
        padding: 20,                 // Inner space around the content
        fontFamily: "Arial, sans-serif",  // Font style
        backgroundColor: "#f4f4f4",  // Light gray background
        borderRadius: 8,             // Rounded outer border
        textAlign: "center",         // Center-align text inside the div
      }}
    >
      {/* Page title */}
      <h1 style={{ color: "#333" }}>Product Registration - Main Page</h1>


      {/* Button to switch to Create Page, triggers onSelectPage("create") */}
      <button onClick={() => onSelectPage("create")} style={buttonStyle}>
        Product Create Page
      </button>


      {/* Button to switch to Update Page, triggers onSelectPage("update") */}
      <button onClick={() => onSelectPage("update")} style={buttonStyle}>
        Product Update Page
      </button>


      {/* Button to switch to List Page, triggers onSelectPage("list") */}
      <button onClick={() => onSelectPage("list")} style={buttonStyle}>
        Product List Page
      </button>
    </div>
  );
}


// Export MainPage component to be used in other files like App.js
export default MainPage;