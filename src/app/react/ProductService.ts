import { Product } from './ProductCard';

const productsData: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'Description for Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20.99,
    description: 'Description for Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30.99,
    description: 'Description for Product 3',
  },
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 1000);
  });
};

export const fetchProductById = (id: number): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData.find((product) => product.id === id));
    }, 1000);
  });
};
