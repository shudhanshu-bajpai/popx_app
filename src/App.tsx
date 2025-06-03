import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomeScreen from "./components/WelcomeScreen"
import LoginScreen from "./components/LoginScreen"
import RegisterScreen from "./components/RegisterScreen"
import AccountScreen from "./components/AccountScreen"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <div className="max-w-sm mx-auto bg-gray-50 min-h-screen relative">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/account" element={<AccountScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
