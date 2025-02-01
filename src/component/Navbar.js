import React from "react";


function Navbar({currentPage, handlePageChange}) {
    return (
        <div>
           <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#AboutUs"
          onClick={() => handlePageChange('AboutUs')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'AboutUs' ? 'nav-link active' : 'nav-link'}
        >
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#OurWork"
          onClick={() => handlePageChange('OurWork')}
          // Check to see if the currentPage is `OurWork`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'OurWork' ? 'nav-link active' : 'nav-link'}
        >
          Our work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#ContactUs"
          onClick={() => handlePageChange('ContactUs')}
          // Check to see if the currentPage is `ContactMe`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'ContactUs' ? 'nav-link active' : 'nav-link'}
        >
          Contact Us
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Archives"
          onClick={() => handlePageChange('Archives')}
          // Check to see if the currentPage is `Archives`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Archives' ? 'nav-link active' : 'nav-link'}
        >
          Archives
        </a>
      </li>
    </ul>


        </div>
    );
}

export default Navbar;


