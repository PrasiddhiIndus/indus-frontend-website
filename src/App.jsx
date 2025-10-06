// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import Home from './pages/Home';
// import Manpower from './pages/Manpower';
// import Trucks from './pages/Trucks';
// import Projects from './pages/Projects';
// import Products from './pages/Products';
// import Training from './pages/Training';
// import RepairMaintenance from './pages/RepairMaintenance';
// import About from './pages/About';
// import NFPA from './pages/NFPA';
// import Careers from './pages/Careers';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';


// function App() {
//   return (
//     <div className="bg-black text-white">
//       <Router>
//         <Routes>
        

//           <Route path="/*" element={
//             <>
//               <Navbar />
//               <main>
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/manpower" element={<Manpower />} />
//                   <Route path="/trucks" element={<Trucks />} />
//                   <Route path="/projects" element={<Projects />} />
//                   <Route path="/products" element={<Products />} />
//                   <Route path="/training" element={<Training />} />
//                   <Route path="/repair-maintenance" element={<RepairMaintenance />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/nfpa" element={<NFPA />} />
//                   <Route path="/careers" element={<Careers />} />
//                   <Route path="/blog" element={<Blog />} />
//                   <Route path="/contact" element={<Contact />} />
//                 </Routes>
//               </main>
//               <Footer />
//             </>
//           } />
//         </Routes>
//         <Toaster
//           position="top-right"
//           toastOptions={{
//             style: {
//               background: '#1e293b',
//               color: '#ffffff',
//               border: '0px solid #334155',
//             },
//           }}
//         />
//       </Router>
//     </div>
//   );
// }

// export default App;



import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Manpower = lazy(() => import('./pages/Manpower'));
const Trucks = lazy(() => import('./pages/Trucks'));
const Projects = lazy(() => import('./pages/Projects'));
const Products = lazy(() => import('./pages/Products'));
const Training = lazy(() => import('./pages/Training'));
const RepairMaintenance = lazy(() => import('./pages/RepairMaintenance'));
const About = lazy(() => import('./pages/About'));
const NFPA = lazy(() => import('./pages/NFPA'));
const Careers = lazy(() => import('./pages/Careers'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

// Simple loader component (you can replace with a fancy spinner)
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

function App() {
  return (
    <div className="bg-black text-white">
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main>
                  <Suspense fallback={<Loader />}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/manpower" element={<Manpower />} />
                      <Route path="/trucks" element={<Trucks />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/training" element={<Training />} />
                      <Route path="/repair-maintenance" element={<RepairMaintenance />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/nfpa" element={<NFPA />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#ffffff',
              border: '0px solid #334155',
            },
          }}
        />
      </Router>
    </div>
  );
}

export default App;
