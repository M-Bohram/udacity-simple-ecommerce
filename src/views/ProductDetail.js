import ProductDetailComp from "../components/ProductDetail";
import Nav from "../components/Nav";

const ProductDetail = ({ match }) => {
  return (
    <>
      <Nav showCart />
      <ProductDetailComp match={match} />
    </>
  );
};

export default ProductDetail;
