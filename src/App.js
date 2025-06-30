"use client"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import CataloguePage from "./pages/CataloguePage"
import { AuthProvider, useAuth } from "./context/AuthContext"

// Global styles object
const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: 1.6,
    color: "#333",
  },
}

// Apply global styles
if (typeof document !== "undefined") {
  Object.assign(document.body.style, globalStyles.body)
}

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" />
}

function App() {
  const appStyles = {
    minHeight: "100vh",
  }

  return (
    <AuthProvider>
      <Router>
        <div style={appStyles}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/catalogue"
              element={
                <ProtectedRoute>
                  <CataloguePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
