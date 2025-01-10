import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand">
          Hamid Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <i className="fa-solid fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link active" data-scroll-nav={0}>
                home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" data-scroll-nav={1}>
                about
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" data-scroll-nav={2}>
                services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" data-scroll-nav={3}>
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link" data-scroll-nav={4}>
                testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link" data-scroll-nav={5}>
                pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" data-scroll-nav={6}>
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
