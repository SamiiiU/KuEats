import { Link } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { canteens } from '../../data/mockData';

export default function Home() {
  return (
    <AppLayout>
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Welcome to KuEats</h1>
        <p className="mt-2 text-gray-600">Order fresh meals from your campus canteen.</p>
      </section>

      <section className="mb-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Flat 10% off on breakfast</h3>
            <p className="text-gray-600">Use code CAMPUS10</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Free delivery over ₹200</h3>
            <p className="text-gray-600">Limited time offer</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Canteens</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {canteens.map((c) => (
            <Card key={c.id} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{c.name}</h3>
                  <p className="text-gray-600">ETA {c.eta}</p>
                  <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs ${c.open ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{c.open ? 'Open' : 'Closed'}</span>
                </div>
                <Link to={`/canteen/${c.id}`}>
                  <Button>View Menu</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/history">
            <Button className="bg-gray-900 hover:bg-black">View Order History</Button>
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
