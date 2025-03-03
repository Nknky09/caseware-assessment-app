import React, { useEffect, useState } from "react";
import { ProductCard, Product } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "./ProductService";
import { Link } from "react-router-dom";

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

  const navigateAngular = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl font-bold dark:text-white mt-10 text-center">
          Caseware Assessment - React App
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

      <div className="mt-10 flex justify-center">
        <button
          className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition-colors duration-200"
          onClick={navigateAngular}
        >
          Go To Angular App
        </button>
      </div>
    </>
  );
};
