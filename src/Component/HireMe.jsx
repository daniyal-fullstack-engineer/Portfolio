import React from 'react';

export default function HireMe() {
  const handleViewCV = () => {
    window.open('/src/assets/M.HAMID-RAZA.pdf', '_blank');
  };

  return (
    <section className="call-to-action section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="call-action-content text-center">
              <h2 className="action-title">Have any project in mind?</h2>
              <p>
                I'd love to hear about it! Whether it's a small idea or a grand vision, I'm ready to bring it
                to life. Reach out today and let's make your project a reality!
              </p>
              <ul>
                <li>
                  <button onClick={handleViewCV} className="btn btn-1">
                    View CV
                  </button>
                </li>
                <li>
                  <a href="#contact" className="btn btn-2" data-scroll-nav="6">
                    HIRE ME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
