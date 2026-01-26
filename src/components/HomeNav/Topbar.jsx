import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

/* Dummy cart preview images */
const cartPreviewImages = [
  "/toy.png",
  "/toy1.png",
  "/toy2.png",
  "/toy3.png",
]

export default function Topbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isCartPage = location.pathname === "/cart"

  return (
    <header className="relative flex items-center bg-white px-6 py-4 shadow-sm w-full text-gray-800">

      {/* CENTER: SEARCH BAR */}
      <div className="flex-1 flex justify-center mx-6">
        <div className="relative w-full max-w-2xl">

          {/* Search Icon */}
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {/* Input */}
<input
  type="text"
  placeholder="Search Perfect Product for you"
  onFocus={() => navigate("/search")}
  onClick={() => navigate("/search")}
  className="
    w-full
    pl-12 pr-4 py-2.5
    border border-gray-300
    rounded-full
    text-sm
    focus:outline-none
    focus:border-black
    cursor-pointer
  "
/>

        </div>
      </div>

      {/* RIGHT: CART + PREVIEW + PROFILE */}
      <div className="flex items-center gap-4">

        {/* Cart + Preview */}
        <div className="flex items-center gap-3">

          {/* Cart Button */}
          <button
            onClick={() => navigate("/cart")}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition
              ${isCartPage
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            🛒 Cart
          </button>

          {/* Cart Preview Images */}
          <div className="flex items-center -space-x-2">
            {cartPreviewImages.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="cart item"
                className="w-7 h-7 rounded-full border-2 border-white object-cover bg-gray-100"
              />
            ))}

            {cartPreviewImages.length > 3 && (
              <div className="w-7 h-7 rounded-full bg-gray-200 text-xs flex items-center justify-center border-2 border-white font-semibold">
                +{cartPreviewImages.length - 3}
              </div>
            )}
          </div>
        </div>

        {/* Profile */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border z-50 overflow-hidden">
              <DropdownItem text="Notifications" />
              <DropdownItem text="My Profile" />
              <DropdownItem text="Settings" />
              <hr />
              <DropdownItem text="Logout" danger />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function DropdownItem({ text, danger }) {
  return (
    <div
      className={`px-4 py-2 text-sm cursor-pointer transition
        ${danger
          ? "text-red-500 hover:bg-red-50"
          : "hover:bg-gray-100"
        }`}
    >
      {text}
    </div>
  )
}
