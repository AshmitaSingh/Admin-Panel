import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import HomePage from "./pages/home/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        {/* Sidebar & Navbar are fixed for every pages */}
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            {/* Other Pages */}
            <HomePage />
            {/* It will take 4 times the unit talen by 'Sidebar'  */}
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId'>
            <User />
          </Route>
          <Route path='/newUser'>
            <NewUser />
          </Route>
          <Route path='/products'>
            <ProductList />
          </Route>
          <Route path='/product/:productId'>
            <Product />
          </Route>
          <Route path='/newProduct'>
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
