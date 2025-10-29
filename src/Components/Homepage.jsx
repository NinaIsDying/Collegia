import React, { useState } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

function Homepage({ isLoggedIn, setIsLoggedIn }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "sans-serif",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#E6E6E6",
      color: "#7B282A",
      backdropFilter: "blur(4px)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      position: "relative",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      letterSpacing: "0.05em",
    },
    navCenter: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: "#7B282A",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "color 0.2s",
    },
    navRight: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    buttonPrimary: {
      backgroundColor: "#7B282A",
      color: "white",
      padding: "0.5rem 1.25rem",
      borderRadius: "0.5rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    buttonSecondary: {
      border: "1px solid #7B282A",
      color: "#7B282A",
      padding: "0.5rem 1.25rem",
      borderRadius: "0.5rem",
      fontWeight: "600",
      backgroundColor: "transparent",
      cursor: "pointer",
      transition: "all 0.2s",
    },
    infoSection: {
      padding: "4rem 0",
      background: "#F7F7F7",
      textAlign: "center",
    },
    infoTitle: {
      fontSize: "2.25rem",
      fontWeight: "bold",
      color: "#7B282A",
      marginBottom: "1.5rem",
    },
    infoDescription: {
      color: "#374151",
      maxWidth: "48rem",
      margin: "0 auto 3rem auto",
      fontSize: "1.125rem",
    },
    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: "2rem",
      padding: "0 2.5rem",
    },
    featureCard: {
      padding: "2rem",
      backgroundColor: "white",
      borderRadius: "1rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      borderTop: "4px solid #E7C51D",
      transition: "all 0.3s",
    },
    statsSection: {
      padding: "4rem 0",
      backgroundColor: "white",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: "2rem",
      textAlign: "center",
      maxWidth: "72rem",
      margin: "0 auto",
      padding: "0 2.5rem",
    },
    footer: {
      background: "linear-gradient(to right, #CDB9BA, #E6E6E6)",
      color: "#7B282A",
      padding: "3rem 0",
    },
    footerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: "2rem",
      marginBottom: "2rem",
    },
  };

  // Media queries for responsive design
  if (window.innerWidth >= 768) {
    styles.featureGrid.gridTemplateColumns = "repeat(3, 1fr)";
    styles.statsGrid.gridTemplateColumns = "repeat(4, 1fr)";
    styles.footerGrid.gridTemplateColumns = "repeat(3, 1fr)";
  }

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>📍 Collegia</h1>
        
        {/* Centered navigation links */}
        <ul style={styles.navCenter}>
          <li>
            <a 
              href="#" 
              style={styles.navLink}
              onMouseEnter={(e) => e.target.style.color = "#f96d6dff"}
              onMouseLeave={(e) => e.target.style.color = "#7B282A"}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              style={styles.navLink}
              onMouseEnter={(e) => e.target.style.color = "#f96d6dff"}
              onMouseLeave={(e) => e.target.style.color = "#7B282A"}
            >
              Venue
            </a>
          </li>
          <li>
            <a 
              href="#" 
              style={styles.navLink}
              onMouseEnter={(e) => e.target.style.color = "#f96d6dff"}
              onMouseLeave={(e) => e.target.style.color = "#7B282A"}
            >
              FAQ
            </a>
          </li>
        </ul>
        
        <div style={styles.navRight}>
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => setShowSignIn(true)}
                style={styles.buttonPrimary}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#7B282A"}
              >
                Sign In
              </button>
              <button
                onClick={() => setShowSignUp(true)}
                style={styles.buttonSecondary}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#7B282A";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#7B282A";
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              style={styles.buttonPrimary}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#7B282A"}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Info Section */}
      <section style={styles.infoSection}>
        <h3 style={styles.infoTitle}>Why Choose Collegia?</h3>
        <p style={styles.infoDescription}>
          Simplify venue reservations and make campus event management seamless. 
          Join thousands of students, faculty, and coordinators who trust Collegia for their campus needs.
        </p>
        <div style={styles.featureGrid}>
          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>📅</div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#7B282A", marginBottom: "0.75rem" }}>Easy Booking</h4>
            <p style={{ color: "#4b5563" }}>Book classrooms or courts in just a few clicks with our intuitive interface.</p>
          </div>
          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>⏱</div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#7B282A", marginBottom: "0.75rem" }}>Real-Time Updates</h4>
            <p style={{ color: "#4b5563" }}>See available venues instantly without waiting with live availability tracking.</p>
          </div>
          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>🎉</div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#7B282A", marginBottom: "0.75rem" }}>Event Management</h4>
            <p style={{ color: "#4b5563" }}>Organize and track events effortlessly on campus with comprehensive tools.</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={styles.footerGrid}>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>📍 Collegia</h3>
              <p style={{ color: "#7B282A" }}>
                Your trusted partner for campus venue management and event organization.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0, color: "#7B282A" }}>
                <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>About Us</a></li>
                <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Contact</a></li>
                <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Help Center</a></li>
                <li style={{ marginBottom: "0.5rem" }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>Contact Info</h4>
              <div style={{ color: "#7B282A" }}>
                <p style={{ marginBottom: "0.5rem" }}>📧 support@collegia.com</p>
                <p style={{ marginBottom: "0.5rem" }}>📞 +1 (555) 123-4567</p>
                <p style={{ marginBottom: "0.5rem" }}>📍 University Campus, Building A</p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #7B282A", paddingTop: "1.5rem", textAlign: "center", color: "#7B282A" }}>
            <p>© 2025 Collegia | All Rights Reserved | Made with ❤️ for the campus community</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showSignIn && (
        <SignInModal
          onClose={() => setShowSignIn(false)}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </div>
  );
}

export default Homepage;