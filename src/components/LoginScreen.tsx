import { useState } from "react"
import {useNavigate} from "react-router-dom";

interface LoginScreenProps {
  onNavigate: (screen: string) => void
}

export default function LoginScreen() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const isFormValid = () => {
  return (
    email.trim() &&
    password.trim()
  );
};

  return (
    <div className="px-6 py-8 min-h-screen bg-gray-50">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <label className="absolute left-3 -top-2 bg-gray-50 px-2 text-purple-600 text-sm font-semibold">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Marrydoe@gmail.com"
            className="w-full pl-5 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-gray-50"
          />
        </div>
        <div className="relative">
          <label className="absolute left-3 -top-2 bg-gray-50 px-2 text-purple-600 text-sm font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full pl-5 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-gray-50"
          />
        </div>

        <button
          onClick={() => {
            if (isFormValid()) {
              navigate("/account");
            } else {
              alert("Please fill all required fields.");
            }
          }}
          className="w-full rounded-xl bg-gray-400 text-white py-3 text-lg font-medium mt-8"
        >
          Login
        </button>
      </div>
    </div>
  )
}
