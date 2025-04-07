import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const sampleOrders = [
    {
      id: '#ORD001',
      date: '2024-01-15',
      total: 45.99,
      status: 'Delivered',
      items: ['Pasta Carbonara', 'Caesar Salad']
    },
    // Add more sample orders as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src="https://png.pngtree.com/png-vector/20220813/ourmid/pngtree-user-flat-red-color-rounded-vector-icon-flat-personal-isolated-vector-png-image_19495794.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{user?.displayName || 'User Name'}</h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-6">
        {['profile', 'orders', 'settings'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-medium ${
              activeTab === tab
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={user?.displayName || ''}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={user?.email || ''}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Add phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Add your address"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Order History</h2>
            <div className="space-y-4">
              {sampleOrders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">${order.total}</p>
                      <p className="text-sm text-green-600">{order.status}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      {order.items.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Account Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800">Email Notifications</h3>
                  <p className="text-sm text-gray-600">Receive order updates and promotions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
              <button
                onClick={handleLogout}
                className="w-full md:w-auto px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
