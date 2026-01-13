import React from "react";

const WhyAdopt = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Adopt a Pet?
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Adopting a pet is a life-changing decision that brings joy,
            companionship, and purpose — both for you and the pet.
          </p>
        </div>

        {/* Description Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Save a Life
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Many pets are waiting in shelters for a second chance. By
              adopting, you provide them with a safe home, proper care, and the
              love they deserve.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Gain a Loyal Companion
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Adopted pets often form deep bonds with their owners. They offer
              unconditional love, companionship, and emotional support.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Make a Positive Impact
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Choosing adoption helps reduce overpopulation and supports
              responsible pet ownership, creating a better future for animals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
