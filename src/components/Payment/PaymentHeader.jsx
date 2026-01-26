import { useNavigate } from "react-router-dom";

const PaymentHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-2">

          {/* Back Arrow */}
          <button
            onClick={() => navigate("/address")}
            className="p-1"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#212121"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <h2 className="text-lg font-semibold text-gray-800">
            Complete Payment
          </h2>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-600 flex items-center gap-1">
          🔒 <span>100% Secure</span>
        </div>

      </div>
    </div>
  );
};

export default PaymentHeader;
