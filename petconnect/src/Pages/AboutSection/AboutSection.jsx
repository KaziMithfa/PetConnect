import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About PetConnect
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Learn how PetConnect works and why we are dedicated to helping pets
            find loving homes.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              How PetConnect Works
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              PetConnect is a platform that connects pets in need of a home with
              caring individuals and families. Users can browse pets by
              category, view detailed information, and choose the perfect
              companion based on their preferences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our simple and user-friendly process makes it easy to explore,
              connect, and take the first step toward adoption.
            </p>
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why We Created This Platform
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every year, countless pets are left without proper care or a safe
              home. PetConnect was created to reduce this gap by making pet
              adoption more accessible, transparent, and compassionate.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to encourage responsible adoption, raise awareness
              about animal welfare, and give every pet the chance to live a
              happy and healthy life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
