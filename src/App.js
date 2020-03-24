import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import Explore from "./pages/Explore";
import MyAccount from "./pages/MyAccount";
import Property from "./pages/Property";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Revenue from "./pages/Revenue";
import MyProfile from "./pages/MyProfile";
import MyOrder from "./pages/MyOrder";
import Category from "./pages/Category";
import Invoice from "./pages/Invoice";
import Dashboard from "./pages/Dashboard";
import MyFavorite from "./pages/MyFavorite";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/explore" component={Explore} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/invoice/:id" component={Invoice} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/myfavorite" component={MyFavorite} />
        <Route exact path="/myaccount" component={MyAccount} />
        <Route path="/myaccount/property" component={Property} />
        <Route path="/myaccount/category" component={Category} />
        <Route path="/myaccount/orders" component={Orders} />
        <Route path="/myaccount/revenue" component={Revenue} />
        <Route path="/myaccount/users" component={Users} />

        <Route path="/myaccount/myprofile" component={MyProfile} />
        <Route path="/myaccount/myorder" component={MyOrder} />
      </Switch>
    </Router>
  );
}

export default App;
