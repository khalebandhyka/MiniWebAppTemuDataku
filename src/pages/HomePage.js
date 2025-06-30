"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null)
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

  const faqData = [
    {
      question: "Apa yang saya dapatkan nanti setelah mentoring?",
      answer:
        "Tentu kamu akan mendapatkan penjelasan materi yang belum kamu pahami dari mentor yang ahli dibidang nya.",
    },
    {
      question: "Apakah saya bisa mentoring secara berkelompok?",
      answer:
        "Kamu bisa melakukan mentoring berkelompok 3-5 orang",
    },
    {
      question: "Layanan apa saja yang ada di TemuDataku?",
      answer:
        "Selain layanan mentoring, terdapat latihan dibidang data science dimana kamu akan diberikan dataset lalu studi kasus untuk pemecahan masalah nya. Dan nantinya ada paket khusus untuk hasil latihan kamu di review oleh mentor.",
    },
    {
      question: "Data seperti apa yang disediakan oleh TemuDataku?",
      answer:
        "Dari tim TemuDataku akan menyediakan data yang sesuai dengan latihan dan studi kasus yang diberikan. Contoh ketika nanti diberikan studi kasus yang penyelesaiannya dengan model time series maka akan diberikan juga data yang sesuai dengan time series, begitupun jika studi kasus nya adalah klasifikasi",
    },
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const homepageStyles = {
    paddingTop: isMobile ? "60px" : "70px",
  }

  const heroSectionStyles = {
    height: isMobile ? "80vh" : isTablet ? "90vh" : "100vh",
    minHeight: isMobile ? "500px" : "600px",
    background:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/threepeople.jpg") center / cover',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    padding: isMobile ? "20px" : "40px",
  }

  const heroContentStyles = {
    maxWidth: isMobile ? "100%" : isTablet ? "600px" : "800px",
    padding: isMobile ? "0 10px" : "0 20px",
  }

  const heroSubtitleStyles = {
    fontSize: isMobile ? "16px" : isTablet ? "20px" : "24px",
    fontWeight: "400",
    marginBottom: isMobile ? "15px" : "20px",
    opacity: 0.9,
    lineHeight: 1.4,
  }

  const heroTitleStyles = {
    fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
    fontWeight: "700",
    marginBottom: isMobile ? "30px" : "40px",
    lineHeight: 1.2,
  }

  const heroButtonsStyles = {
    display: "flex",
    gap: isMobile ? "15px" : "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    maxWidth: isMobile ? "300px" : "none",
    margin: isMobile ? "0 auto" : "0",
  }

  const buttonStyles = {
    display: "inline-block",
    padding: isMobile ? "14px 24px" : isTablet ? "12px 24px" : "12px 24px",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
    fontSize: isMobile ? "14px" : "16px",
    minWidth: isMobile ? "200px" : "auto",
  }

  const primaryButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#10b981",
    color: "white",
  }

  const secondaryButtonStyles = {
    ...buttonStyles,
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
  }

  const featuresSectionStyles = {
    padding: isMobile ? "60px 0" : isTablet ? "80px 0" : "100px 0",
    backgroundColor: "#f9fafb",
  }

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "0 15px" : "0 20px",
  }

  const featuresGridStyles = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
    gap: isMobile ? "40px" : isTablet ? "50px" : "60px",
    alignItems: "center",
  }

  const featureCardsStyles = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "15px" : "20px",
    order: isMobile ? 2 : 1,
  }

  const featureCardStyles = {
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    height: isMobile ? "150px" : "200px",
  }

  const featureImageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }

  const featureOverlayStyles = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
    color: "white",
    padding: isMobile ? "20px 15px 15px" : "30px 20px 20px",
  }

  const featureOverlayTitleStyles = {
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: "600",
    lineHeight: 1.3,
    margin: 0,
  }

  const featureContentStyles = {
    flex: 1,
    order: isMobile ? 1 : 2,
  }

  const featureContentTitleStyles = {
    fontSize: isMobile ? "24px" : isTablet ? "30px" : "36px",
    fontWeight: "700",
    marginBottom: isMobile ? "20px" : "30px",
    color: "#1f2937",
    lineHeight: 1.3,
  }

  const featureHighlightStyles = {
    display: "flex",
    gap: isMobile ? "15px" : "30px",
    alignItems: "flex-start",
  }

  const highlightNumberStyles = {
    fontSize: isMobile ? "60px" : isTablet ? "80px" : "120px",
    fontWeight: "700",
    color: "#10b981",
    opacity: 0.1,
    lineHeight: 1,
    display: isMobile ? "none" : "block",
  }

  const highlightContentStyles = {
    flex: 1,
  }

  const brandNameStyles = {
    color: "#6b7280",
    fontSize: isMobile ? "12px" : "14px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  }

  const highlightTitleStyles = {
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: "700",
    margin: "10px 0 20px",
    color: "#1f2937",
    lineHeight: 1.3,
  }

  const highlightTextStyles = {
    color: "#6b7280",
    lineHeight: 1.7,
    marginBottom: isMobile ? "20px" : "30px",
    fontSize: isMobile ? "14px" : "16px",
  }

  const outlineButtonStyles = {
    ...buttonStyles,
    backgroundColor: "transparent",
    color: "#10b981",
    border: "2px solid #10b981",
    fontSize: isMobile ? "14px" : "16px",
    padding: isMobile ? "10px 20px" : "12px 24px",
  }

  const faqSectionStyles = {
    padding: isMobile ? "60px 0" : isTablet ? "80px 0" : "100px 0",
    backgroundColor: "white",
  }

  const faqTitleStyles = {
    fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: isMobile ? "40px" : "60px",
    color: "#6b7280",
  }

  const faqListStyles = {
    maxWidth: "800px",
    margin: "0 auto",
  }

  const faqItemStyles = {
    borderBottom: "1px solid #e5e7eb",
    marginBottom: isMobile ? "15px" : "20px",
  }

  const faqQuestionStyles = {
    width: "100%",
    padding: isMobile ? "20px 0" : "25px 0",
    background: "none",
    border: "none",
    textAlign: "left",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "600",
    color: "#1f2937",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "color 0.3s ease",
    lineHeight: 1.4,
  }

  const faqIconStyles = {
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: "300",
    transition: "transform 0.3s ease",
    marginLeft: "10px",
    flexShrink: 0,
  }

  const faqAnswerStyles = {
    paddingBottom: isMobile ? "20px" : "25px",
    animation: "slideDown 0.3s ease",
  }

  const faqAnswerTextStyles = {
    color: "#6b7280",
    lineHeight: 1.7,
    margin: 0,
    fontSize: isMobile ? "14px" : "16px",
  }

  return (
    <div style={homepageStyles}>
      <Header />

      <section style={heroSectionStyles}>
        <div style={heroContentStyles}>
          <h1 style={heroSubtitleStyles}>BOSAN BELAJAR DATA SCIENCE SENDIRIAN?</h1>
          <h2 style={heroTitleStyles}>Yuk, Temu Mentor di TemuDataku!</h2>
          <div style={heroButtonsStyles}>
            <Link
              to="/login"
              style={primaryButtonStyles}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
            >
              Coba Sekarang
            </Link>
            <button
              style={secondaryButtonStyles}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white"
                e.target.style.color = "#333"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = "white"
              }}
            >
              Kontak Kami
            </button>
          </div>
        </div>
      </section>

      <section style={featuresSectionStyles}>
        <div style={containerStyles}>
          <div style={featuresGridStyles}>
            <div style={featureCardsStyles}>
              <div
                style={featureCardStyles}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img src="/images/1on1.jpg" alt="1 on 1 Session" style={featureImageStyles} />
                <div style={featureOverlayStyles}>
                  <h3 style={featureOverlayTitleStyles}>1 on 1 Session dengan mentor</h3>
                </div>
              </div>

              <div
                style={featureCardStyles}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img src="/images/typing.jpeg" alt="Akselerasi Impian" style={featureImageStyles} />
                <div style={featureOverlayStyles}>
                  <h3 style={featureOverlayTitleStyles}>Akselerasi Impian</h3>
                </div>
              </div>

              <div
                style={featureCardStyles}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img src="/images/youngdiscussion.jpg" alt="Perdalam latihan" style={featureImageStyles} />
                <div style={featureOverlayStyles}>
                  <h3 style={featureOverlayTitleStyles}>Perdalam latihan dengan ulasan dari mentor</h3>
                </div>
              </div>

              <div
                style={featureCardStyles}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img src="/images/calling.jpg" alt="Harga terjangkau" style={featureImageStyles} />
                <div style={featureOverlayStyles}>
                  <h3 style={featureOverlayTitleStyles}>harga terjangkau</h3>
                </div>
              </div>
            </div>

            <div style={featureContentStyles}>
              <h2 style={featureContentTitleStyles}>Belajar lebih efektif & latihan langsung dari ahlinya</h2>
              <div style={featureHighlightStyles}>
                <span style={highlightNumberStyles}>1</span>
                <div style={highlightContentStyles}>
                  <span style={brandNameStyles}>TemuDataku</span>
                  <h3 style={highlightTitleStyles}># Terbaik dalam Mentoring Data Science</h3>
                  <p style={highlightTextStyles}>
                    Dapatkan bimbingan dari mentor untuk menjawab keraguan mu dalam belajar data science. khusus untuk
                    kamu yang belajar otodidak, kami memberikan akses 1 on 1 maupun kelompok untuk mentoring dan tentu
                    dengan harga yang lebih terjangkau dari mengikuti bootcamp.
                  </p>
                  <button
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
                    view more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={faqSectionStyles}>
        <div style={containerStyles}>
          <h2 style={faqTitleStyles}>FAQ</h2>
          <div style={faqListStyles}>
            {faqData.map((faq, index) => (
              <div key={index} style={faqItemStyles}>
                <button
                  style={faqQuestionStyles}
                  onClick={() => toggleFaq(index)}
                  onMouseEnter={(e) => (e.target.style.color = "#10b981")}
                  onMouseLeave={(e) => (e.target.style.color = "#1f2937")}
                >
                  <span style={{ flex: 1, textAlign: "left" }}>{faq.question}</span>
                  <span
                    style={{
                      ...faqIconStyles,
                      transform: openFaq === index ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div style={faqAnswerStyles}>
                    <p style={faqAnswerTextStyles}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
