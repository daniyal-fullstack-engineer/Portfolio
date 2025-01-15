import React from 'react';

export default function Pricing() {
  return (
    <section
      className="pricing section-padding"
      id="pricing"
      data-scroll-index={5}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title animate__animated animate__fadeInDown">
              <h4>Pricing</h4>
              <h2>
                Pricing <span>plan</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-plan animate__animated animate__zoomIn" style={{ animationDelay: '0.2s' }}>
              <div className="pricing-header">
                <h3>Basic</h3>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="price">99</span>
                <span className="period">/monthly</span>
              </div>
              <div className="pricing-body">
                <ul>
                  <li><i className="fa-solid fa-check" /> 5GB Bandwidth</li>
                  <li><i className="fa-solid fa-check" /> 1 Free Update</li>
                  <li><i className="fa-solid fa-check" /> High Regulation Printing</li>
                  <li><i className="fa-solid fa-check" /> Branding</li>
                  <li><i className="fa-solid fa-check" /> 2 Free Maintenances</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#contact" className="btn btn-2" data-scroll-nav={6}>Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-plan animate__animated animate__zoomIn" style={{ animationDelay: '0.4s' }}>
              <div className="pricing-header">
                <h3>Premium</h3>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="price">199</span>
                <span className="period">/monthly</span>
              </div>
              <div className="pricing-body">
                <ul>
                  <li><i className="fa-solid fa-check" /> 10GB Bandwidth</li>
                  <li><i className="fa-solid fa-check" /> 3 Free Updates</li>
                  <li><i className="fa-solid fa-check" /> High Regulation Printing</li>
                  <li><i className="fa-solid fa-check" /> 3 Brandings</li>
                  <li><i className="fa-solid fa-check" /> 5 Free Maintenances</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#contact" className="btn btn-1" data-scroll-nav={6}>Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-plan animate__animated animate__zoomIn" style={{ animationDelay: '0.6s' }}>
              <div className="pricing-header">
                <h3>Ultimate</h3>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="price">299</span>
                <span className="period">/monthly</span>
              </div>
              <div className="pricing-body">
                <ul>
                  <li><i className="fa-solid fa-check" /> 20GB Bandwidth</li>
                  <li><i className="fa-solid fa-check" /> 10 Free Updates</li>
                  <li><i className="fa-solid fa-check" /> Priority Regulation Printing</li>
                  <li><i className="fa-solid fa-check" /> 10 Brandings</li>
                  <li><i className="fa-solid fa-check" /> 20 Free Maintenances</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#contact" className="btn btn-2" data-scroll-nav={6}>Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
