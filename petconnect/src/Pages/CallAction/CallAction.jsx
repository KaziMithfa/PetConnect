import React from "react";
import petImg from "../../assets/images/pets.jpg";

const CallAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-100 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={petImg}
              alt="Adopt a pet"
              className="rounded-2xl shadow-lg max-h-[420px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Give a Loving Home to a Pet in Need
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Thousands of pets are waiting for someone like you. By adopting,
              you’re not just gaining a companion — you’re giving a pet a second
              chance at happiness, care, and love.
            </p>

            <p className="mt-4 text-gray-600">
              Make a difference today. Open your heart and home to a furry
              friend who will love you unconditionally.
            </p>

            <div className="mt-8">
              <button className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition">
                Adopt Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAction;
