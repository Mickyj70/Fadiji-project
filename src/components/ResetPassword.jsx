/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user came from password reset email
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");

    if (!accessToken) {
      setMessage(
        "Invalid or expired reset link. Please request a new password reset."
      );
      setIsSuccess(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setIsSuccess(false);
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      setIsSuccess(false);
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setMessage(error.message);
        setIsSuccess(false);
      } else {
        setMessage(
          "Password updated successfully! Redirecting to dashboard..."
        );
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      setMessage("An error occurred while updating your password");
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
            Create your new password
          </h2>
          <ul className="list-none p-0">
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Choose a strong password
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Minimum 6 characters required
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Secure encryption used
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Instant access after reset
            </li>
          </ul>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="relative z-20 flex items-center justify-center lg:justify-end flex-1 max-w-lg lg:mr-24 lg:mb-12 w-full">
        <div className="bg-white p-6 lg:p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-2 text-gray-800 text-center">
            Set New Password
          </h3>
          <p className="text-gray-500 mb-6 lg:mb-8 text-center text-sm">
            Enter your new password below
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
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors text-gray-900"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors text-gray-900"
                placeholder="Confirm new password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Updating Password..." : "Update Password"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Remember your password?{" "}
              <Link
                to="/signin"
                className="text-emerald-600 no-underline font-medium hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
