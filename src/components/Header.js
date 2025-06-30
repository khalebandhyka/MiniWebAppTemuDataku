"use client"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Header = () => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
      setIsTablet(width > 768 && width <= 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleLogout = () => {
    logout()
    navigate("/")
    setIsMenuOpen(false)
  }

  const headerStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  }

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "0 15px" : "0 20px",
  }

  const headerContentStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: isMobile ? "12px 0" : "15px 0",
    position: "relative",
  }

  const logoStyles = {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "8px" : "10px",
    textDecoration: "none",
    color: "#10b981",
    fontWeight: "700",
    fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
    zIndex: 1001,
  }

  const logoIconStyles = {
    width: isMobile ? "30px" : "35px",
    height: isMobile ? "30px" : "35px",
    backgroundColor: "#10b981",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: isMobile ? "14px" : "16px",
  }

  const mobileMenuButtonStyles = {
    display: isMobile || isTablet ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#333",
    padding: "8px",
    borderRadius: "4px",
    zIndex: 1001,
  }

  const navStyles = {
    display: isMobile || isTablet ? (isMenuOpen ? "flex" : "none") : "flex",
    gap: isMobile ? "0" : isTablet ? "20px" : "30px",
    position: isMobile || isTablet ? "absolute" : "static",
    top: isMobile || isTablet ? "100%" : "auto",
    left: isMobile || isTablet ? "0" : "auto",
    right: isMobile || isTablet ? "0" : "auto",
    backgroundColor: isMobile || isTablet ? "white" : "transparent",
    boxShadow: isMobile || isTablet ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
    borderRadius: isMobile || isTablet ? "0 0 15px 15px" : "0",
    padding: isMobile || isTablet ? "20px" : "0",
    flexDirection: isMobile || isTablet ? "column" : "row",
    alignItems: isMobile || isTablet ? "stretch" : "center",
    zIndex: 1000,
  }

  const navLinkStyles = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "600",
    fontSize: isMobile ? "16px" : isTablet ? "14px" : "14px",
    transition: "color 0.3s ease",
    padding: isMobile ? "12px 0" : isTablet ? "8px 0" : "0",
    borderBottom: isMobile ? "1px solid #f0f0f0" : "none",
    textAlign: isMobile ? "center" : "left",
  }

  const headerActionsStyles = {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "10px" : "20px",
    position: isMobile || isTablet ? (isMenuOpen ? "static" : "absolute") : "static",
    right: isMobile || isTablet ? (isMenuOpen ? "auto" : "60px") : "auto",
  }

  const socialLinksStyles = {
    display: isMobile ? "none" : isTablet ? "none" : "flex",
    gap: "10px",
  }

  const socialLinkStyles = {
    width: "35px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10b981",
    color: "white",
    textDecoration: "none",
    borderRadius: "50%",
    fontSize: "16px",
    transition: "backgroundColor 0.3s ease",
  }

  const buttonStyles = {
    display: "inline-block",
    padding: isMobile ? "10px 16px" : "12px 24px",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
    fontSize: isMobile ? "12px" : "14px",
    whiteSpace: "nowrap",
  }

  const primaryButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#10b981",
    color: "white",
  }

  const outlineButtonStyles = {
    ...buttonStyles,
    backgroundColor: "transparent",
    color: "#10b981",
    border: "2px solid #10b981",
  }

  const userMenuStyles = {
    display: "flex",
    gap: isMobile ? "8px" : "10px",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "auto",
  }

  const mobileNavActionsStyles = {
    display: isMobile || isTablet ? (isMenuOpen ? "flex" : "none") : "none",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid #f0f0f0",
  }

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <div style={headerContentStyles}>
          <Link to="/" style={logoStyles}>
            <div style={logoIconStyles}>📊</div>
            <span>TemuDataku</span>
          </Link>

          <button style={mobileMenuButtonStyles} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <nav style={navStyles}>
            <Link
              to="/"
              style={navLinkStyles}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => (e.target.style.color = "#10b981")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              HOME PAGE
            </Link>
            <Link
              to="/catalogue"
              style={navLinkStyles}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => (e.target.style.color = "#10b981")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              CATALOGUE
            </Link>

            {/* Mobile/Tablet Actions in Menu */}
            <div style={mobileNavActionsStyles}>
              <div style={socialLinksStyles}>
                <a
                    href="mailto:temudataku@gmail.com"
                    style={socialLinkStyles}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
                    aria-label="Email TemuDataku"
                    >
                    📧
                    </a>

                    <a
                    href="https://www.linkedin.com/company/temudataku/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialLinkStyles}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
                    aria-label="LinkedIn TemuDataku"
                    >
                    💼
                    </a>

                    <a
                    href="https://wa.me/6285156750480"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialLinkStyles}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
                    aria-label="WhatsApp TemuDataku"
                    >
                    📱
                    </a>
              </div>

              {isAuthenticated ? (
                <div style={userMenuStyles}>
                  <Link
                    to="/catalogue"
                    style={{ ...outlineButtonStyles, width: "100%" }}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#10b981"
                      e.target.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent"
                      e.target.style.color = "#10b981"
                    }}
                  >
                    Katalog
                  </Link>
                  <button
                    onClick={handleLogout}
                    style={{ ...primaryButtonStyles, width: "100%" }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  style={{ ...primaryButtonStyles, width: "100%" }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
                >
                  Login
                </Link>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div style={{ ...headerActionsStyles, display: isMobile || isTablet ? "none" : "flex" }}>
            <div style={socialLinksStyles}>
              <a
                href="mailto:temudataku@gmail.com"
                style={socialLinkStyles}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
              >
                📧
              </a>
              <a
                href="https://www.linkedin.com/company/temudataku/about/"
                style={socialLinkStyles}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
              >
                💼
              </a>
              <a
                href="https://wa.me/6285156750480"
                style={socialLinkStyles}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
              >
                📱
              </a>
            </div>

            {isAuthenticated ? (
              <div style={userMenuStyles}>
                <Link
                  to="/catalogue"
                  style={outlineButtonStyles}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#10b981"
                    e.target.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent"
                    e.target.style.color = "#10b981"
                  }}
                >
                  Katalog
                </Link>
                <button
                  onClick={handleLogout}
                  style={primaryButtonStyles}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                style={primaryButtonStyles}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
