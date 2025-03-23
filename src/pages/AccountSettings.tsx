import { CameraIcon } from '@heroicons/react/24/solid';
const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 shadow">
        <h1 className="text-xl font-bold text-gray-900">Account Settings</h1>
      </header>

      <div className="p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex gap-4">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-1.5 rounded-full">
                <CameraIcon className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h2 className="font-bold text-gray-900">Ravikant</h2>
              <p className="text-gray-600">ravikant@gmail.com</p>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
            nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;