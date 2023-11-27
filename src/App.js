import './App.css';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Notfound from './components/Notfound';
import Logueo from './components/Logueo';
import Registro from './components/Registro'
import CerrarSesion from './components/CerrarSesion';

function App() {
  return (

    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='*' element={<Notfound />}></Route>
        <Route path='/logueo' element={<Logueo />}></Route>
        <Route path='/registro' element={<Registro />}></Route>

        <Route path='/cerrar' element={<CerrarSesion />}></Route>
      </Routes>
    </div>

  );
}

export default App;
