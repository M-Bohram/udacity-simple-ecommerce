import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Cart from "./views/Cart";
import ProductDetail from "./views/ProductDetail";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
