export default function HeroSection() {
    return (
      <section className="bg-[#0B0F19] text-white min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight">
          Elevating Brands<br />
          Through Cutting-Edge<br />
          Web Design.
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-xl">
          Build stunning, responsive, and high-converting digital experiences.
        </p>
  
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            View Portfolio
          </button>
          <button className="bg-[#1D4ED8] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#2563EB] transition">
            Book a Consultation
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-2 rounded-md font-semibold hover:from-indigo-600 hover:to-blue-600 transition">
            Run Audit
          </button>
        </div>
      </section>
    );
  }
  