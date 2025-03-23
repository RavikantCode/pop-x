import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen p-6 bg-white">
      <div className="max-w-md mx-auto space-y-8 mt-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/create-account"
            className="block w-full py-3 px-4 bg-purple-600 text-white text-center rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Create Account
          </Link>
          <Link
            to="/signin"
            className="block w-full py-3 px-4 bg-purple-50 text-purple-600 text-center rounded-lg font-medium hover:bg-purple-100 transition-colors"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;