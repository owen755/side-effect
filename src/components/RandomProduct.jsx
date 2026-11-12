import { useState, useEffect } from 'react';
import './RandomProduct.css'; // Importing the dedicated CSS file

const RandomProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 // The updated function that performs the fetch request
  const fetchProduct = async () => {
    setLoading(true);
    try {
      // Generate a random ID between 1 and 30
      const randomId = Math.floor(Math.random() * 30) + 1;
      const response = await fetch(`https://dummyjson.com/products/${randomId}`);
      const data = await response.json();
      
      // We now know for sure 'data' is a single product object
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  // ... (keep your useEffect and loading/error checks exactly the same) ...

  // Updated return with fallback checks just in case data is missing
  return (
    <div className="product-card">
      <h2 className="product-title">{product?.title || "Mystery Item"}</h2>
      
      {product?.thumbnail && (
        <img 
          className="product-image" 
          src={product.thumbnail} 
          alt={product.title || "Product"} 
        />
      )}
      
      <p className="product-description">
        {product?.description || "No description available for this product."}
      </p>
      
      <p className="product-price">
        <strong>Price:</strong> ${product?.price || "0.00"}
      </p>
      
      <button className="fetch-button" onClick={fetchProduct}>
        Show Another Product
      </button>
    </div>
  );
}
export default RandomProduct;