import "./services.css";

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <h1>Bespoke Luxury <br /> Services</h1>
        <p>Elevating your shopping journey with personalized care and seamless convenience. Discover the pinnacle of hospitality at Magneto Mall.</p>
      </section>

      <section className="services-grid">
        {/* Concierge */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7a6 6 0 1112 0v.7c0 2.017.67 3.879 1.8 5.371a3.356 3.356 0 01-4.708 4.697 3.356 3.356 0 01-3.235-2.036z" />
            </svg>
          </div>
          <div className="service-info">
            <h3>Concierge Desk</h3>
            <p>Our dedicated ambassadors are here to assist with dining reservations, movie bookings, and general inquiries to ensure your visit is effortless.</p>
          </div>
        </div>

        {/* Valet Parking */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.806H8.044a2.056 2.056 0 00-1.58.806c-1.22 1.513-2.13 3.265-2.704 5.16a.962.962 0 00.125.79c.142.222.385.352.645.352h1.125m14.493-1.124a18.158 18.158 0 01-10.993 0m9.974-2.886c.071.554-.254 1.085-.81 1.143a18.067 18.067 0 01-14.708 0c-.556-.058-.881-.59-.81-1.144M18.618 10.709c-.142-.222-.385-.352-.645-.352h-2.25a1.125 1.125 0 00-1.125 1.125v.75" />
            </svg>
          </div>
          <div className="service-info">
            <h3>Valet Parking</h3>
            <p>Enjoy a grand arrival with our professional valet team. Simply drive up to our main entrance and let us handle the rest.</p>
          </div>
        </div>

        {/* Hands-free Shopping */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785 0.5.5 0 00.312.83 8.356 8.356 0 003.501-1.103 0.759 0.759 0 01.512-.045c1.42.368 2.91.562 4.439.562z" />
            </svg>
          </div>
          <div className="service-info">
            <h3>Porter Service</h3>
            <p>Our "Hands-free Shopping" service allows you to continue exploring while we collect and store your bags securely.</p>
          </div>
        </div>

        {/* Plaza Suites */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <div className="service-info">
            <h3>Plaza Suites</h3>
            <p>Exclusive, private spaces for discreet shopping, relaxation, and high-end dining experiences away from the crowd.</p>
          </div>
        </div>

        {/* Buggy Service */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="service-info">
            <h3>Electric Buggies</h3>
            <p>Effortless transit across our grand plazas. Our luxury electric buggies are available for quick and comfortable movement.</p>
          </div>
        </div>

        {/* Wi-Fi */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
          </div>
          <div className="service-info">
            <h3>Complimentary Wi-Fi</h3>
            <p>Stay connected with high-speed, seamless internet across all common areas of the plaza. Simply connect and enjoy.</p>
          </div>
        </div>

        {/* First Aid */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="service-info">
            <h3>First Aid & Medical</h3>
            <p>Your well-being is our priority. Professional first-aid assistance and emergency medical support are available 24/7.</p>
          </div>
        </div>

        {/* General Assistance */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </div>
          <div className="service-info">
            <h3>General Assistance</h3>
            <p>From lost and found support to general wayfinding and mall queries, our info desks are positioned for your convenience.</p>
          </div>
        </div>

        {/* Wheelchair Assistance */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a1 1 0 100 2 1 1 0 000-2zm-1 4v5l-3 3m4-8h3m-3 8a5 5 0 110-10 5 5 0 010 10zm0 0v2m0 2h.01" />
              <circle cx="12" cy="19" r="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6m-3-4v4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 17.5A5.5 5.5 0 0112 13h4l1.5 4" />
            </svg>
          </div>
          <div className="service-info">
            <h3>Wheelchair Assistance</h3>
            <p>Complimentary wheelchairs are available at all entry points. Our trained staff provide dedicated mobility support to ensure every guest navigates the mall with complete ease and dignity.</p>
          </div>
        </div>

        {/* Baby Carriages */}
        <div className="service-card">
          <div className="service-icon-box">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h13a5 5 0 015 5v1H3v-6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 16v1m9 0v1" />
              <circle cx="6" cy="18.5" r="1.5" />
              <circle cx="15" cy="18.5" r="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10V7a2 2 0 012-2h5l3 5" />
            </svg>
          </div>
          <div className="service-info">
            <h3>Baby Carriages</h3>
            <p>Luxury strollers and baby carriages are available on complimentary loan from our Guest Services desk. Shop in comfort while your little ones travel in style throughout the mall.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
