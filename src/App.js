import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appoinment from './Pages/Appoinment/Appoinment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import User from './Pages/Dashboard/User';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctos from './Pages/Dashboard/ManageDoctos';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<RequireAuth>
          <Appoinment/>
        </RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard/>
        </RequireAuth>} >
        <Route index element={<MyAppoinment/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
          <Route path="history" element={<MyHistory/>}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
          <Route path="user" element={
            <RequireAdmin>
              <User/>
            </RequireAdmin>
          }></Route>
          <Route path="doctor" element={
            <RequireAdmin>
              <AddDoctor/>
            </RequireAdmin>
          }></Route>
          <Route path="managedoctor" element={
            <RequireAdmin>
              <ManageDoctos/>
            </RequireAdmin>
          }></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
    </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
