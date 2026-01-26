import {
  FaMobileAlt,
  FaCreditCard,
  FaUniversity,
  FaMoneyBillWave,
  FaGift,
} from "react-icons/fa";

const methods = [
  {
    label: "UPI",
    icon: <FaMobileAlt />,
  },
  {
    label: "Credit / Debit / ATM Card",
    icon: <FaCreditCard />,
    sub: "Get upto 5% cashback • 2 offers available",
  },
  {
    label: "EMI",
    icon: <FaUniversity />,
    sub: "Credit Card EMI",
  },
  {
    label: "Net Banking",
    icon: <FaUniversity />,
  },
  {
    label: "Cash on Delivery",
    icon: <FaMoneyBillWave />,
  },
  {
    label: "Have a Flipkart Gift Card?",
    icon: <FaGift />,
  },
];

const PaymentMethods = () => {
  return (
    <div className="w-[48%] px-4 font-bold">
      <div className="space-y-2">
        {methods.map((item, i) => (
          <div
            key={i}
            className={`flex gap-3 px-4 py-4 rounded-sm cursor-pointer
            ${i === 0 ? "bg-gray-200 font-semibold" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            {/* Icon */}
            <div className="text-lg text-gray-700 mt-0.5">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <p className="text-sm text-gray-800">
                {item.label}
              </p>

              {item.sub && (
                <p className="text-xs text-green-600 mt-0.5">
                  {item.sub}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
