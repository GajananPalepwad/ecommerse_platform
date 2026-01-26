import React, { useState } from "react";
import {
  LayoutGrid,
  UserRound,
} from "lucide-react";

import PromoCard from "./PromoCard";
import { CategoryCard, ShowMoreCard } from "./CategoryCards";
import TopProducts from "./TopProducts";
import CategoryModal from "./CategoryModal";
/* ---------------- DATA ---------------- */

const banners = [
  {
    id: 1,
    title: "GET UP TO 50% OFF",
    sub: "Get Discount",
    bg: "bg-teal-100",
  },
  {
    id: 2,
    title: "Winter's Weekend",
    sub: "Keep it casual",
    bg: "bg-yellow-100",
  },
];

const categories = [
  { id: 1, name: "Casual" },
  { id: 2, name: "Formal" },
  { id: 3, name: "Sports" },
  { id: 4, name: "Shoes" },
  { id: 5, name: "Accessories" },
  { id: 6, name: "Toys" },
  { id: 7, name: "Furniture" },
  { id: 8, name: "Books" },
  { id: 9, name: "Electronics" },
  { id: 10, name: "Beauty" },
];

/* ---------------- PAGE ---------------- */

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState("All");
  
const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="bg-white p-8 max-w-[1600px] mx-auto">

      {/* ================= HEADER ================= */}
      <div className="mb-10">
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-12">
            <h1 className="text-[28px] font-semibold text-gray-900">
              Explore
            </h1>

            <div className="flex gap-2 relative">
              {["All", "Men", "Women"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-500"
                >
                  {tab === "All" ? (
                    <LayoutGrid size={16} />
                  ) : (
                    <UserRound size={16} />
                  )}
                  {tab}

                  {activeTab === tab && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 h-[4px] w-6 rounded-full bg-blue-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <button className="relative px-5 py-2 rounded-full bg-gray-100 text-sm font-medium">
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full" />
            Filters
          </button>
        </div>

        <div className="mt-6 h-px bg-gray-200 w-full" />
      </div>

      {/* ================= GRID ================= */}
     <section className="mb-14 overflow-x-auto">
  <div className="grid grid-cols-12 gap-6 min-w-[1200px] items-stretch">

    <div className="col-span-6">
      <PromoCard banner={banners[0]} />
    </div>

    {categories.slice(0, 3).map((cat) => (
      <div key={cat.id} className="col-span-2">
        <CategoryCard cat={cat} />
      </div>
    ))}

    <div className="col-span-6">
      <PromoCard banner={banners[1]} />
    </div>

    {categories.slice(3, 5).map((cat) => (
      <div key={cat.id} className="col-span-2">
        <CategoryCard cat={cat} />
      </div>
    ))}

    <div className="col-span-2">
      <ShowMoreCard onClick={() => setShowCategories(true)} />
    </div>

  </div>
</section>

{/* ✅ MODAL OUTSIDE GRID */}
{showCategories && (
  <CategoryModal
    categories={categories}
    onClose={() => setShowCategories(false)}
  />
)}


      <TopProducts />
    </div>
  );
};

export default ExplorePage;