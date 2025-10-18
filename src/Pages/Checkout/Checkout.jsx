import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';
import { useCartStore } from '../../stores/cartStore';
import { useAuthStore } from '../../stores/authStore';
import { useOrderStore } from '../../stores/orderStore';
import { canteens } from '../../data/mockData';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, currentCanteenId, clearCart } = useCartStore();
  const { currentUser } = useAuthStore();
  const { placeOrder } = useOrderStore();
  const [department, setDepartment] = useState(currentUser?.department || '');
  const [paymentMethod] = useState('Cash on Delivery');

  const canteen = useMemo(() => canteens.find((c) => c.id === currentCanteenId), [currentCanteenId]);

  if (items.length === 0) {
    navigate('/cart');
  }

  const onConfirm = () => {
    const order = placeOrder({
      canteenId: currentCanteenId,
      canteenName: canteen?.name || 'Canteen',
      items: items.map((it) => ({ id: it.id, name: it.name, quantity: it.quantity, price: it.price })),
      total: total(),
    });
    clearCart();
    navigate('/order-processing', { state: { orderId: order.id } });
  };

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h1 className="mb-4 text-2xl font-semibold">Checkout</h1>
            <div className="space-y-4">
              <InputField label="Delivery Department" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Your department" />
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">Payment Method</span>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2" value={paymentMethod} disabled>
                  <option>Cash on Delivery</option>
                </select>
              </label>
              <div>
                <span className="mb-1 block text-sm font-medium text-gray-700">User</span>
                <p className="rounded-md border border-gray-200 px-3 py-2">{currentUser?.name || currentUser?.email}</p>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Order Summary</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {items.map((it) => (
                <li key={it.id} className="flex justify-between">
                  <span>{it.name} x {it.quantity}</span>
                  <span>₹{it.price * it.quantity}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-medium">Total: ₹{total()}</p>
            <Button className="mt-4 w-full" onClick={onConfirm}>Confirm Order</Button>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
