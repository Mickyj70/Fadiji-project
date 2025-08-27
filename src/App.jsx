import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import LandingPage from "./components/Landing";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import About from "./components/About";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing page - always accessible */}
          <Route path="/" element={<LandingPage />} />

          {/* About page - always accessible */}
          <Route path="/about" element={<About />} />

          <Route
            path="/signup"
            element={!session ? <SignUp /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/signin"
            element={!session ? <SignIn /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/forgot-password"
            element={
              !session ? <ForgotPassword /> : <Navigate to="/dashboard" />
            }
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/dashboard"
            element={session ? <Dashboard /> : <Navigate to="/signin" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
