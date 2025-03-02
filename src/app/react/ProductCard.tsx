import React from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  return (
    <div className="border border-gray-300 p-4 m-4 rounded shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-1/3 md:w-1/4">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="font-bold text-lg mb-4">
        <strong>Price: </strong>{" "}
        {product.price.toLocaleString("en-Us", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => onViewDetails(product)}
      >
        View Details
      </button>
    </div>
  );
};
