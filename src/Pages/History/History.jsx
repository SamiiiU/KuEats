import { Link } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useOrderStore } from '../../stores/orderStore';

export default function History() {
  const { orders, reorder } = useOrderStore();

  return (
    <AppLayout>
      <h1 className="mb-4 text-2xl font-bold">Order History</h1>
      {orders.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-600">No previous orders.</p>
          <Link to="/home" className="mt-4 inline-block">
            <Button>Browse Canteens</Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <Card key={o.id} className="p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">{o.canteenName}</h3>
                  <p className="text-sm text-gray-600">{new Date(o.createdAt).toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">₹{o.total}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs ${o.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{o.status}</span>
                  <Link to={`/canteen/${o.canteenId}`}>
                    <Button className="bg-gray-900 hover:bg-black">Re-order</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </AppLayout>
  );
}
