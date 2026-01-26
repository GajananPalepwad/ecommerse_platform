import { useState } from "react";

import PaymentHeader from "../components/Payment/PaymentHeader";
import PaymentMethods from "../components/Payment/PaymentMethods";
import UPIPayment from "../components/Payment/UPIPayment";
import CardPayment from "../components/Payment/CardPayment";
import PaymentSummary from "../components/Payment/PaymentSummary";
import OfferBanner from "../components/Payment/OfferBanner";

const Payment = () => {
  const [activeMethod, setActiveMethod] = useState("upi"); // default open

  return (
    <div className="bg-gray-50 min-h-screen">
      <PaymentHeader />

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-12 gap-4">
        
        {/* LEFT SECTION */}
        <div className="col-span-12 md:col-span-8 bg-white rounded shadow flex">
          
          {/* Payment Methods */}
          <PaymentMethods
            activeMethod={activeMethod}
            setActiveMethod={setActiveMethod}
          />

          {/* Payment Content */}
          <div className="flex-1 p-6">
            {activeMethod === "upi" && <UPIPayment />}
            {activeMethod === "card" && <CardPayment />}
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="col-span-12 md:col-span-4 space-y-4">
          <PaymentSummary />
          <OfferBanner />
        </div>

      </div>
    </div>
  );
};

export default Payment;
