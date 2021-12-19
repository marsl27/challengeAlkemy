import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import LayoutPrincipal from './components/Layout/LayoutPrincipal';
import Home from './components/Home/Home';
import Login from './components/Login/Login.jsx';



function App() {
  

  return (
    <BrowserRouter>
      <LayoutPrincipal>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </LayoutPrincipal>
    </BrowserRouter>
  );
}

export default App;
