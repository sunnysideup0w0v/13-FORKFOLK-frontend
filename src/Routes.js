import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./pages/Account/Account";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartList from "./pages/CartList/CartList";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Account" component={Account} />
          <Route exact path="/shop/" component={ProductList} />
          {/* 아래 3개 라우트는 추후 주석 해제할 예정입니다. */}
          {/* <Route exact path="/product-category/:category" component={ProductList} /> */}
          {/* <Route exact path={`/shop?category=All&page=:page`} component={ProductList} /> */}
          {/* <Route exact path={`/product?category=:category`} component={ProductList} /> */}
          <Route exact path="/shop/:id" component={ProductDetail} />
          <Route exact path="/cart/" component={CartList} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    )
  }
}

export default Routes;
 