
import { useState, useEffect } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";
import axios from "axios";
import ProductForm from "./productform"; 

export default function GroceriesAppContainer() {
  const [productsData, setProductsData] = useState([]);

  const [formData, setFormData] = useState({
    id: "",
    productName: "",
    brand: "",
    price: "",
    image: "",
  });

  const [postResponse, setPostResponse] = useState("");

  //  edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null); 

  //  GET all products 
  const handleProductsDB = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      console.log(response.data);
      setProductsData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    handleProductsDB();
  }, []);

  //  ADD or UPDATE product 
  const handleOnSubmit = async () => {
    try {
      let response;

      if (isEditing && editingId) {
        
        response = await axios.patch(
          `http://localhost:3000/products/${editingId}`,
          formData
        );
        setPostResponse(response.data.message || "Product updated");
      } else {
        
        response = await axios.post(
          "http://localhost:3000/add-product",
          formData
        );
        setPostResponse(response.data.message || "Product added");
      }

      // reset form 
      setFormData({
        id: "",
        productName: "",
        brand: "",
        price: "",
        image: "",
      });
      setIsEditing(false);
      setEditingId(null);

      // refresh list
      handleProductsDB();
    } catch (error) {
      console.error(error.message);
    }
  };

  //  change handler
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  //  DELETE handler
  const handleOnDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/products/${id}`
      );
      setPostResponse(response.data.message || "Product deleted");
      handleProductsDB();
    } catch (error) {
      console.error(error.message);
    }
  };

  // edit handler
  const handleOnEdit = (mongoId) => {
    const item = productsData.find((p) => p._id === mongoId);
    if (!item) return;

    setIsEditing(true);
    setEditingId(mongoId);

    setFormData({
      id: item.id,
      productName: item.productName,
      brand: item.brand,
      price: item.price,
      image: item.image,
    });
  };

  //  2. Product quantity state 
  const [productQuantity, setProductQuantity] = useState([]);

  useEffect(() => {
    if (productsData.length > 0) {
      const initialQuantities = productsData.map((prod) => {
        return {
          id: prod.id,
          purchaseQuantity: 0,
          priceOptions: [parseFloat(prod.price.replace("$", ""))],
          currentPrice: parseFloat(prod.price.replace("$", "")),
        };
      });
      setProductQuantity(initialQuantities);
    }
  }, [productsData]);

  //  Cart state 
  const [cart, setCart] = useState([]);

  const handleAddToQuantity = (productId) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productId) {
        return { ...prod, purchaseQuantity: prod.purchaseQuantity + 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
  };

  const handleRemoveQuantity = (productId) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productId && prod.purchaseQuantity > 0) {
        return { ...prod, purchaseQuantity: prod.purchaseQuantity - 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = productQuantity.find((prod) => prod.id === productId);
    if (productToAdd && productToAdd.purchaseQuantity > 0) {
      const productData = productsData.find((prod) => prod.id === productId);

      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === productId);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity: item.quantity + productToAdd.purchaseQuantity,
                }
              : item
          );
        } else {
          return [
            ...prevCart,
            {
              id: productId,
              product: productData.productName,
              quantity: productToAdd.purchaseQuantity,
              currentPrice: productToAdd.currentPrice,
              image: productData.image,
            },
          ];
        }
      });

      const resetQuantity = productQuantity.map((prod) => {
        if (prod.id === productId) {
          return { ...prod, purchaseQuantity: 0 };
        }
        return prod;
      });
      setProductQuantity(resetQuantity);
    } else {
      alert("Please set quantity greater than 0 before adding to cart");
    }
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleEmptyCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    alert(
      `Thank you for your purchase! Your order total is $${cart
        .reduce((sum, item) => sum + item.quantity * item.currentPrice, 0)
        .toFixed(2)}`
    );
    setCart([]);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart({ id: productId });
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <div>
      <NavBar username="username" cartItemCount={totalCartItems} />

      <div className="GroceriesApp-Container">

<ProductForm
        isEditing={isEditing}
        formData={formData}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
      />
      {postResponse && <p>{postResponse}</p>}

        <ProductsContainer
          data={productsData}
          productQuantity={productQuantity}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
        />

        <CartContainer
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          onEmptyCart={handleEmptyCart}
          onCheckout={handleCheckout}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>

     

      
    </div>
  );
}
