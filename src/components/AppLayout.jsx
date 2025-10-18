import AppNavbar from './AppNavbar';

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar />
      <main className="mx-auto max-w-6xl p-4 pb-16">
        {children}
      </main>
    </div>
  );
}
