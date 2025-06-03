import { useNavigate } from "react-router-dom"

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void
}

export default function WelcomeScreen() {

  const navigate = useNavigate();

  return (
    <div className="px-6 py-8 min-h-screen flex flex-col justify-center bg-gray-100">
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Welcome to PopX</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate("register")}
            className="w-full bg-purple-700 text-white py-3 rounded-[5px] text-lg font-medium hover:bg-purple-600 transition-colors"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("login")}
            className="w-full bg-purple-400 text-gray-800 py-3 rounded-[5px] text-lg font-medium hover:bg-purple-300 transition-colors"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}
