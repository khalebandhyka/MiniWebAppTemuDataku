"use client"
import { useState, useEffect } from "react"

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

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

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerStyles = {
    backgroundColor: "#1f2937",
    color: "white",
    padding: isMobile ? "40px 0 20px" : "50px 0 30px",
  }

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "0 15px" : "0 20px",
  }

  const footerContentStyles = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    textAlign: isMobile ? "center" : "left",
  }

  const footerSectionStyles = {
    marginBottom: "20px",
  }

  const sectionTitleStyles = {
    marginBottom: "20px",
    color: "#10b981",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "600",
  }

  const listStyles = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  }

  const listItemStyles = {
    marginBottom: "10px",
  }

  const linkStyles = {
    color: "#d1d5db",
    textDecoration: "none",
    transition: "color 0.3s ease",
    fontSize: isMobile ? "14px" : "16px",
    cursor: "pointer",
  }

  const logoStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
    justifyContent: isMobile ? "center" : "flex-start",
  }

  const logoIconStyles = {
    width: "35px",
    height: "35px",
    backgroundColor: "#10b981",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "16px",
  }

  const logoTextStyles = {
    color: "white",
    fontWeight: "700",
    fontSize: "18px",
  }

  const paragraphStyles = {
    color: "#d1d5db",
    lineHeight: 1.6,
    margin: "10px 0",
    fontSize: "16px",
  }

  const socialLinksStyles = {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    justifyContent: isMobile ? "center" : "flex-start",
  }

  const socialLinkStyles = {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10b981",
    color: "white",
    textDecoration: "none",
    borderRadius: "50%",
    fontSize: "18px",
    transition: "backgroundColor 0.3s ease",
  }

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={footerContentStyles}>
          <div style={footerSectionStyles}>
            <div style={logoStyles}>
              <div style={logoIconStyles}>📊</div>
              <span style={logoTextStyles}>TemuDataku</span>
            </div>
            <p style={paragraphStyles}>
              Be sure to take a look at our Terms of Use and Privacy Policy
            </p>
          </div>

          <div style={footerSectionStyles}>
            <h3 style={sectionTitleStyles}>About</h3>
            <ul style={listStyles}>
              {["Tentang Kami", "Mentoring Data Science", "Practice Data Science", "Contact"].map((text, index) => (
                <li key={index} style={listItemStyles}>
                  <a
                    href="#"
                    onClick={scrollToTop}
                    style={linkStyles}
                    onMouseEnter={(e) => (e.target.style.color = "#10b981")}
                    onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={footerSectionStyles}>
            <h3 style={sectionTitleStyles}>Social Media</h3>
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
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyles}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
              >
                💼
              </a>
            </div>
          </div>

          <div style={footerSectionStyles}>
            <h3 style={sectionTitleStyles}>Contact</h3>
            <div>
              <p style={paragraphStyles}>📞 📧</p>
              <p style={paragraphStyles}>
                Kelurahan Karangbesuki Kecamatan Sukun, Kota Malang
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
