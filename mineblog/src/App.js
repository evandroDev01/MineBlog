import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
