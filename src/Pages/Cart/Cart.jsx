import { Link, useNavigate } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useCartStore } from '../../stores/cartStore';
import { canteens } from '../../data/mockData';

export default function Cart() {
  const navigate = useNavigate();
  const { items, increment, decrement, removeItem, total, currentCanteenId } = useCartStore();
  const canteen = canteens.find((c) => c.id === currentCanteenId);

  const onCheckout = () => {
    if (items.length === 0) return;
    navigate('/checkout');
  };

  return (
    <AppLayout>
      <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
      {items.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/home" className="mt-4 inline-block">
            <Button>Browse Canteens</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it) => (
              <Card key={it.id} className="p-4">
                <div className="flex items-center gap-4">
                  <img src={it.image} alt={it.name} className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1">
                    <h3 className="font-medium">{it.name}</h3>
                    <p className="text-sm text-gray-600">₹{it.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button className="px-2 py-1" onClick={() => decrement(it.id)}>-</Button>
                    <span className="w-8 text-center">{it.quantity}</span>
                    <Button className="px-2 py-1" onClick={() => increment(it.id)}>+</Button>
                  </div>
                  <Button className="ml-2 bg-red-600 hover:bg-red-700" onClick={() => removeItem(it.id)}>Remove</Button>
                </div>
              </Card>
            ))}
          </div>
          <div>
            <Card className="p-6">
              <h3 className="mb-2 text-lg font-semibold">Summary</h3>
              <p className="text-sm text-gray-600">Canteen: {canteen?.name || '-'}</p>
              <p className="mt-2 font-medium">Total: ₹{total()}</p>
              <Button className="mt-4 w-full" onClick={onCheckout}>Proceed to Checkout</Button>
            </Card>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
