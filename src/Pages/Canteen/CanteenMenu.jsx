import { useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { menus, canteens } from '../../data/mockData';
import { useCartStore } from '../../stores/cartStore';

export default function CanteenMenu() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSwitchModal, setShowSwitchModal] = useState(false);
  const pendingItemRef = useRef(null);
  const { items, currentCanteenId, canAddFromCanteen, addItem, clearCart, setCurrentCanteen } = useCartStore();

  const canteen = useMemo(() => canteens.find((c) => c.id === id), [id]);
  const menuItems = menus[id] ?? [];

  const handleAdd = (item) => {
    if (items.length > 0 && !canAddFromCanteen(item.canteenId)) {
      pendingItemRef.current = item;
      setShowSwitchModal(true);
      return;
    }
    if (!currentCanteenId) setCurrentCanteen(item.canteenId);
    addItem(item);
  };

  const confirmSwitch = () => {
    clearCart();
    if (pendingItemRef.current) {
      addItem(pendingItemRef.current);
      pendingItemRef.current = null;
    }
    setShowSwitchModal(false);
  };

  const cancelSwitch = () => setShowSwitchModal(false);

  return (
    <AppLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{canteen?.name || 'Canteen'}</h1>
          <p className="text-gray-600">Select items to add to your cart.</p>
        </div>
        <Button onClick={() => navigate('/cart')} className="bg-gray-900 hover:bg-black">Go to Cart ({items.length})</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="mt-1 text-gray-600">₹{item.price}</p>
              <Button className="mt-3" onClick={() => handleAdd(item)}>Add to Cart</Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={showSwitchModal}
        title="Switch canteen?"
        description="You can order from only one canteen at a time. Switching will clear your cart."
        confirmText="Switch"
        cancelText="Cancel"
        onConfirm={confirmSwitch}
        onCancel={cancelSwitch}
      />
    </AppLayout>
  );
}
