import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        setMessage(error.message);
        setIsSuccess(false);
      } else {
        setMessage(
          "Check your email for the password reset link. If you don't see it, check your spam folder."
        );
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      setMessage("An error occurred while sending the reset email");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-between min-h-screen w-screen font-sans bg-cover bg-center bg-no-repeat fixed top-0 left-0 right-0 bottom-0 p-8 lg:flex-row flex-col lg:gap-0 gap-8"
      style={{ backgroundImage: "url('./background.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-10"></div>

      {/* Left side - Info section */}
      <div className="relative z-20 text-white max-w-md flex-1 lg:block hidden">
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Reset your password securely
          </h2>
          <ul className="list-none p-0">
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Secure password reset process
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Email verification required
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Quick and easy process
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              24/7 support available
            </li>
          </ul>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="relative z-20 flex items-center justify-center lg:justify-end flex-1 max-w-lg lg:mr-24 lg:mb-12 w-full">
        <div className="bg-white p-6 lg:p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-2 text-gray-800 text-center">
            Reset Password
          </h3>
          <p className="text-gray-500 mb-6 lg:mb-8 text-center text-sm">
            Remember your password?{" "}
            <Link
              to="/signin"
              className="text-emerald-600 no-underline font-medium hover:underline"
            >
              Sign in here
            </Link>
          </p>

          {message && (
            <div
              className={`p-3 rounded-lg mb-4 text-sm text-center ${
                isSuccess
                  ? "bg-emerald-50 border border-emerald-200 text-emerald-600"
                  : "bg-red-50 border border-red-200 text-red-600"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors text-gray-900"
                placeholder="Enter your email address"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending Reset Email..." : "Send Reset Email"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-emerald-600 no-underline font-medium hover:underline"
              >
                Create one here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
