export default function HeroSection() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* 🔁 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🛡️ Stronger Black Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* 🧠 Hero Text */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_0_40px_rgba(255,255,255,1)]">
          Welcome to Baltar Inc
        </h1>
        <p className="mt-4 text-white text-xl md:text-2xl max-w-2xl drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]">
          Crafting Bold, Future-Ready Web Experiences
        </p>
      </div>
    </section>
  );
}
