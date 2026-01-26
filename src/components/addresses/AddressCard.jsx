import { useNavigate } from "react-router-dom";

const AddressCard = ({ selected }) => {
  const navigate = useNavigate();

  const handleDeliverHere = () => {
    navigate("/payment");
  };

  return (
    <div
      className={`p-4 border border-gray-200 ${
        selected ? "bg-blue-50" : "bg-white"
      }`}
    >
      <div className="flex gap-3 items-start">
        {/* Radio */}
        <div className="mt-1">
          <input type="radio" checked={selected} readOnly />
        </div>

        <div className="w-full">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-sm">
              Gajanan Ramrao Palepwad
            </span>

            <span className="text-xs bg-gray-200 px-2 py-0.5">
              HOME
            </span>

            <span className="text-sm">7757085531</span>

            <span className="ml-auto text-blue-600 text-sm cursor-pointer">
              EDIT
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-1">
            Shree sant Ramdas ji Nagar, nagar kaleshwar road Vishnupuri,
            Nanded District, Maharashtra - 431606
          </p>

          {selected && (
            <button
              onClick={handleDeliverHere}
              className="mt-3 bg-green-400 hover:bg-green-600 text-white px-6 py-2 text-sm font-semibold"
            >
              DELIVER HERE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
