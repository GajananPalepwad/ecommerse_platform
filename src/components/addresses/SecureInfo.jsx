const SecureInfo = () => {
  return (
    <div className="bg-white p-4 mt-4 text-sm text-gray-400 font-bold">
      <p>🔒 Safe and Secure Payments. Easy returns.</p>
      <p>100% Authentic products.</p>

      <p className="text-sm mt-3 text-gray-400">
        By continuing with the order, you confirm that you are above 18 years of age, and you agree to the  Flipkart’s 
        <span className="text-blue-600 cursor-pointer">
          {" "}Terms of Use{" "}
        </span>
        and
        <span className="text-blue-600 cursor-pointer">
          {" "}Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default SecureInfo;
