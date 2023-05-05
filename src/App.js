import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blog from "./components/Page/Blog";
import Category from "./components/Page/Category";
import Login from "./components/Page/Login";
import Page from "./components/Page/Page";
import Product from "./components/Page/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
