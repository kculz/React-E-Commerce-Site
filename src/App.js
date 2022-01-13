import './App.css'

import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import './components/ProductsPage/ProductsPage.css';
import ProductView from './components/ProductsPage/ProductView';
import ProductsView from './components/ProductsPage/ProductsView';

function App() {
  return (
  <div>
    
   
      <Router>
     <Navbar /> 
     <ProductsView />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductView />} />
      </Routes>
      </Router>
    
      <Footer />
  </div>
  );
}

export default App;
