import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Navigate } from "react-router"
import LayoutPrincipal from './components/Layout/LayoutPrincipal';
import Home from './components/Home/Home';
import Login from './components/Login/Login.jsx';
import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Search from "./components/SearchBlock/Search"

//localStorage.getItem("token") ? <Home/> : <Login/>}/> PONER EN EL HOME PARA QUE REDIRIJA AL LOGIN SI NO ESTA LOGUEADO

function App() {
  const [isLogged, setIsLogged] = useState(sessionStorage.getItem("log") === "true" ? true : false)
  const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [team, setTeam] = useState([])
  //const [dataHero, setDataHero] = useState()

  return (
    <BrowserRouter>
      <LayoutPrincipal isLogged = {isLogged}>
        <Routes>
          <Route exact path="/challengeAlkemy" element={sessionStorage.getItem("token") ? <Home setData={setData} setLoading={setLoading} setError={setError} team={team} loading={loading} setTeam={setTeam}/> : <Navigate to="/login"/>}/>
          <Route exact path="/login" element={!isLogged ? <Login/> : <Navigate to="/challengeAlkemy"/>}/>
          <Route exact path="/hero/:id" element={sessionStorage.getItem("token") ? <Hero/> : <Navigate to="/login"/>} />
          <Route exact path="/search/:value" element={sessionStorage.getItem("token") ? <Search setData={setData} setLoading={setLoading} setError={setError} data={data} loading={loading} team={team} setTeam={setTeam} /> : <Navigate to="/login"/>} />
        </Routes>
      </LayoutPrincipal>
    </BrowserRouter>
  );
}

export default App;
