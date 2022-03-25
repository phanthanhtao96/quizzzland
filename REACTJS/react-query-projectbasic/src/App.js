import { Switch, Route } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Products />
        </Route>
        <Route path='/products/:id'>
          <ProductDetail />
        </Route>
        <Route path='/create'>
          <CreateProduct />
        </Route>
        <Route path='/update/:id'>
          <UpdateProduct />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
