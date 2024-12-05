import './index.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Mission from './Components/Mission/Mission';
import Contact from './Components/Contact/Contact';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Pending from './Components/Status/Pending';
import Previous from './Components/Status/Previous';


function App() {

  
  
  return (
    <Router>
      <Navbar />

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/pending' element={<Pending />} />
        <Route path='/previous' element={<Previous />} />
        <Route path='/completed/:status' element={<Dashboard />} />

        
      
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;
