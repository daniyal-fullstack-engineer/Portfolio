import React from 'react'

export default function Portfolio() {
  return (
    <section
    className="img-gallery section-padding"
    id="portfolio"
    data-scroll-index={3}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title">
            <h4>Portfolio</h4>
            <h2>
              Our latest <span>work</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-8 d-flex justify-content-center sortBtn flex-wrap">
          <a href="#" className="filter-btn active" data-filter="*">
            All
          </a>
          <a href="#" className="filter-btn " data-filter=".wordpress">
            Wordpress
          </a>
          <a href="#" className="filter-btn " data-filter=".React">
            React js
          </a>
          <a href="#" className="filter-btn " data-filter=".web-design">
            Web Design
          </a>
        </div>
      </div>
      <div className="row grid">
        {/* resume-builder */}
        <div className="col-lg-4 col-md-6 col-sm-6 React">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/sD0CRsBv/resume-builder.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/sD0CRsBv/resume-builder.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://app.thepathfinderhub.com/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* roi */}
        <div className="col-lg-4 col-md-6 col-sm-6 React">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/Nf0vV5j3/roi.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/Nf0vV5j3/roi.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://roilevelup.com/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* gym */}
        <div className="col-lg-4 col-md-6 col-sm-6 React">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/2SQ6j1n0/gym.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/2SQ6j1n0/gym.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="http://82.112.240.94:5173/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* superbullon */}
        <div className="col-lg-4 col-md-6 col-sm-6 React">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/Nj3h5Dkt/ecommerence.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/Nj3h5Dkt/ecommerence.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://superbullionwire.com/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* amberoil */}
        <div className="col-lg-4 col-md-6 col-sm-6 wordpress">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/0QChXsR5/amberoil.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/0QChXsR5/amberoil.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.amberoil.ie/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* mcci */}
        <div className="col-lg-4 col-md-6 col-sm-6 wordpress">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/k5K08STb/mcc.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/k5K08STb/mcc.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mcci.ie/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* iki */}
        <div className="col-lg-4 col-md-6 col-sm-6 wordpress">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/C5PXYsxW/iki.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/C5PXYsxW/iki.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ikc.ie/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* peglobal */}
        <div className="col-lg-4 col-md-6 col-sm-6 wordpress">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/DZhtczNY/pegobal.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/DZhtczNY/pegobal.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.peglobal.net/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* digitalmindson */}
        <div className="col-lg-4 col-md-6 col-sm-6 web-design">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/13nhm26M/digitalmindson.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/13nhm26M/digitalmindson.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://digitalmindson.com/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* shortlistme */}
        <div className="col-lg-4 col-md-6 col-sm-6 web-design">
          <div className="single-work text-center mt-30">
            <div className="work-image">
              <img
                src="https://i.postimg.cc/pVCtqDRQ/Shortlistme.png"
                alt="portfolio image"
              />
            </div>
            <div className="work-overlay">
              <div className="work-content">
                <h3 className="work-title">Product Design</h3>
                <ul>
                  <li>
                    <a
                      href="https://i.postimg.cc/pVCtqDRQ/Shortlistme.png"
                      className="image-popup"
                    >
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://shortlistme.com/" target="_blank">
                      <i className="fa-solid fa-link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
