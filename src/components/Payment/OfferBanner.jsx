const OfferBanner = () => {
  return (
    <div className="bg-green-100 p-3 rounded flex justify-between items-center">
      <div>
        <p className="font-semibold text-green-700">₹400 Off</p>
        <p className="text-xs text-green-700">
          Claim now with payment offers
        </p>
      </div>

      <div className="flex gap-2 text-xl">
        🅰️ 🅱️ 💳
      </div>
    </div>
  );
};

export default OfferBanner;
