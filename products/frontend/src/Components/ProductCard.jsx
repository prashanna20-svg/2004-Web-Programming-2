

export default function ProductCard({
  _id,
  productName,
  brand,
  image,
  price,
  productQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
  handleOnDelete,
  handleOnEdit,
  
}) {
  return (
    <div className="ProductCard">
      <img src={image} alt={productName} />
      <h3>{productName}</h3>
      <p>{brand}</p>
      <p>{price}</p>
      <button onClick={() => handleOnDelete(_id)}>
  Delete
</button>
<button onClick={() => handleOnEdit(_id)}>Edit</button>
      
      
      <div className="counter-container">
        <button 
       
          onClick={() => handleRemoveQuantity(productQuantity.id)}
        >
          -
        </button>
        <span>{productQuantity?.purchaseQuantity || 0}</span>
        <button 
        
          onClick={() => handleAddToQuantity(productQuantity.id)}
        >
          +
        </button>


      </div>
      
      <button onClick={() => handleAddToCart(productQuantity.id)}>
        Add to Cart
      </button>
    </div>
  );
  //  <p>{price}</p>
}