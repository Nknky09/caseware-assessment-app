import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "./ProductCard";
import { fetchProductById } from "./ProductService";

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const productData = await fetchProductById(Number(id));
      setProduct(productData);
    };
    getProduct();
  }, [id]);

  const handleBack = () => {
    navigate("/products");
  };

  if (!product) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>Product does not exist</h2>
        <button onClick={handleBack}>Back to All Products</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong>{" "}
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <button onClick={handleBack}>Back to All Products</button>
    </div>
  );
};
