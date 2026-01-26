const CheckoutHeader = () => {
  return (
    <div className="bg-white border border-gray-300">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            1
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-400">
              LOGIN ✅
              {/* <span className="text-blue-300">✔</span> */}
            </p>
            <p className="text-xs text-gray-600">
              Flipkart Customer • +917757085531
            </p>
          </div>
        </div>
        <button className="text-blue-600 text-sm font-medium border px-4 py-1">
          CHANGE
        </button>
      </div>
    </div>
  );
};

export default CheckoutHeader;
