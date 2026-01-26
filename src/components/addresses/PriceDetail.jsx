const PriceDetail = () => {
  return (
    <div className="bg-white p-4">
      <h3 className="font-semibold text-sm mb-4">PRICE DETAILS</h3>

      <div className="flex justify-between text-sm mb-2">
        <span>Price (1 item)</span>
        <span>₹71,400</span>
      </div>

      <div className="flex justify-between font-semibold text-sm border-t pt-3">
        <span>Total Payable</span>
        <span>₹40,990</span>
      </div>

      <p className="text-green-600 text-md mt-3 font-bold">
        Your Total Savings on this order ₹30,410
      </p>
    </div>
  );
};

export default PriceDetail;
