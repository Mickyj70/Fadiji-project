import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";
import "./Auth.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryRegion: "",
    phoneNumber: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            country_region: formData.countryRegion,
            phone_number: formData.phoneNumber,
          },
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Check your email for verification link!");
      }
    } catch (error) {
      setMessage("An error occurred during sign up");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="info-section">
          <h2>Get informed on Lassa fever outbreak</h2>
          <ul>
            <li> Molestudae lacutis tristique nec elit a vitae.</li>
            <li> Molestudae lacutis tristique nec elit a vitae.</li>
            <li> Molestudae lacutis tristique nec elit a vitae.</li>
            <li> Molestudae lacutis tristique nec elit a vitae.</li>
          </ul>
        </div>
      </div>

      <div className="auth-form-container">
        <div className="auth-form">
          <h3>Create an account</h3>
          <p>
            Existing user? <Link to="/signin">Log into your account</Link>
          </p>

          {message && <div className="message">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="form-row">
              <select
                name="countryRegion"
                value={formData.countryRegion}
                onChange={handleChange}
                required
              >
                <option value="">Country/Region</option>
                <option value="US">United States</option>
                <option value="NG">Nigeria</option>
                <option value="UK">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+234 000 000 0000"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />

            <label className="checkbox-container">
              <input type="checkbox" required />
              <span>Keep me logged in</span>
            </label>

            <button type="submit" disabled={loading} className="auth-button">
              {loading ? "Creating Account..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
