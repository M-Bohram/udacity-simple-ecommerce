import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <div className="product-container">
        <img className="product-img" src={product.img} />
        <p className="product-name">{product.name}</p>
        <h3 className="product-price">{product.price.toFixed(2)} EGP</h3>
      </div>
    </Link>
  );
}

export default Product;
