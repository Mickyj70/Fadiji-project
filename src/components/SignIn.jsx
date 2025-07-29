import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const navigate = useNavigate();

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
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setMessage(error.message);
      } else {
        // Redirect to dashboard or home page
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      setMessage("An error occurred during sign in");
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
          <h3>Welcome back</h3>
          <p>
            New user? <Link to="/signup">Create a free account</Link>
          </p>

          {message && <div className="message">{message}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                />
                <span>Keep me logged in</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" disabled={loading} className="auth-button">
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
