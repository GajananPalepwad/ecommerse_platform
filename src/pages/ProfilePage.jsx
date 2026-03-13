import { useState } from "react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("activity")

  return (
    <div className="min-h-screen bg-[#f4f6f8] p-10">
      <div className="max-w-7xl mx-auto flex gap-8">

        {/* ================= LEFT SIDEBAR ================= */}
        <div className="w-[340px] bg-white rounded-2xl shadow-sm overflow-hidden">

          {/* ===== Profile Header (Image Background) ===== */}
          <div className="relative h-72">

            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

              <img
                src="https://i.pravatar.cc/120?img=47"
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />

              <h2 className="mt-4 text-lg font-semibold">
                Jana Strassmann
              </h2>

              <p className="text-sm text-gray-200">
                Registered: 17th Aug 2016
              </p>
            </div>
          </div>

          {/* ===== Sidebar Content ===== */}
          <div className="px-6 py-8">

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Contact Details
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Email:</span> jana@email.com</p>
                <p><span className="font-medium">Phone:</span> +44 370 878794</p>
                <p>
                  <span className="font-medium">Address:</span> 34 Brown Drive,
                  Lake Mary, TN15 8JE
                </p>
              </div>
            </div>

            {/* Marketing */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Marketing
              </h3>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                  Power buyer
                </span>
                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                  VIP
                </span>
              </div>
            </div>

          </div>
        </div>


        {/* ================= RIGHT PANEL ================= */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-8">

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            {["Add note", "Log activity", "Send invoice", "Create task"].map(btn => (
              <button
                key={btn}
                className="bg-gray-100 text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-8 text-sm font-medium">
            <button
              onClick={() => setActiveTab("activity")}
              className={`pb-3 ${
                activeTab === "activity"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
            >
              Activity
            </button>

            <button
              onClick={() => setActiveTab("purchases")}
              className={`pb-3 ${
                activeTab === "purchases"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
            >
              Purchases
            </button>
          </div>

          {/* ================= TIMELINE ================= */}
          {activeTab === "activity" && (
            <div className="space-y-10">

              <TimelineItem
                date="12 – 19th Aug 2018"
                color="bg-yellow-400"
                title="New Review"
              >
                <div className="text-yellow-400 text-sm mb-1">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-sm text-gray-600">
                  Thank you so much for helping me select the correct setup and for super fast delivery.
                </p>
              </TimelineItem>

              <TimelineItem
                date="30 – 31st January"
                color="bg-blue-500"
                title="Delivery"
              >
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Delivered – 31 January</li>
                  <li>Out for Delivery – 31 January</li>
                  <li>Package arrived at final station – 29 January</li>
                  <li>Package shipped – 28 January</li>
                </ul>
              </TimelineItem>

              <TimelineItem
                date="12 – 18th Aug 2018"
                color="bg-gray-400"
                title="Note on Order"
                last
              >
                <p className="text-sm text-gray-600">
                  Include summer 2019 discount voucher in package.
                </p>
              </TimelineItem>

            </div>
          )}

          {activeTab === "purchases" && (
            <p className="text-sm text-gray-500">
              No purchases available.
            </p>
          )}

        </div>
      </div>
    </div>
  )
}


/* ================= Timeline Component ================= */
function TimelineItem({ date, title, children, color, last }) {
  return (
    <div className="grid grid-cols-[20px_1fr] gap-6">

      {/* Dot + Line */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        {!last && (
          <div className="flex-1 w-[2px] bg-gray-200 mt-1"></div>
        )}
      </div>

      {/* Content */}
      <div>
        <p className="text-xs text-gray-400 mb-1">{date}</p>
        <p className="font-semibold text-gray-800">{title}</p>
        <div className="mt-2">{children}</div>
      </div>

    </div>
  )
}
