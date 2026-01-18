import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const pass = form.password.value;

    signIn(email, pass)
      .then((result) => {
        const user = result?.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error?.message);
      });
  };

  return (
    <>
      <Helmet>
        <title> Login</title>
      </Helmet>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-orange-50 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-orange-400 text-white text-center py-8">
            <h2 className="text-3xl font-bold">Welcome to PetConnect</h2>
            <p className="mt-2 text-sm opacity-90">
              Login to adopt, care, and give love
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/photo.jpg"
                  name="image"
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
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Primary Login Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Login
              </button>
            </form>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full py-3 border rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition font-medium">
                Continue with Email
              </button>

              <button className="w-full py-3 border rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition font-medium text-blue-600">
                Continue with Facebook
              </button>
            </div>

            {/* Footer Text */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/signUp"
                className="text-green-500 font-semibold cursor-pointer hover:underline"
              >
                Please sign up first
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
