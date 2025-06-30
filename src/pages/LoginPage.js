"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const success = login(username, password)
      if (success) {
        navigate("/catalogue")
      } else {
        setError("Email atau password salah. Silakan coba lagi.")
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login")
    } finally {
      setLoading(false)
    }
  }

  // Styles
  const loginPageStyles = {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  }

  const loginBackgroundStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      'linear-gradient(rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.2)), url("/placeholder.svg?height=1080&width=1920") center / cover',
    zIndex: -2,
  }

  const loginOverlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.9) 100%)",
    zIndex: -1,
  }

  const loginHeaderStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "15px 20px" : isTablet ? "18px 30px" : "20px 40px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "15px" : "0",
  }

  const logoContainerStyles = {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "10px" : "12px",
    textDecoration: "none",
  }

  const logoIconStyles = {
    width: isMobile ? "35px" : "45px",
    height: isMobile ? "35px" : "45px",
    background: "white",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: isMobile ? "16px" : "20px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  }

  const logoTextStyles = {
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: "700",
    color: "white",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }

  const backHomeBtnStyles = {
    color: "white",
    textDecoration: "none",
    padding: isMobile ? "8px 16px" : "10px 20px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "25px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    fontSize: isMobile ? "14px" : "16px",
  }

  const loginContentStyles = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "20px 15px" : isTablet ? "30px 20px" : "40px 20px",
    minHeight: isMobile ? "calc(100vh - 100px)" : "auto",
  }

  const loginContainerStyles = {
    width: "100%",
    maxWidth: isMobile ? "400px" : isTablet ? "900px" : "1200px",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
    gap: isMobile ? "30px" : isTablet ? "40px" : "60px",
    alignItems: "center",
  }

  const loginFormSectionStyles = {
    background: "white",
    padding: isMobile ? "25px 20px" : isTablet ? "35px 30px" : "50px",
    borderRadius: "20px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(10px)",
    width: "100%",
    maxWidth: isMobile ? "none" : "500px",
    margin: isMobile ? "0 auto" : isTablet ? "0 auto" : "0",
  }

  const loginWelcomeStyles = {
    textAlign: "center",
    marginBottom: isMobile ? "30px" : "40px",
  }

  const welcomeTitleStyles = {
    fontSize: isMobile ? "22px" : isTablet ? "26px" : "32px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "15px",
    lineHeight: 1.3,
  }

  const welcomeSubtitleStyles = {
    color: "#6b7280",
    lineHeight: 1.6,
    fontSize: isMobile ? "14px" : "16px",
  }

  const loginFormStyles = {
    marginBottom: "30px",
  }

  const formGroupStyles = {
    marginBottom: isMobile ? "20px" : "25px",
  }

  const labelStyles = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#374151",
    fontSize: "14px",
  }

  const inputContainerStyles = {
    position: "relative",
  }

  const inputIconStyles = {
    position: "absolute",
    left: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "16px",
    zIndex: 1,
  }

  const inputStyles = {
    width: "100%",
    padding: isMobile ? "12px 12px 12px 40px" : "15px 15px 15px 45px",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    fontSize: "16px",
    transition: "all 0.3s ease",
    background: "#f9fafb",
    boxSizing: "border-box",
  }

  const formOptionsStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
    gap: "10px",
  }

  const checkboxContainerStyles = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "14px",
    color: "#6b7280",
  }

  const forgotPasswordStyles = {
    color: "#10b981",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
  }

  const errorMessageStyles = {
    background: "linear-gradient(135deg, #fef2f2, #fee2e2)",
    color: "#dc2626",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
    fontSize: "14px",
    textAlign: "center",
    border: "1px solid #fecaca",
  }

  const btnLoginStyles = {
    width: "100%",
    padding: isMobile ? "14px" : "16px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
  }

  const loadingSpinnerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  }

  const loginDividerStyles = {
    textAlign: "center",
    margin: "30px 0",
    position: "relative",
  }

  const dividerLineStyles = {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: "1px",
    background: "#e5e7eb",
  }

  const dividerTextStyles = {
    background: "white",
    padding: "0 20px",
    color: "#6b7280",
    fontSize: "14px",
  }

  const socialLoginStyles = {
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
    flexDirection: isMobile ? "column" : "row",
  }

  const btnSocialStyles = {
    flex: 1,
    padding: "12px",
    border: "2px solid #e5e7eb",
    background: "white",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "500",
  }

  const socialIconStyles = {
    fontSize: "16px",
  }

  const loginFooterStyles = {
    textAlign: "center",
    paddingTop: "20px",
    borderTop: "1px solid #e5e7eb",
  }

  const footerTextStyles = {
    color: "#6b7280",
    fontSize: "14px",
  }

  const registerLinkStyles = {
    color: "#10b981",
    textDecoration: "none",
    fontWeight: "600",
  }

  const loginInfoSectionStyles = {
    color: "white",
    padding: "0 20px",
    order: isMobile || isTablet ? -1 : "unset",
    textAlign: isMobile || isTablet ? "center" : "left",
    display: isMobile ? "none" : isTablet ? "none" : "block",
  }

  const infoContentTitleStyles = {
    fontSize: isMobile ? "24px" : isTablet ? "28px" : "36px",
    fontWeight: "700",
    marginBottom: "40px",
    lineHeight: 1.2,
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }

  const infoFeaturesStyles = {
    marginBottom: isMobile ? "30px" : "50px",
  }

  const infoFeatureStyles = {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: isMobile ? "20px" : "30px",
  }

  const featureIconStyles = {
    width: "50px",
    height: "50px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    backdropFilter: "blur(10px)",
    flexShrink: 0,
  }

  const featureTextStyles = {
    flex: 1,
  }

  const featureTextTitleStyles = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
  }

  const featureTextDescStyles = {
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: 1.5,
    fontSize: "14px",
  }

  const demoCredentialsStyles = {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "25px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  }

  const demoTitleStyles = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#fbbf24",
  }

  const credentialItemStyles = {
    marginBottom: "10px",
    fontFamily: '"Courier New", monospace',
    fontSize: "14px",
    padding: "8px 12px",
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
  }

  const credentialStrongStyles = {
    color: "#fbbf24",
  }

  return (
    <div style={loginPageStyles}>
      {/* Background with overlay */}
      <div style={loginBackgroundStyles}>
        <div style={loginOverlayStyles}></div>
      </div>

      {/* Header */}
      <div style={loginHeaderStyles}>
        <Link to="/" style={logoContainerStyles}>
          <div style={logoIconStyles}>📊</div>
          <span style={logoTextStyles}>TemuDataku</span>
        </Link>
        <Link
          to="/"
          style={backHomeBtnStyles}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.1)"
            e.target.style.borderColor = "rgba(255, 255, 255, 0.5)"
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.1)"
            e.target.style.borderColor = "rgba(255, 255, 255, 0.3)"
          }}
        >
          ← Kembali ke Beranda
        </Link>
      </div>

      {/* Main Content */}
      <div style={loginContentStyles}>
        <div style={loginContainerStyles}>
          <div style={loginFormSectionStyles}>
            <div style={loginWelcomeStyles}>
              <h1 style={welcomeTitleStyles}>Selamat Datang Kembali!</h1>
              <p style={welcomeSubtitleStyles}>
                Masuk ke akun TemuDataku Anda dan lanjutkan perjalanan data science bersama mentor terbaik
              </p>
            </div>

            <form onSubmit={handleSubmit} style={loginFormStyles}>
              <div style={formGroupStyles}>
                <label htmlFor="username" style={labelStyles}>
                  Email Address
                </label>
                <div style={inputContainerStyles}>
                  <span style={inputIconStyles}>📧</span>
                  <input
                    type="email"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Masukkan email Anda"
                    required
                    style={inputStyles}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10b981"
                      e.target.style.background = "white"
                      e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb"
                      e.target.style.background = "#f9fafb"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </div>
              </div>

              <div style={formGroupStyles}>
                <label htmlFor="password" style={labelStyles}>
                  Password
                </label>
                <div style={inputContainerStyles}>
                  <span style={inputIconStyles}>🔒</span>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password Anda"
                    required
                    style={inputStyles}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10b981"
                      e.target.style.background = "white"
                      e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb"
                      e.target.style.background = "#f9fafb"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </div>
              </div>

              <div style={formOptionsStyles}>
                <label style={checkboxContainerStyles}>
                  <input type="checkbox" style={{ marginRight: "8px" }} />
                  Ingat saya
                </label>
                <a
                  href="#forgot"
                  style={forgotPasswordStyles}
                  onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  Lupa password?
                </a>
              </div>

              {error && <div style={errorMessageStyles}>{error}</div>}

              <button
                type="submit"
                style={{
                  ...btnLoginStyles,
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                disabled={loading}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.transform = "translateY(-2px)"
                    e.target.style.boxShadow = "0 8px 25px rgba(16, 185, 129, 0.4)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.3)"
                  }
                }}
              >
                {loading ? <span style={loadingSpinnerStyles}>⏳ Memproses...</span> : "Masuk ke TemuDataku"}
              </button>
            </form>

            <div style={loginDividerStyles}>
              <div style={dividerLineStyles}></div>
              <span style={dividerTextStyles}>atau</span>
            </div>

            <div style={socialLoginStyles}>
              <button
                style={btnSocialStyles}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#10b981"
                  e.target.style.background = "#f0fdf4"
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "#e5e7eb"
                  e.target.style.background = "white"
                }}
              >
                <span style={socialIconStyles}>🔍</span>
                Masuk dengan Google
              </button>
              <button
                style={btnSocialStyles}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#10b981"
                  e.target.style.background = "#f0fdf4"
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "#e5e7eb"
                  e.target.style.background = "white"
                }}
              >
                <span style={socialIconStyles}>💼</span>
                Masuk dengan LinkedIn
              </button>
            </div>

            <div style={loginFooterStyles}>
              <p style={footerTextStyles}>
                Belum punya akun?{" "}
                <a
                  href="#register"
                  style={registerLinkStyles}
                  onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  Daftar sekarang
                </a>
              </p>
            </div>

            {/* Mobile Demo Credentials */}
            {(isMobile || isTablet) && (
              <div style={{ ...demoCredentialsStyles, marginTop: "30px" }}>
                <h3 style={demoTitleStyles}>Demo Login:</h3>
                <div style={credentialItemStyles}>
                  <strong style={credentialStrongStyles}>Email:</strong> temudata@gmail.com
                </div>
                <div style={credentialItemStyles}>
                  <strong style={credentialStrongStyles}>Password:</strong> TD1234
                </div>
              </div>
            )}
          </div>

          <div style={loginInfoSectionStyles}>
            <div>
              <h2 style={infoContentTitleStyles}>Bergabung dengan 10,000+ Data Scientists</h2>
              <div style={infoFeaturesStyles}>
                <div style={infoFeatureStyles}>
                  <div style={featureIconStyles}>🎯</div>
                  <div style={featureTextStyles}>
                    <h3 style={featureTextTitleStyles}>Mentoring Personal</h3>
                    <p style={featureTextDescStyles}>Bimbingan 1-on-1 dengan mentor berpengalaman</p>
                  </div>
                </div>
                <div style={infoFeatureStyles}>
                  <div style={featureIconStyles}>📚</div>
                  <div style={featureTextStyles}>
                    <h3 style={featureTextTitleStyles}>Kurikulum Terstruktur</h3>
                    <p style={featureTextDescStyles}>Materi pembelajaran yang disesuaikan dengan industri</p>
                  </div>
                </div>
                <div style={infoFeatureStyles}>
                  <div style={featureIconStyles}>🚀</div>
                  <div style={featureTextStyles}>
                    <h3 style={featureTextTitleStyles}>Karir Acceleration</h3>
                    <p style={featureTextDescStyles}>Bantuan untuk memulai karir di bidang data science</p>
                  </div>
                </div>
              </div>

              <div style={demoCredentialsStyles}>
                <h3 style={demoTitleStyles}>Demo Login:</h3>
                <div style={credentialItemStyles}>
                  <strong style={credentialStrongStyles}>Email:</strong> temudata@gmail.com
                </div>
                <div style={credentialItemStyles}>
                  <strong style={credentialStrongStyles}>Password:</strong> TD1234
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
