import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Navigate } from "react-router"
import LayoutPrincipal from './components/Layout/LayoutPrincipal';
import Home from './components/Home/Home';
import Login from './components/Login/Login.jsx';
import { useState } from 'react';
import Hero from './components/Hero/Hero';

//localStorage.getItem("token") ? <Home/> : <Login/>}/> PONER EN EL HOME PARA QUE REDIRIJA AL LOGIN SI NO ESTA LOGUEADO

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("log") === "true" ? true : false)
  //const [dataHero, setDataHero] = useState()

  return (
    <BrowserRouter>
      <LayoutPrincipal isLogged = {isLogged}>
        <Routes>
          <Route exact path="/challengeAlkemy" element={localStorage.getItem("token") ? <Home/> : <Navigate to="/login"/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/hero/:id" element={localStorage.getItem("token") ? <Hero/> : <Navigate to="/login"/>} />
        </Routes>
      </LayoutPrincipal>
    </BrowserRouter>
  );
}

export default App;
