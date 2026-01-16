import React from "react";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-orange-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-orange-400 text-white text-center py-8">
          <h2 className="text-3xl font-bold">Join PetConnect</h2>
          <p className="mt-2 text-sm opacity-90">
            Create an account and give pets a better life
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="At least 6 characters"
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer Text */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-green-500 font-semibold cursor-pointer hover:underline">
              Please sign in
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
