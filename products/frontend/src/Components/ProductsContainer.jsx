

import ProductCard from "./ProductCard";

export default function ProductsContainer({
  
  data,
  productQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
  handleOnDelete,
  handleOnEdit,
}) {
  return (
    <div className="ProductsContainer">
      {data.map((product) => {
        const quantityData = productQuantity.find(prod => prod.id === product.id);
        return (
          <ProductCard
           key={product._id}
            _id={product._id}  
            
            productName={product.productName}
            brand={product.brand}
            image={product.image}
            price={product.price}
            productQuantity={quantityData}
            handleAddToQuantity={handleAddToQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            handleAddToCart={handleAddToCart}
             handleOnDelete={() => handleOnDelete(product._id)}
            handleOnEdit={() => handleOnEdit(product._id)}
            
          />
        );
      })}
    </div>
  );
}


