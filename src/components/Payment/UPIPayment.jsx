const UPIPayment = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm max-w-md">
      <h3 className="font-semibold mb-4">Pay using UPI</h3>
      <input
        type="text"
        placeholder="Enter UPI ID"
        className="w-full border rounded px-3 py-2 mb-4"
      />
      <button className="w-full bg-yellow-400 font-semibold py-3 rounded">
        Pay ₹608
      </button>
    </div>
  );
};

export default UPIPayment;
