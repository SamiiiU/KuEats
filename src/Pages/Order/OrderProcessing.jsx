import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useOrderStore } from '../../stores/orderStore';

const STEPS = [
  'Food is being prepared',
  'Food is with the rider',
  'Food delivered!',
  'Enjoy your meal! Please submit a review.',
];

export default function OrderProcessing() {
  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location.state?.orderId;
  const { updateOrderStatus } = useOrderStore();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!orderId) return;
    const interval = setInterval(() => {
      setStepIndex((idx) => {
        const next = Math.min(idx + 1, STEPS.length - 1);
        if (next === 1) updateOrderStatus(orderId, 'Out for delivery');
        if (next === 2) updateOrderStatus(orderId, 'Delivered');
        return next;
      });
    }, 10000); // 10 seconds per step
    return () => clearInterval(interval);
  }, [orderId, updateOrderStatus]);

  return (
    <AppLayout>
      <Card className="mx-auto max-w-xl p-6 text-center">
        <h1 className="mb-2 text-2xl font-semibold">Order Processing</h1>
        <p className="text-gray-600">{STEPS[stepIndex]}</p>
        {stepIndex === STEPS.length - 1 && (
          <Button className="mt-6" onClick={() => navigate('/home')}>Go Back to Home</Button>
        )}
      </Card>
    </AppLayout>
  );
}
