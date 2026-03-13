import React from "react"
import { useNavigate } from "react-router-dom"

export default function HelpSupport() {
  const navigate = useNavigate()

  const supportTopics = [
    { name: "Orders & Shipping", path: "orders" },
    { name: "Returns & Refunds", path: "/returns" },
    { name: "Payment Methods", path: "/payments" },
    { name: "Account & Security", path: "/account" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Gift Cards & Offers", path: "/gift-cards" },
  ]

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">

      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          How can we help you today?
        </h1>

        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Search for orders, returns, payments..."
            className="w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Popular:{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/orders")}
          >
            track order
          </span>{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/returns")}
          >
            returns
          </span>{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/payments")}
          >
            refund status
          </span>
        </p>
      </div>

      {/* Get Started Section */}
      <div className="max-w-6xl mx-auto mt-14">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">
          Get Started
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div
            onClick={() => navigate("/faqs")}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-lg mb-4">
              🛍️
            </div>
            <h3 className="font-semibold text-gray-800">
              Shopping FAQs
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Find answers about orders, payments, shipping and more.
            </p>
          </div>

          <div
            onClick={() => navigate("/orders")}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
              📦
            </div>
            <h3 className="font-semibold text-gray-800">
              Track Your Order
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Check your delivery status and estimated arrival time.
            </p>
          </div>

          <div
            onClick={() => navigate("/contact")}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg mb-4">
              💬
            </div>
            <h3 className="font-semibold text-gray-800">
              Contact Support
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Reach out to our support team for quick assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Support Topics Section */}
      <div className="max-w-6xl mx-auto mt-16 bg-gray-100 rounded-2xl p-10">
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Support Topics
        </h2>
        <p className="text-sm text-gray-500 text-center mb-10">
          Learn more about shopping, returns and account management
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {supportTopics.map((topic, index) => (
            <div
              key={index}
              onClick={() => navigate(topic.path)}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition duration-200 cursor-pointer text-center border border-gray-100"
            >
              <div className="text-3xl mb-4 text-gray-400">🛒</div>
              <h3 className="text-gray-700 font-medium">
                {topic.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
