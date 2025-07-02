import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Navbar';
import Contact from './pages/contact';
import Home from './pages/home';
import Services from './pages/services';
import Book from './pages/book';
import Navbar from './Navbar';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        
      </Router>
      
    </div>
  );
}

export default App;
