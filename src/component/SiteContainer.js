import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import OurWork from './Pages/OurWork';
import ContactUs from './Pages/ContactUs';
import Archives from './Pages/Archives';



export default function SiteContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutUs') {
      return <AboutUs /> ;
    }
    if (currentPage === 'OurWork') {
      return <OurWork />;
    }
    if (currentPage === 'Archives') {
      return <Archives />;
    }
    return <ContactUs /> ;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
