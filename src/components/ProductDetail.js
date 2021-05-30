import cartIcon from "../assets/white-cart.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addItemToCart } from "../redux/cart/actions";
import { useDispatch } from "react-redux";

const ProductDetail = ({ match }) => {
  const productId = match.params.productId;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((data) => data.json())
      .then((product) => setProduct(product));
  }, []);

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <>
      {!product ? (
        <p>Loading...</p>
      ) : (
        <div className="product-detail-outer-container">
          <Link to="/" className="product-detail-link">
            <p>Products/</p>
          </Link>
          <div className="product-detail-inner-container">
            <img className="product-detail-img" src={product.img} />
            <div className="product-detail-inner-right-container">
              <p className="product-detail-name">{product.name}</p>
              <h3 className="product-detail-price">
                {product.price.toFixed(2)} EGP
              </h3>
              <button className="product-detail-btn" onClick={addProductToCart}>
                ADD TO CART{" "}
                <img className="product-detail-icon" src={cartIcon} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
