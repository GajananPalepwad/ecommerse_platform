import FilterPill from "./FilterPill";
import TopProducts from "../Explore/TopProducts";

function SearchPage() {
  const filters = [
    { label: "Category", value: "All Categories", width: "w-[190px]" },
    { label: "Colors", value: "All Colors", width: "w-[160px]" },
    { label: "Features", value: "All Features", width: "w-[180px]" },
    { label: "Price", value: "From $0-$1000", width: "w-[210px]" },
    { label: "Sort", value: "New In", width: "w-[150px]", right: true },
  ];

  const bagProducts = [
    { id: 1, name: "Classic Leather Backpack", price: "$120" },
    { id: 2, name: "Travel Duffel Bag", price: "$200" },
    { id: 3, name: "Mini Sling Bag", price: "$80" },
    { id: 4, name: "Canvas Tote Bag", price: "$60" },
    { id: 5, name: "Laptop Messenger Bag", price: "$150" },
    { id: 6, name: "Fashion Shoulder Bag", price: "$90" },
    { id: 7, name: "Sports Gym Bag", price: "$70" },
    { id: 8, name: "Luxury Handbag", price: "$250" },
  ];

  return (
    <div className="ml-9 mt-10 w-[85%] rounded-2xl bg-white p-6 mx-auto">
      {/* Filters */}
      <div className="bg-gray-200 p-6 rounded-xl mb-8">
        <div className="flex gap-6 flex-wrap">
          {filters.map((f, i) => (
            <div key={i} className={f.right ? "ml-auto" : ""}>
              <FilterPill label={f.label} value={f.value} width={f.width} />
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <TopProducts products={bagProducts} title="Bags" />
    </div>
  );
}

export default SearchPage;
