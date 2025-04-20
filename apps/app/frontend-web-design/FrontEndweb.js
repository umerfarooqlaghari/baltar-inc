import './FrontEndWeb.css';

export default function FrontEndWebDesign() {
  return (
    <div className="frontend-container">

      {/* Hero Section */}
      <section className="section video-hero">
        <video className="background-video" autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="overlay-content">
          <h1>Frontend Web Design & Web Management</h1>
          <p>Crafting intelligent, AI-driven web experiences</p>
        </div>
      </section>

      {/* AI Website Audit Tool */}
      <section className="section">
        <video className="background-video" autoPlay muted loop>
          <source src="/AIAudit.mp4" type="video/mp4" />
        </video>
        <div className="overlay-card">
          <h2>AI Website Audit Tool</h2>
          <p>Checks site performance, SEO, and security vulnerabilities using open-source tools.</p>
        </div>
      </section>

      {/* Client Dashboard */}
      <section className="section">
        <video className="background-video" autoPlay muted loop>
          <source src="/dashboardVideo.mp4" type="video/mp4" />
        </video>
        <div className="overlay-card">
          <h2>Client Dashboard</h2>
          <p>Track project status, upload files, view invoices, and monitor live progress.</p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="section">
        <video className="background-video" autoPlay muted loop>
          <source src="/subscriptionVideo.mp4" type="video/mp4" />
        </video>
        <div className="overlay-card">
          <h2>Subscription-Based Maintenance</h2>
          <p>Auto-billed monthly plans with web updates, backups, and performance checks.</p>
        </div>
      </section>

      {/* SEO Reports */}
      <section className="section">
        <video className="background-video" autoPlay muted loop>
          <source src="/seoVideo.mp4" type="video/mp4" />
        </video>
        <div className="overlay-card">
          <h2>Automated SEO Reports</h2>
          <p>AI-generated insights sent regularly for continued site optimization.</p>
        </div>
      </section>

      {/* Booking System */}
      <section className="section">
        <video className="background-video" autoPlay muted loop>
          <source src="/bookingVideo.mp4" type="video/mp4" />
        </video>
        <div className="overlay-card">
          <h2>Booking System</h2>
          <p>Clients can schedule design consultations directly from your website.</p>
        </div>
      </section>

    </div>
  );
}
