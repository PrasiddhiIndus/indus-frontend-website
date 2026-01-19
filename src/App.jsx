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



import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RoutingProvider, useRouting } from './contexts/RoutingContext';
import { preloadImages } from './utils/imagePreloader';
import { getPageImages } from './utils/pageImages';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Direct imports - no lazy loading
import Home from './pages/Home';
import Manpower from './pages/Manpower';
import Trucks from './pages/Trucks';
import Projects from './pages/Projects';
import Products from './pages/Products';
import Training from './pages/Training';
import RepairMaintenance from './pages/RepairMaintenance';
import About from './pages/About';
import NFPA from './pages/NFPA';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Component to render the current page based on state
const PageRenderer = () => {
  const { currentPage } = useRouting();

  useEffect(() => {
    // Preload images in the background without blocking page display
    const pageImages = getPageImages(currentPage);
    if (pageImages.length > 0) {
      // Start preloading immediately but don't wait for it
      preloadImages(pageImages, 5000).catch(error => {
        console.error('Error preloading images:', error);
      });
    }
  }, [currentPage]);

  // Show page immediately - images will load in background
  return (
    <>
      {currentPage === '/' && <Home />}
      {currentPage === '/manpower' && <Manpower />}
      {currentPage === '/trucks' && <Trucks />}
      {currentPage === '/projects' && <Projects />}
      {currentPage === '/products' && <Products />}
      {currentPage === '/training' && <Training />}
      {currentPage === '/repair-maintenance' && <RepairMaintenance />}
      {currentPage === '/about' && <About />}
      {currentPage === '/nfpa' && <NFPA />}
      {currentPage === '/careers' && <Careers />}
      {currentPage === '/blog' && <Blog />}
      {currentPage === '/contact' && <Contact />}
      {!['/', '/manpower', '/trucks', '/projects', '/products', '/training', '/repair-maintenance', '/about', '/nfpa', '/careers', '/blog', '/contact'].includes(currentPage) && <Home />}
    </>
  );
};

function App() {
  return (
    <div className="bg-black text-white">
      <RoutingProvider>
        <Navbar />
        <main>
          <PageRenderer />
        </main>
        <Footer />
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
      </RoutingProvider>
    </div>
  );
}

export default App;
