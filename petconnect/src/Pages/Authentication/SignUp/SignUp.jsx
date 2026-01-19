import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data?.email, data?.password)
      .then((result) => {
        const user = result?.user;

        updateUserProfile(data?.name, data?.image)
          .then(() => {
            toast.success("Account created Successfully");
          })
          .catch((error) => {
            // An error occured
            toast.error("Profile updated fail");
            console.log(error?.message);
          });
      })
      .catch((error) => {
        console.log(error?.message);
        setError(error?.message);
      });
  };

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                {errors.name && (
                  <span className="mt-1 block text-sm text-red-500 font-medium">
                    Name is required
                  </span>
                )}
              </div>

              {/* Profile Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  {...register("image", { required: true })}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                {errors.image && (
                  <span className="mt-1 block text-sm text-red-500 font-medium">
                    Image is required
                  </span>
                )}
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
                  {...register("email", { required: true })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                {errors.email && (
                  <span className="mt-1 block text-sm text-red-500 font-medium">
                    Email is required
                  </span>
                )}
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
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                  })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                {errors.password?.type === "required" && (
                  <span className="mt-1 block text-sm text-red-500 font-medium">
                    Password must required
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="mt-1 block text-sm text-red-500 font-medium">
                    Password must be 8 characters long
                  </span>
                )}

                {errors.password?.type === "maxLength" && (
                  <span className="mt-1 block text-sm text-red-500 font-medium">
                    Password must not more than 20 characters
                  </span>
                )}

                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 text-sm">
                    Password must have one upperCase Letter, one special
                    character and one number
                  </span>
                )}
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Create Account
              </button>
            </form>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Footer Text */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-500 font-semibold cursor-pointer hover:underline"
              >
                Please sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
