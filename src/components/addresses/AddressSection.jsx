import AddressCard from "./AddressCard";

const AddressSection = () => {
  return (
    <div className="bg-white border border-gray-200">

      {/* DELIVERY ADDRESS HEADER */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-400 text-white">
        <span className="bg-white text-blue-600 text-xs font-semibold px-2 py-1 rounded">
          2
        </span>
        <p className="text-sm font-semibold">DELIVERY ADDRESS</p>
      </div>

      {/* VERY FAINT DIVIDERS */}
      <div className="divide-y divide-gray-200/40">
        <AddressCard selected />
        <AddressCard />
        <AddressCard />
      </div>

      <div className="px-4 py-3 text-blue-600 text-sm font-medium cursor-pointer hover:bg-gray-50">
        View all 5 addresses
      </div>

      <div className="px-4 py-3 border-t border-gray-200/40 text-blue-600 text-sm font-medium cursor-pointer hover:bg-gray-50">
        + Add a new address
      </div>

    </div>
  );
};

export default AddressSection;
