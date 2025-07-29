import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/signin");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to your Dashboard!</h1>
      <p>You are successfully logged in.</p>
      <button
        onClick={handleSignOut}
        style={{
          background: "#dc2626",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "0.375rem",
          cursor: "pointer",
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
