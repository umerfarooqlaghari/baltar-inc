'use client';
import './style.css';

export default function VRPage() {
  const openComingSoon = () => {
    window.open('/coming-soon', '_blank');
  };

  return (
    <div className="vr-container">
      <div className="half left" onClick={openComingSoon}>
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/videos/left.mp4" type="video/mp4" />
        </video>
        <div className="text">
          <h2>Fashion & Accessories</h2>
          <button>Shop now</button>
        </div>
      </div>

      <div className="half right" onClick={openComingSoon}>
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/videos/right.mp4" type="video/mp4" />
        </video>
        <div className="text">
          <h2>Fragrance & Beauty</h2>
          <button>Shop now</button>
        </div>
      </div>

      <div className="center-logo">
        <h1>VR</h1>
      </div>
    </div>
  );
}
