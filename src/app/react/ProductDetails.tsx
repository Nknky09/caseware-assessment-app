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
      <div className="p-4 mt-10 ml-10">
        <h2 className="text-2xl font-semibold mb-4">Product does not exist</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleBack}
        >
          Back to All Products
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 mt-10 ml-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">
        <strong>Price:</strong>{" "}
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleBack}
      >
        Back to All Products
      </button>
    </div>
  );
};
