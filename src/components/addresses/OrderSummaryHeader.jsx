const OrderSummaryHeader = () => {
  return (
    <div className="bg-white border mt-4">
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
          3
        </span>
        <p className="text-sm font-semibold text-gray-400">
          ORDER SUMMARY
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryHeader;
