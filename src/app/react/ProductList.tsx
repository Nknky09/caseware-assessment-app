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
    <div className="p-4">
      <h1 className="text-4xl font-bold dark:text-white mt-10 text-center">
        Caseware Assessment - React Version
      </h1>
      <div className="flex flex-wrap justify-around mt-10">
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
