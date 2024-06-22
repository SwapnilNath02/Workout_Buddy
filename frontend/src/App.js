import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import { useEffect, useState } from 'react';
import Orb from './components/Orb';

function App() {
  const {user}=useAuthContext()

  // const [orbEffect,setorbEffect]=useState(null);
  // useEffect(()=>{
  //   setorbEffect(<Orb/>);
  // },[]);
  return (
    <div className="App">
      {/* {orbEffect} */}
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home/> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login/> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup/> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
