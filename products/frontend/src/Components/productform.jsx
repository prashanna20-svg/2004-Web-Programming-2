

import React from "react";

export default function ProductForm({
  isEditing,
  formData,
  handleOnChange,
  handleOnSubmit,
}) {
  return (
    <div className="product-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();       // stop page reload
          handleOnSubmit(e);        // for  calling submit function
        }}
      >
        {/* ID */}
        <div>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleOnChange}
            placeholder="Product ID"
            required
          />
        </div>

        {/* Product Name */}
        <div>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleOnChange}
            placeholder="Product Name"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleOnChange}
            placeholder="Brand"
            required
          />
        </div>

        {/* Price */}
        <div>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleOnChange}
            placeholder="Price"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleOnChange}
            placeholder="Image Link"
            required
          />
        </div>

        <button type="submit">
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}


