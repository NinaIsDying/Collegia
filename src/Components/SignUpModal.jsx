import React, { useState } from "react";

function SignUpModal({ onClose }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    companyName: "",
    course: "",
    organization: "",
    department: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!form.userType) {
      newErrors.userType = "Please select a user type";
    }
    
    if (form.userType === "coordinator" && !form.companyName.trim()) {
      newErrors.companyName = "Company name is required for coordinators";
    }
    
    if (form.userType === "student") {
      if (!form.course.trim()) {
        newErrors.course = "Course is required for students";
      }
      if (!form.organization.trim()) {
        newErrors.organization = "Organization is required for students";
      }
    }
    
    if (form.userType === "faculty" && !form.department.trim()) {
      newErrors.department = "Department is required for faculty";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      alert("✅ Account created successfully!");
      onClose();
    }, 1500);
  };

  const renderUserTypeFields = () => {
    switch (form.userType) {
      case "coordinator":
        return (
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Company Name *
            </label>
            <input
              name="companyName"
              placeholder="Enter your company name"
              style={{
                width: "100%",
                border: "2px solid #d1d5db",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                outline: "none",
                transition: "border-color 0.2s",
                ...(errors.companyName && { borderColor: "#ef4444" })
              }}
              value={form.companyName}
              onChange={handleChange}
            />
            {errors.companyName && (
              <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.companyName}</p>
            )}
          </div>
        );
      
      case "student":
        return (
          <>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
                Course *
              </label>
              <input
                name="course"
                placeholder="e.g., Computer Science, Architecture"
                style={{
                  width: "100%",
                  border: "2px solid #d1d5db",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  ...(errors.course && { borderColor: "#ef4444" })
                }}
                value={form.course}
                onChange={handleChange}
              />
              {errors.course && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.course}</p>
              )}
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
                Organization *
              </label>
              <input
                name="organization"
                placeholder="e.g., College of Computer Studies, College of Engineering and Architecture"
                style={{
                  width: "100%",
                  border: "2px solid #d1d5db",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  ...(errors.organization && { borderColor: "#ef4444" })
                }}
                value={form.organization}
                onChange={handleChange}
              />
              {errors.organization && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.organization}</p>
              )}
            </div>
          </>
        );
      
      case "faculty":
        return (
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Department *
            </label>
            <input
              name="department"
              placeholder="e.g., College of Computer Studies, College of Engineering and Architecture"
              style={{
                width: "100%",
                border: "2px solid #d1d5db",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                outline: "none",
                transition: "border-color 0.2s",
                ...(errors.department && { borderColor: "#ef4444" })
              }}
              value={form.department}
              onChange={handleChange}
            />
            {errors.department && (
              <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.department}</p>
            )}
          </div>
        );
      
      default:
        return null;
    }
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
      padding: "3rem",
      paddingRight: "4rem",
      width: "100%",
      maxWidth: "28rem",
      maxHeight: "90vh",
      overflowY: "auto",
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
    select: {
      width: "100%",
      border: "2px solid #d1d5db",
      padding: "0.75rem",
      borderRadius: "0.5rem",
      outline: "none",
      transition: "border-color 0.2s",
      backgroundColor: "white",
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
          <h2 style={modalStyles.title}>Join Collegia</h2>
          <p style={modalStyles.subtitle}>Create your account to get started</p>
        </div>

        <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Username *
            </label>
            <input
              name="username"
              placeholder="Choose a username"
              style={{
                ...modalStyles.input,
                ...(errors.username && { borderColor: "#ef4444" })
              }}
              value={form.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p style={modalStyles.errorText}>{errors.username}</p>
            )}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Email *
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              style={{
                ...modalStyles.input,
                ...(errors.email && { borderColor: "#ef4444" })
              }}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p style={modalStyles.errorText}>{errors.email}</p>
            )}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Role *
            </label>
            <select
              name="userType"
              style={{
                ...modalStyles.select,
                ...(errors.userType && { borderColor: "#ef4444" })
              }}
              value={form.userType}
              onChange={handleChange}
            >
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="coordinator">Coordinator</option>
              <option value="faculty">Faculty</option>
            </select>
            {errors.userType && (
              <p style={modalStyles.errorText}>{errors.userType}</p>
            )}
          </div>

          {renderUserTypeFields()}

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Password *
            </label>
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              style={{
                ...modalStyles.input,
                ...(errors.password && { borderColor: "#ef4444" })
              }}
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={modalStyles.errorText}>{errors.password}</p>
            )}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.25rem" }}>
              Confirm Password *
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              style={{
                ...modalStyles.input,
                ...(errors.confirmPassword && { borderColor: "#ef4444" })
              }}
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p style={modalStyles.errorText}>{errors.confirmPassword}</p>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", fontSize: "0.875rem" }}>
            <input type="checkbox" style={{ marginRight: "0.5rem", marginTop: "0.25rem" }} required />
            <span style={{ color: "#4b5563" }}>
              I agree to the{" "}
              <a href="#" style={modalStyles.link}>Terms of Service</a>{" "}
              and{" "}
              <a href="#" style={modalStyles.link}>Privacy Policy</a>
            </span>
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
                Creating account...
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "#4b5563" }}>
            Already have an account?{" "}
            <button style={modalStyles.link}>Sign in here</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;