import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/dashboard'
           element={
            <RequireAuth>
               <Dashboard></Dashboard>
            </RequireAuth>
          }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
