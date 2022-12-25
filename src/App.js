import logo from './logo.svg';
import './App.css';
import AppNavbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path='card' element={<Card />}/>
      </Routes>
    </div>
  );
}

export default App;
