// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login/Login";
import UsersList from "./pages/UsersList";
import Register from "./pages/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop/Shop";
import AddProduct from "./pages/AddProduct/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<ShopCategory category="mens" />}></Route>
      <Route
        path="/womens"
        element={<ShopCategory category="womens" />}
      ></Route>
      <Route
        path="/accessories"
        element={<ShopCategory category="accessories" />}
      ></Route>
      <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} />
      </Route>
      {<Route path="/cart" element={<ShoppingCart />}></Route>}
      {<Route path="/login" element={<Login />}></Route>}
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/create" element={<CreateUser />}></Route>
      <Route path="/usersList" element={<UsersList />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/addProduct" element={<AddProduct />}></Route>
      {/* // <Route path="*" element={<div>Page Not Found</div>}></Route>
        {/* <Route path="/user" element={<User />}></Route> */}
    </Routes>
  );
}
