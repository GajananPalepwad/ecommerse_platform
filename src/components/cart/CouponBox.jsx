const CouponBox = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-2">Coupons</h3>

      <div className="flex items-center justify-between border p-2 rounded">
        <span className="text-sm">MAX500</span>
        <button className="text-green-600 text-sm font-medium">
          Applied
        </button>
      </div>
    </div>
  );
};

export default CouponBox;
