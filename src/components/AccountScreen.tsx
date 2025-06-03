import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

interface AccountScreenProps {
  onNavigate: (screen: string) => void;
}

export default function AccountScreen() {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-8 min-h-screen bg-gray-100">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Account Settings
        </h1>
      </div>

      <div className="bg-white rounded-[6px] p-6 mb-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/80"
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center">
              <Camera className="text-white w-4 h-4" />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Marry Doe
            </h2>
            <p className="text-gray-600 text-base">Marry@Gmail.Com</p>
          </div>
        </div>
      </div>

      <div className="px-2">
        <p className="text-gray-800 text-base leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}
