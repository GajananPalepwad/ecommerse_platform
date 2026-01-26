import { useNavigate } from "react-router-dom";

const PriceDetails = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/address");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-3">Price Details</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>1 item</span>
          <span>$45.20</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Coupon discount</span>
          <span>- $2.50</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="text-green-600">Free</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <span>Total Amount</span>
          <span>$67.09</span>
        </div>
      </div>

      {/* PLACE ORDER BUTTON */}
      <button
        onClick={handlePlaceOrder}
        className="w-full mt-4 bg-black text-white py-3 rounded hover:opacity-90"
      >
        Place Order →
      </button>
    </div>
  );
};

export default PriceDetails;
