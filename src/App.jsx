import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./Pages/Auth/Login.jsx";
import Signup from "./Pages/Auth/Signup.jsx";
import Home from "./Pages/Home/Home.jsx";
import CanteenMenu from "./Pages/Canteen/CanteenMenu.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import OrderProcessing from "./Pages/Order/OrderProcessing.jsx";
import History from "./Pages/History/History.jsx";


function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}> 
        <Route path="/home" element={<Home />} />
        <Route path="/canteen/:id" element={<CanteenMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-processing" element={<OrderProcessing />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* Redirect root to /home for authenticated flow */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;