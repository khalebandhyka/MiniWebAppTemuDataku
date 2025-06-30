"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import Header from "../components/Header"
import Footer from "../components/Footer"

const CataloguePage = () => {
  const { user } = useAuth()
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [activeTab, setActiveTab] = useState("Data Analyst")

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

  const mentoringPackages = [
    {
      id: 1,
      title: "Mentoring 1 on 1",
      price: "Rp 49.000",
      features: [
        "Mentoring 45 menit",
        "Tanya apapun permasalahan dalam bidang data science",
        "Rekaman sesi mentoring",
        "Garansi kepuasan*",
        "Dapatkan akses ke praktik data science**",
      ],
      buttonText: "choose plan",
      buttonStyle: "outline",
    },
    {
      id: 2,
      title: "Mentoring Group",
      price: "RP 159.000",
      features: [
        "Mentoring 90 menit",
        "Tanya apapun permasalahan dalam bidang data science",
        "Rekaman sesi mentoring",
        "Garansi kepuasan*",
        "Dapatkan akses ke praktik data science**",
      ],
      buttonText: "choose plan",
      buttonStyle: "primary",
    },
  ]

  const practiceModules = [
    {
      id: 1,
      title: "Data Analysis - Customer Analysis",
      description:
        "Kamu akan belajar cara menganalisis pelanggan, mencari trend yang tersembunyi, dan bagaimana prospek pelanggan kedepannya.",
      icon: "📊",
      status: "available",
    },
    {
      id: 2,
      title: "Machine Learning - NLP",
      description:
        "Kamu akan belajar bagaimana cara mengolah teks, menganalisis sentiment, dan juga klasifikasi teks seperti spam detection dan sejenisnya.",
      icon: "📱",
      status: "coming",
    },
    {
      id: 3,
      title: "Data Scientist - Churn Prediction",
      description:
        "Kamu akan belajar mulai dari membersihkan data dan membuat model untuk memprediksi kemungkinan pelanggan melakukan churn.",
      icon: "🔍",
      status: "coming",
    },
    {
      id: 4,
      title: "Machine Learning - Classification",
      description:
        "Kamu akan belajar mulai dari pemrosesan data seperti feature engineering, encoding, dan labelling. Kamu juga akan menggunakan package untuk melakukan pemodelan klasifikasi.",
      icon: "📊",
      status: "available",
    },
    {
      id: 5,
      title: "Machine Learning - Computer Vision",
      description: "Kamu akan belajar bagaimana mengolah gambar dan membuat klasifikasi dari dataset yang disediakan.",
      icon: "💻",
      status: "coming",
    },
    {
      id: 6,
      title: "Machine Learning - Time Series",
      description:
        "Kamu akan belajar pemrosesan data untuk tipe data time series serta pembuatan model model time series dari klasik hingga penggunaan neural network untuk time series.",
      icon: "👥",
      status: "coming",
    },
  ]

  const bootcampPackages = [
    {
      id: 1,
      title: "Bootcamp Data Analyst",
      price: "Rp 1.199K",
      description: "Cocok untuk kamu yang tertarik analisis data",
    },
    {
      id: 2,
      title: "Bootcamp Data Scientist",
      price: "Rp 1.199K",
      description: "Cocok untuk kamu yang mau leveling up",
    },
    {
      id: 3,
      title: "Bootcamp Data Science for Beginner",
      price: "Rp 449K",
      description: "Cocok untuk kamu yang baru mulai",
    },
  ]

  const roleComparisons = {
    "Data Analyst": {
      fokus:
        "Mengumpulkan, membersihkan, dan menganalisis data untuk menemukan pola, tren, dan insight yang berguna bagi bisnis.",
      keahlian: "Mahir dalam statistik, visualisasi data, SQL, dan alat analisis data seperti Excel, Python, maupun R.",
      tanggungJawab: [
        "Mengidentifikasi masalah bisnis yang dapat diselesaikan dengan analisis data.",
        "Mengumpulkan data dari berbagai sumber.",
        "Membersihkan dan memvalidasi data.",
        "Menganalisis data menggunakan metode statistik dan visualisasi.",
        "Menyampaikan hasil analisis dalam bentuk laporan atau presentasi yang mudah dipahami.",
      ],
    },
    "Data Scientist": {
      fokus:
        "Menggabungkan keahlian statistik, pemrograman, dan pengetahuan bisnis untuk mengekstrak wawasan berharga dari data dan membangun model prediktif.",
      keahlian:
        "Mahir dalam statistika, machine learning, pemrograman (Python, R), dan memiliki pemahaman tentang bisnis.",
      tanggungJawab: [
        "Merumuskan masalah bisnis dan merancang solusi berbasis data.",
        "Mengumpulkan, membersihkan, dan mempersiapkan data.",
        "Mengembangkan, melatih, dan mengevaluasi model machine learning.",
        "Mengkomunikasikan hasil analisis dan model kepada pemangku kepentingan.",
      ],
    },
    "Machine Learning Engineer": {
      fokus: "Mengembangkan, menerapkan, dan memelihara sistem machine learning dalam skala produksi.",
      keahlian:
        "Mahir dalam pemrograman (Python, Java), infrastruktur cloud, dan memiliki pemahaman tentang algoritma machine learning.",
      tanggungJawab: [
        "Merancang dan mengimplementasikan arsitektur machine learning.",
        "Mengoptimalkan performa dan skalabilitas model machine learning.",
        "Memastikan model machine learning dapat berjalan dengan baik di lingkungan produksi.",
        "Memantau dan memelihara model machine learning yang telah diterapkan.",
      ],
    },
  }

  // Styles
  const cataloguePageStyles = {
    paddingTop: isMobile ? "60px" : "70px",
  }

  const heroSectionStyles = {
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "white",
    padding: isMobile ? "60px 0" : isTablet ? "70px 0" : "80px 0",
    textAlign: "center",
  }

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "0 15px" : "0 20px",
  }

  const heroTitleStyles = {
    fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: 1.3,
  }

  const heroSubtitleStyles = {
    fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
    opacity: 0.9,
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.5,
  }

  const sectionStyles = {
    padding: isMobile ? "60px 0" : isTablet ? "70px 0" : "80px 0",
    backgroundColor: "#f9fafb",
  }

  const sectionTitleStyles = {
    fontSize: isMobile ? "24px" : isTablet ? "30px" : "36px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: isMobile ? "40px" : isTablet ? "50px" : "60px",
    color: "#1f2937",
    lineHeight: 1.3,
  }

  const packagesGridStyles = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
    gap: isMobile ? "30px" : "40px",
    maxWidth: "1000px",
    margin: "0 auto",
  }

  const packageCardStyles = {
    background: "white",
    borderRadius: "20px",
    padding: isMobile ? "30px 25px" : "40px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    position: "relative",
  }

  const packageTitleStyles = {
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: "700",
    color: "#10b981",
    marginBottom: "20px",
    lineHeight: 1.3,
  }

  const packagePriceStyles = {
    fontSize: isMobile ? "36px" : isTablet ? "42px" : "48px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "30px",
    lineHeight: 1,
  }

  const featureListStyles = {
    listStyle: "none",
    padding: 0,
    margin: "0 0 40px 0",
    textAlign: "left",
  }

  const featureItemStyles = {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "15px",
    color: "#6b7280",
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.5,
  }

  const checkIconStyles = {
    color: "#10b981",
    fontWeight: "bold",
    marginTop: "2px",
    flexShrink: 0,
  }

  const buttonStyles = {
    padding: isMobile ? "12px 30px" : "15px 40px",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
    fontSize: isMobile ? "14px" : "16px",
    width: "100%",
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

  const practiceGridStyles = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
    gap: isMobile ? "25px" : "30px",
  }

  const practiceCardStyles = {
    background: "white",
    borderRadius: "15px",
    padding: isMobile ? "25px 20px" : "30px",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    border: "1px solid #e5e7eb",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }

  const practiceIconStyles = {
    fontSize: isMobile ? "40px" : "48px",
    marginBottom: "20px",
    display: "block",
  }

  const practiceTitleStyles = {
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "15px",
    lineHeight: 1.3,
  }

  const practiceDescStyles = {
    color: "#6b7280",
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.6,
    marginBottom: "25px",
    flex: 1,
  }

  const practiceButtonStyles = {
    ...buttonStyles,
    fontSize: isMobile ? "13px" : "14px",
    padding: isMobile ? "10px 20px" : "12px 24px",
  }

  const availableButtonStyles = {
    ...practiceButtonStyles,
    backgroundColor: "#10b981",
    color: "white",
  }

  const comingSoonButtonStyles = {
    ...practiceButtonStyles,
    backgroundColor: "#6b7280",
    color: "white",
    cursor: "not-allowed",
  }

  const bootcampGridStyles = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
    gap: isMobile ? "30px" : "40px",
    maxWidth: "1000px",
    margin: "0 auto",
  }

  const bootcampCardStyles = {
    background: "white",
    borderRadius: "20px",
    padding: isMobile ? "30px 25px" : "40px 30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  }

  const bootcampHeaderStyles = {
    backgroundColor: "#4a5568",
    color: "white",
    padding: isMobile ? "12px" : "15px",
    borderRadius: "10px",
    marginBottom: "30px",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "600",
    lineHeight: 1.3,
  }

  const bootcampPriceStyles = {
    fontSize: isMobile ? "32px" : isTablet ? "36px" : "42px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "15px",
    lineHeight: 1,
  }

  const bootcampDescStyles = {
    color: "#6b7280",
    marginBottom: "30px",
    fontSize: isMobile ? "14px" : "16px",
    lineHeight: 1.5,
  }

  const comparisonSectionStyles = {
    padding: isMobile ? "60px 0" : isTablet ? "70px 0" : "80px 0",
    backgroundColor: "white",
  }

  const comparisonContainerStyles = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
    gap: isMobile ? "40px" : isTablet ? "50px" : "60px",
    alignItems: "center",
  }

  const comparisonImageStyles = {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    maxHeight: isMobile ? "250px" : "400px",
    objectFit: "cover",
  }

  const comparisonContentStyles = {
    backgroundColor: "#2d3748",
    color: "white",
    padding: isMobile ? "30px 25px" : isTablet ? "35px 30px" : "40px",
    borderRadius: "20px",
  }

  const tabsStyles = {
    display: "flex",
    marginBottom: "30px",
    backgroundColor: "#1a202c",
    borderRadius: "10px",
    padding: "5px",
    flexWrap: isMobile ? "wrap" : "nowrap",
    gap: isMobile ? "5px" : "0",
  }

  const tabButtonStyles = {
    flex: 1,
    padding: isMobile ? "10px 8px" : "12px 16px",
    backgroundColor: "transparent",
    color: "#a0aec0",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: isMobile ? "11px" : isTablet ? "12px" : "14px",
    fontWeight: "500",
    textAlign: "center",
    minWidth: isMobile ? "calc(33.33% - 5px)" : "auto",
  }

  const activeTabStyles = {
    ...tabButtonStyles,
    backgroundColor: "#d69e2e",
    color: "white",
  }

  const roleContentStyles = {
    lineHeight: 1.6,
  }

  const roleSectionStyles = {
    marginBottom: isMobile ? "20px" : "25px",
  }

  const roleLabelStyles = {
    color: "#d69e2e",
    fontWeight: "600",
    marginBottom: "8px",
    display: "block",
    fontSize: isMobile ? "14px" : "16px",
  }

  const roleTextStyles = {
    color: "#e2e8f0",
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.6,
  }

  const roleListStyles = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  }

  const roleListItemStyles = {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "8px",
    fontSize: isMobile ? "13px" : "14px",
    color: "#e2e8f0",
    lineHeight: 1.5,
  }

  const bulletStyles = {
    color: "#d69e2e",
    marginTop: "2px",
    flexShrink: 0,
  }

  const disclaimerStyles = {
    fontSize: isMobile ? "11px" : "12px",
    color: "#6b7280",
    textAlign: "center",
    marginTop: "40px",
    fontStyle: "italic",
    lineHeight: 1.5,
  }

  const practiceSubtitleStyles = {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "50px",
    fontSize: isMobile ? "14px" : "16px",
    lineHeight: 1.6,
    maxWidth: "600px",
    margin: "0 auto 50px auto",
  }

  return (
    <div style={cataloguePageStyles}>
      <Header />

      <section style={heroSectionStyles}>
        <div style={containerStyles}>
          <h1 style={heroTitleStyles}>{user ? `Selamat Datang, ${user.name}!` : "Katalog TemuDataku"}</h1>
          <p style={heroSubtitleStyles}>
            Temukan paket mentoring, practice, dan bootcamp terbaik untuk perjalanan data science Anda
          </p>
        </div>
      </section>

      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>PILIH PAKET MU</h2>
          <div style={packagesGridStyles}>
            {mentoringPackages.map((pkg) => (
              <div key={pkg.id} style={packageCardStyles}>
                <h3 style={packageTitleStyles}>{pkg.title}</h3>
                <div style={packagePriceStyles}>{pkg.price}</div>
                <ul style={featureListStyles}>
                  {pkg.features.map((feature, index) => (
                    <li key={index} style={featureItemStyles}>
                      <span style={checkIconStyles}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  style={pkg.buttonStyle === "primary" ? primaryButtonStyles : outlineButtonStyles}
                  onMouseEnter={(e) => {
                    if (pkg.buttonStyle === "primary") {
                      e.target.style.backgroundColor = "#059669"
                    } else {
                      e.target.style.backgroundColor = "#10b981"
                      e.target.style.color = "white"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pkg.buttonStyle === "primary") {
                      e.target.style.backgroundColor = "#10b981"
                    } else {
                      e.target.style.backgroundColor = "transparent"
                      e.target.style.color = "#10b981"
                    }
                  }}
                >
                  {pkg.buttonText}
                </button>
              </div>
            ))}
          </div>
          <div style={disclaimerStyles}>
            <p>
              * Garansi kepuasan bisa didapatkan jika peserta tidak puas dan mengisi form untuk melakukan klaim garansi
              serta memberikan bukti valid.
            </p>
            <p>
              ** Untuk peserta yang pertama kali mengikuti mentoring akan mendapatkan akses ke praktik data science.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section style={{ ...sectionStyles, backgroundColor: "white" }}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>APA YANG AKAN KAMU DAPATKAN?</h2>
          <p style={practiceSubtitleStyles}>
            Pada practice ini kamu akan mendapatkan pengalaman praktik mengolah data secara langsung dengan beragam
            studi kasus dan data yang disediakan
          </p>
          <div style={practiceGridStyles}>
            {practiceModules.map((module) => (
              <div key={module.id} style={practiceCardStyles}>
                <span style={practiceIconStyles}>{module.icon}</span>
                <h3 style={practiceTitleStyles}>{module.title}</h3>
                <p style={practiceDescStyles}>{module.description}</p>
                <button
                  style={module.status === "available" ? availableButtonStyles : comingSoonButtonStyles}
                  disabled={module.status === "coming"}
                  onMouseEnter={(e) => {
                    if (module.status === "available") {
                      e.target.style.backgroundColor = "#059669"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (module.status === "available") {
                      e.target.style.backgroundColor = "#10b981"
                    }
                  }}
                >
                  {module.status === "available" ? "Ambil Praktek Ini" : "Coming Soon"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>PILIH BOOTCAMP MU</h2>
          <div style={bootcampGridStyles}>
            {bootcampPackages.map((bootcamp) => (
              <div key={bootcamp.id} style={bootcampCardStyles}>
                <div style={bootcampHeaderStyles}>{bootcamp.title}</div>
                <div style={bootcampPriceStyles}>{bootcamp.price}</div>
                <p style={bootcampDescStyles}>{bootcamp.description}</p>
                <button
                  style={primaryButtonStyles}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
                >
                  Daftar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={comparisonSectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>APA PERBEDAANNYA?</h2>
          <div style={comparisonContainerStyles}>
            <div style={{ order: isMobile ? 2 : 1 }}>
              <img
                src="/images/discussion.jpg"
                alt="Data professionals working together"
                style={comparisonImageStyles}
              />
            </div>
            <div style={{ ...comparisonContentStyles, order: isMobile ? 1 : 2 }}>
              <div style={tabsStyles}>
                {Object.keys(roleComparisons).map((role) => (
                  <button
                    key={role}
                    style={activeTab === role ? activeTabStyles : tabButtonStyles}
                    onClick={() => setActiveTab(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>

              <div style={roleContentStyles}>
                <div style={roleSectionStyles}>
                  <span style={roleLabelStyles}>Fokus Pekerjaan:</span>
                  <p style={roleTextStyles}>{roleComparisons[activeTab].fokus}</p>
                </div>

                <div style={roleSectionStyles}>
                  <span style={roleLabelStyles}>Keahlian:</span>
                  <p style={roleTextStyles}>{roleComparisons[activeTab].keahlian}</p>
                </div>

                <div style={roleSectionStyles}>
                  <span style={roleLabelStyles}>Tanggung Jawab:</span>
                  <ul style={roleListStyles}>
                    {roleComparisons[activeTab].tanggungJawab.map((item, index) => (
                      <li key={index} style={roleListItemStyles}>
                        <span style={bulletStyles}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CataloguePage
