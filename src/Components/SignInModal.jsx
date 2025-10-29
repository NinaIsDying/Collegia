import React, { useState } from "react";

function SignInModal({ onClose, setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      onClose();
    }, 1000);
  };

  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(4px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 50,
      padding: "1rem",
    },
    modal: {
      backgroundColor: "white",
      borderRadius: "1rem",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      padding: "2rem",
      paddingRight: "3.5rem",
      width: "100%",
      maxWidth: "28rem",
      position: "relative",
      animation: "fadeIn 0.2s ease-out",
    },
    closeButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      color: "#9ca3af",
      backgroundColor: "transparent",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      transition: "color 0.2s",
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    icon: {
      fontSize: "2.25rem",
      marginBottom: "0.5rem",
    },
    title: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#7B282A",
      marginBottom: "0.5rem",
    },
    subtitle: {
      color: "#4b5563",
    },
    input: {
      width: "100%",
      border: "2px solid #d1d5db",
      padding: "0.75rem",
      borderRadius: "0.5rem",
      outline: "none",
      transition: "border-color 0.2s",
    },
    inputError: {
      borderColor: "#ef4444",
    },
    errorText: {
      color: "#ef4444",
      fontSize: "0.875rem",
      marginTop: "0.25rem",
    },
    submitButton: {
      width: "100%",
      backgroundColor: "#7B282A",
      color: "white",
      padding: "0.75rem",
      borderRadius: "0.5rem",
      border: "none",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    link: {
      color: "#E7C51D",
      cursor: "pointer",
      fontWeight: "600",
      transition: "color 0.2s",
    },
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button
          onClick={onClose}
          style={modalStyles.closeButton}
          onMouseEnter={(e) => e.target.color = "#6b7280"}
          onMouseLeave={(e) => e.target.color = "#9ca3af"}
        >
          ✕
        </button>
        
        <div style={modalStyles.header}>
            {/* Logo this Icon */}
          <div style={modalStyles.icon}>📍</div>
          <h2 style={modalStyles.title}>Welcome Back</h2>
          <p style={modalStyles.subtitle}>Sign in to your Collegia account</p>
        </div>

        <form onSubmit={handleSignIn} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              style={{
                ...modalStyles.input,
                ...(errors.username ? modalStyles.inputError : {})
              }}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p style={modalStyles.errorText}>{errors.username}</p>
            )}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              style={{
                ...modalStyles.input,
                ...(errors.password ? modalStyles.inputError : {})
              }}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={modalStyles.errorText}>{errors.password}</p>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.875rem" }}>
            <label style={{ display: "flex", alignItems: "center", color: "#4b5563" }}>
              <input type="checkbox" style={{ marginRight: "0.5rem" }} />
              Remember me
            </label>
            <a href="#" style={modalStyles.link}>Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...modalStyles.submitButton,
              ...(isLoading && { opacity: 0.5, cursor: "not-allowed" })
            }}
            onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = "#991b1b")}
            onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = "#7B282A")}
          >
            {isLoading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg style={{ animation: "spin 1s linear infinite", marginRight: "0.75rem", height: "1.25rem", width: "1.25rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "#4b5563" }}>
            Don't have an account?{" "}
            <button style={modalStyles.link}>Sign up here</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;