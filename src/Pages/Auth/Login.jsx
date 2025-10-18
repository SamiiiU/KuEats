import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import AppLayout from '../../components/AppLayout';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

export default function Login() {
  const navigate = useNavigate();
  const { login, currentUser, initialize, isLoading, error } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (currentUser) navigate('/home');
  }, [currentUser, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    if (res.ok) {
      navigate('/home');
    }
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-semibold">Login</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@university.edu" required />
          <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" disabled={isLoading} className="w-full">{isLoading ? 'Signing in...' : 'Login'}</Button>
        </form>
        <p className="mt-4 text-sm text-gray-600">No account? <Link to="/signup" className="text-blue-700 hover:underline">Sign up</Link></p>
      </div>
    </AppLayout>
  );
}
