const CardPayment = () => {
  return (
    <div className="max-w-md">
      <p className="text-sm text-gray-600 mb-4">
        Note: Please ensure your card can be used for online transactions.
        <span className="text-blue-600 cursor-pointer ml-1">Learn More</span>
      </p>

      <div className="bg-white rounded-lg p-6 space-y-4">
        <div>
          <label className="text-sm font-medium">Card Number</label>
          <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="text-sm font-medium">Valid Thru</label>
            <input
              type="text"
              placeholder="MM / YY"
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>

          <div className="w-1/2">
            <label className="text-sm font-medium">CVV</label>
            <input
              type="password"
              placeholder="CVV"
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>
        </div>

        <button className="w-full bg-yellow-400 text-black py-3 rounded font-semibold">
          Pay ₹608
        </button>
      </div>
    </div>
  );
};

export default CardPayment;
