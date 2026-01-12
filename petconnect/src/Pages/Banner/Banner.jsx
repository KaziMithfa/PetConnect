import banneImg from "../../assets/images/Banner.png";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-orange-50 to-orange-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Every Pet Deserves <br />
            <span className="text-orange-500">Love, Care & a Home</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            PetConnect helps loving people find pets who need care, affection,
            and a forever home. Your small step can change a life forever.
          </p>

          {/* <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition">
              Learn More
            </button>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={banneImg}
            alt="Happy pet"
            className="rounded-2xl shadow-lg max-h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
