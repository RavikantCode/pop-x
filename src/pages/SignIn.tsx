import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <div className="max-w-md mx-auto space-y-8 mt-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Signin to your PopX account
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-500 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;