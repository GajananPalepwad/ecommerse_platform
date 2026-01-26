const PaymentSummary = () => {
  return (
    <div className="bg-blue-50 p-4 rounded shadow-sm text-sm">
      <div className="flex justify-between mb-2">
        <span>MRP (incl. of all taxes)</span>
        <span>₹71,400</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>MRP Discount</span>
        <span className="text-green-600">-₹30,410</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-semibold text-blue-600">
        <span>Total Amount</span>
        <span>₹40,990</span>
      </div>
    </div>
  );
};

export default PaymentSummary;
