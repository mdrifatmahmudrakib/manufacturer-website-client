import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Reviews from './Pages/Home/Reviews/Reviews';
import AddNewReview from './Pages/Dashboard/AddNewReview/AddNewReview';
import AddAReview from './Pages/Home/AddAReview/AddAReview';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div  >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="addreview" element={<AddAReview />}></Route>




        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        } >

          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="addnewreview" element={<AddNewReview></AddNewReview>}></Route>


        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
