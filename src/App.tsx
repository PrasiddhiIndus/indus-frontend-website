import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Manpower from './pages/Manpower';
import Trucks from './pages/Trucks';
import Projects from './pages/Projects';
import RepairMaintenance from './pages/RepairMaintenance';
import About from './pages/About';
import NFPA from './pages/NFPA';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Training from './pages/Training';

function App() {
  return (
    <div className="bg-black text-white">
      <Router>
        <Routes>
        
          <Route path="/*" element={
            <>
              <Navbar />
              <main >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/manpower" element={<Manpower />} />
                  <Route path="/trucks" element={<Trucks />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/repair-maintenance" element={<RepairMaintenance/>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/nfpa" element={<NFPA />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#white',
              border: 'px solid #334155',
            },
          }}
        />
      </Router>
    </div>
  );
}

export default App;