import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';


import AddAReview from './Pages/Home/AddAReview/AddAReview';
import Footer from './Pages/Shared/Footer/Footer';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Users from './Pages/Dashboard/Users/Users';

import AllOrders from './Pages/Dashboard/AllOrders/AllOrders';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import AddNewReview from './Pages/Dashboard/AddNewReview/AddNewReview';
import Blog from './Pages/Blog/Blog';


function App() {
  return (
    <div  >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="MyPortfolio" element={<MyProfile></MyProfile>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="addreview" element={<AddAReview />}></Route>




        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        } >


          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<Users></Users>}></Route>

          <Route path="allorders" element={<AllOrders />}></Route>
          <Route path="manageproducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          {/* <Route path="addreview" element={<AddAReview></AddAReview>}></Route> */}
          <Route path="addreview" element={<AddNewReview></AddNewReview>}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>


        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
