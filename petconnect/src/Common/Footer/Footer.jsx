import React from "react";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {/* Top Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">PetConnect</h3>
          <p className="text-sm leading-relaxed">
            PetConnect is a platform dedicated to helping pets find loving
            homes. We connect caring people with animals in need of adoption and
            a better life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Adopt</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Adopt a Pet</h4>
          <p className="text-sm mb-4">
            Open your heart and home to a pet who needs love and care.
          </p>
          <button className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Adopt Now
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} PetConnect. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
