import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import Button from './ui/Button';

export default function AppNavbar() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/home" className="text-lg font-semibold text-blue-700">
          KuEats
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/home" className="text-gray-700 hover:text-blue-700">Home</Link>
          <Link to="/history" className="text-gray-700 hover:text-blue-700">History</Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-700">Cart</Link>
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="hidden text-sm text-gray-600 sm:inline">Hi, {currentUser.name || currentUser.email}</span>
              <Button className="px-3 py-1" onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="text-gray-700 hover:text-blue-700">Login</Link>
              <Button className="px-3 py-1" onClick={() => navigate('/signup')}>Sign up</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
