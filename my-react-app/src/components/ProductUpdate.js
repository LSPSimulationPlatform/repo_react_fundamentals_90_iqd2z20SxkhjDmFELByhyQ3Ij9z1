// Import React library and useState hook for component state
import React, { useState } from "react";

// Define the ProductUpdate component and receive props
function ProductUpdate({ products, onUpdateProduct, onNavigate }) {
  // Declare state variables for search input and form fields
  const [productCodeSearch, setProductCodeSearch] = useState(""); // Input to search for a product
  const [productName, setProductName] = useState("");              // Input for product name
  const [productCode, setProductCode] = useState("");              // Input for product code
  const [releaseDate, setReleaseDate] = useState("");              // Input for release date
  const [productCategory, setProductCategory] = useState("Electronics"); // Select category
  const [productDescription, setProductDescription] = useState("");      // Input for description

  // Function to search for a product from list using product code
  const getProductInfo = () => {
    if (!productCodeSearch) {
      alert("Please enter a product code to search."); // Show alert if input is empty
      return;
    }

    // Try to find product by code (case-insensitive)
    const product = products.find(
      (p) => p.productCode.toLowerCase() === productCodeSearch.toLowerCase()
    );

    if (!product) {
      alert("Product not found."); // Show alert if no matching product
      return;
    }

    // Populate the form fields with found product info
    setProductName(product.productName);
    setProductCode(product.productCode);
    setReleaseDate(product.releaseDate);
    setProductCategory(product.productCategory);
    setProductDescription(product.productDescription);
  };

  // Function to handle update logic
  const updateProductHandler = () => {
    if (!productName) {
      alert("Product name is required."); // Validate product name
      return;
    }
    if (!productCode) {
      alert("Product code is required."); // Validate product code
      return;
    }

    // Create the updated product object
    const updated = {
      productName,
      productCode,
      releaseDate,
      productCategory,
      productDescription,
    };

    // Call the update function passed via props
    onUpdateProduct(updated);

    // Notify user of success
    alert("Product updated successfully!");

    // Navigate to product list page
    onNavigate("list");

    // Clear the form and reset all fields
    setProductCodeSearch("");
    setProductName("");
    setProductCode("");
    setReleaseDate("");
    setProductCategory("Electronics");
    setProductDescription("");
  };

  // Button styling shared by both buttons
  const backButtonStyle = {
    marginTop: 15,
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 16,
    marginRight: 10,
  };

  // JSX to render the update form
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",        // Light background
        width: 600,                        // Fixed width
        borderRadius: 5,                   // Rounded corners
        padding: "20px 40px 20px 20px",    // Inner spacing
        margin: "10px auto",               // Centered on the page
        fontFamily: "Arial, sans-serif",   // Font styling
      }}
    >
      {/* Page Title */}
      <h1 style={{ color: "blue" }}>Product Update Page</h1>

      {/* Input field for product code search */}
      <label>Product Code to Search</label>
      <br />
      <input
        type="text"
        value={productCodeSearch} // Controlled input bound to productCodeSearch state
        onChange={(e) => setProductCodeSearch(e.target.value)} // Update state on user input
        placeholder="Enter product code"
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      />
      {/* Search button to fetch product info */}
      <button
        onClick={getProductInfo}
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        Find Product
      </button>

      {/* Divider line */}
      <hr />

      {/* Product Name Field */}
      <label>Product Name</label>
      <br />
      <input
        type="text"
        value={productName} // Controlled input bound to productName state
        onChange={(e) => setProductName(e.target.value)} // Update productName state on input
        placeholder="Product Name"
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      />
      <br />

      {/* Product Code Field */}
      <label>Product Code</label>
      <br />
      <input
        type="text"
        value={productCode} // Controlled input bound to productCode state
        onChange={(e) => setProductCode(e.target.value)} // Update productCode state on input
        placeholder="Product Code"
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      />
      <br />

      {/* Release Date Field */}
      <label>Release Date</label>
      <br />
      <input
        type="date"
        value={releaseDate} // Controlled input bound to releaseDate state
        onChange={(e) => setReleaseDate(e.target.value)} // Update releaseDate state
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      />
      <br />

      {/* Product Category Field */}
      <label>Product Category</label>
      <br />
      <select
        value={productCategory} // Controlled select input bound to productCategory state
        onChange={(e) => setProductCategory(e.target.value)} // Update category state
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      >
        {/* Dropdown options */}
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
        <option>Home & Kitchen</option>
        <option>Toys & Games</option>
        <option>Health & Beauty</option>
      </select>
      <br />

      {/* Product Description Field */}
      <label>Product Description</label>
      <br />
      <textarea
        value={productDescription} // Controlled textarea bound to productDescription state
        onChange={(e) => setProductDescription(e.target.value)} // Update description state
        placeholder="Product Description"
        rows={4}
        style={{ width: "100%", padding: 8, marginBottom: 20 }}
      ></textarea>
      <br />

      {/* Update button to trigger product update */}
      <button onClick={updateProductHandler} style={backButtonStyle}>
        Update
      </button>

      {/* Back button to return to Main Page */}
      <button onClick={() => onNavigate("main")} style={backButtonStyle}>
        Back to Main Page
      </button>
    </div>
  );
}

// Export component to be used in App.js
export default ProductUpdate;