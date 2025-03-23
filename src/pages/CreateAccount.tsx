import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Create your PopX account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-600">
              Full Name*
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-600">
              Phone number*
            </label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-600">
              Email address*
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-600">
              Password*
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-600">
              Company name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-purple-600">
              Are you an Agency?*
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  className="w-4 h-4 text-purple-600"
                  checked={formData.isAgency}
                  onChange={() => setFormData({ ...formData, isAgency: true })}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  className="w-4 h-4 text-purple-600"
                  checked={!formData.isAgency}
                  onChange={() => setFormData({ ...formData, isAgency: false })}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;