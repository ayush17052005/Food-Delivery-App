import { useAuth } from "../../context/AuthContext";
import { logout } from "../../services/auth";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Account</h1>
          <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white font-bold">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <p className="text-lg text-gray-600">
            Email: <span className="font-medium">{user?.email}</span>
          </p>
        </div>

        <div className="space-y-6">
          <Link 
            to="/orders" 
            className="block w-full text-center bg-white border-2 border-red-500 text-red-500 px-4 py-3 rounded-lg hover:bg-red-50 transition duration-200"
          >
            My Orders
          </Link>

          <button 
            onClick={logout}
            className="w-full bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;