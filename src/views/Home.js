import Nav from "../components/Nav";
import ProductList from "../components/ProductList";

function home() {
  return (
    <>
      <Nav showCart />
      <ProductList />
    </>
  );
}

export default home;
