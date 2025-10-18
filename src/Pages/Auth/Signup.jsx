import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import AppLayout from '../../components/AppLayout';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

export default function Signup() {
  const navigate = useNavigate();
  const { signup, currentUser, initialize, isLoading, error } = useAuthStore();
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('Student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (currentUser) navigate('/home');
  }, [currentUser, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert('Passwords do not match');
    const res = await signup({ name, department, role, email, password });
    if (res.ok) {
      navigate('/home');
    }
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-semibold">Sign up</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" required />
          <InputField label="Department" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Computer Science" required />
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">Role</span>
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Student</option>
              <option>Faculty Member</option>
              <option>Teacher</option>
            </select>
          </label>
          <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@university.edu" required />
          <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <InputField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" disabled={isLoading} className="w-full">{isLoading ? 'Creating account...' : 'Create account'}</Button>
        </form>
        <p className="mt-4 text-sm text-gray-600">Have an account? <Link to="/login" className="text-blue-700 hover:underline">Login</Link></p>
      </div>
    </AppLayout>
  );
}
