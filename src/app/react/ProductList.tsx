import React, { useEffect, useState } from "react";
import { ProductCard, Product } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "./ProductService";

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  const handleViewDetails = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Caseware Assessment - React Version</h1>
      <div
        className="product-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};
