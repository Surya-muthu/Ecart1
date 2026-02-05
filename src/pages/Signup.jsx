import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { registerUser, restoreSession } from "../redux/Slice/authSlice"; // We'll create this thunk
import { selectIsLoggedIn } from "../redux/Slice/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const stageRef = useRef(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Restore session if user refreshes the page
  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  // Card parallax effect
  useEffect(() => {
    const stage = stageRef.current;
    const card = stage.querySelector(".card-light");

    const handleMouseMove = (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    };

    stage.addEventListener("mousemove", handleMouseMove);
    stage.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });

    return () => stage.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Redirect if already logged in
  if (isLoggedIn) return <Navigate to="/dashboard" replace />;

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await dispatch(registerUser({ username, email, password })).unwrap();
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err?.detail || err || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Include all your CSS from your original UI */}
      <style>{`
        body, html { background: #fff; }
        .stage { position: relative; width: 100%; min-height: 100vh; display: flex; justify-content: center; align-items: center; perspective: 1500px; overflow: hidden; }
        .floating-circle { position: absolute; border-radius: 50%; opacity: 0.15; animation: float 25s linear infinite; z-index: 0; }
        .floating-circle.circle1 { width: 200px; height: 200px; background: #a78bfa; top: 10%; left: 5%; animation-duration: 35s; }
        .floating-circle.circle2 { width: 150px; height: 150px; background: #60a5fa; top: 60%; left: 70%; animation-duration: 45s; }
        .floating-circle.circle3 { width: 250px; height: 250px; background: #f472b6; top: 40%; left: 20%; animation-duration: 55s; }
        @keyframes float { 0% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-30px) translateX(20px); } 100% { transform: translateY(0px) translateX(0px); } }
        .card-light { max-width: 900px; width: 90%; display: flex; border-radius: 2rem; background: #fff; box-shadow: 0 25px 60px rgba(0,0,0,0.08); overflow: hidden; transition: transform 0.5s ease, box-shadow 0.5s ease; position: relative; z-index: 1; }
        .card-light:hover { box-shadow: 0 35px 80px rgba(0,0,0,0.12); }
        .left-section { flex: 1; background: linear-gradient(135deg, #a78bfa, #60a5fa); color: #fff; display: flex; flex-direction: column; justify-content: center; padding: 3rem; }
        .left-section h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
        .left-section p { font-size: 1rem; line-height: 1.6; }
        .right-section { flex: 1; padding: 3rem; display: flex; flex-direction: column; justify-content: center; }
        .field { width: 100%; height: 3rem; margin-bottom: 1rem; padding: 0 1rem; border-radius: 0.75rem; border: 1px solid #e5e7eb; font-size: 0.95rem; transition: all 0.3s ease; }
        .field:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 12px rgba(99,102,241,0.4); }
        .primary-btn { background: linear-gradient(90deg, #6366f1, #3b82f6); color: white; font-weight: 600; padding: 0.75rem; width: 100%; border-radius: 0.75rem; border: none; cursor: pointer; transition: all 0.3s ease; margin-top: 0.5rem; }
        .primary-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 25px rgba(99,102,241,0.4); }
        .social-container { display: flex; gap: 1rem; margin-top: 1rem; justify-content: center; flex-wrap: wrap; }
        .social-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.65rem 1rem; border-radius: 0.75rem; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 500; cursor: pointer; transition: all 0.2s ease; flex: 1; min-width: 130px; max-width: 180px; }
        .social-btn img { width: 20px; height: 20px; }
        .social-btn:hover { background: #f3f4f6; }
        .login-link { font-size: 0.8rem; text-align: center; margin-top: 1rem; color: #6366f1; cursor: pointer; }
        @media (max-width: 768px) { .card-light { flex-direction: column; } .left-section, .right-section { flex: unset; padding: 2rem; } .left-section h1 { font-size: 2rem; } }
      `}</style>

      <div ref={stageRef} className="stage">
        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>

        <div className="card-light">
          <div className="left-section">
            <h1>Welcome to <br /><span>Aura AI</span></h1>
            <p>Create your account and start building your digital presence with our modern, secure platform.</p>
          </div>

          <div className="right-section">
            <form onSubmit={handleRegister}>
              <input
                type="text"
                className="field"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                className="field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="field"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="primary-btn" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account →"}
              </button>
            </form>

            {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}

            <div className="social-container">
              <button className="social-btn">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" /> Google
              </button>
              <button className="social-btn">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" /> Apple
              </button>
            </div>

            <p onClick={() => navigate("/login")} className="login-link">
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
