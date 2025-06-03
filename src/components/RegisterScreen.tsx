import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterScreenProps {
  onNavigate: (screen: string) => void;
}

export default function RegisterScreen() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const isFormValid = () => {
  return (
    formData.fullName.trim() &&
    formData.phoneNumber.trim() &&
    formData.emailAddress.trim() &&
    formData.password.trim() &&
    formData.isAgency.trim()
  );
};


  return (
    <div className="px-6 py-8 min-h-screen bg-gray">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Create your
          <br />
          PopX account
        </h1>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <label className="absolute left-3 -top-2 bg-gray-50 px-2 text-purple-600 text-sm font-semibold">
            Full Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            placeholder="Marry Doe"
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="w-full pl-5 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-gray-50"
          />
        </div>
        <div className="relative">
          <label className="absolute left-3 -top-2 bg-gray-50 px-2 text-purple-600 text-sm font-semibold">
            Phone number<span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phoneNumber}
            placeholder="123456"
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            className="w-full pl-5 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-gray-50"
          />
        </div>

        <div className="relative">
          <label className="absolute left-3 -top-2 bg-gray-50 px-2 text-purple-600 text-sm font-semibold">
            Email address<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.emailAddress}
            placeholder="Marrydoe@gmail.com"
            onChange={(e) => handleInputChange("emailAddress", e.target.value)}
            className="w-full pl-5 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-gray-50"
          />
        </div>

        <div className="relative">
          <label className="absolute left-3 -top-2 bg-gray-50 px-2 text-purple-600 text-sm font-semibold">
            Password<span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            required
            value={formData.password}
            placeholder="Marry123"
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="w-full pl-5 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-gray-50"
          />
        </div>

        <div className="relative">
          <label className="absolute left-3 -top-2 bg-gray-50 px-2 text-purple-600 text-sm font-semibold">
            Company name
          </label>
          <input
            type="text"
            required
            value={formData.companyName}
            placeholder="Marry Doe"
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            className="w-full pl-5 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-gray-50"
          />
        </div>

        <div className="pt-4">
          <label className="block text-gray-900 text-sm font-medium mb-4">
            Are you an Agency?<span className="text-red-600">*</span>
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={(e) => handleInputChange("isAgency", e.target.value)}
                className="w-5 h-5 text-black border-2 bg-gray-50 focus:ring-purple-600"
              />
              <span className="ml-3 text-gray-900 text-base">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={(e) => handleInputChange("isAgency", e.target.value)}
                className="w-5 h-5 text-purple-600 border-2 border-gray-300 focus:ring-purple-600"
              />
              <span className="ml-3 text-gray-900 text-base">No</span>
            </label>
          </div>
        </div>

        {/* <button
          onClick={() => navigate("/account")}
          className="w-full bg-purple-800 rounded-xl text-white py-3 text-lg font-medium mt-14 hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button> */}
        <button
          onClick={() => {
            if (isFormValid()) {
              navigate("/account");
            } else {
              alert("Please fill all required fields.");
            }
          }}
          className={`w-full rounded-xl text-white py-3 text-lg font-medium mt-14 transition-colors
bg-purple-800 hover:bg-purple-700`}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
