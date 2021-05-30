import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((data) => data.json())
      .then((products) => setProducts(products));
  }, []);
  console.log("products", products);
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
