import { useParams, useNavigate } from "react-router-dom"
import { ChevronDown, Copy, Star } from "lucide-react"

export default function OrderDetails() {
  const { orderId } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Left Column - Main Content */}
          <div className="flex-1">
            {/* Product Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              {/* Product Header */}
              <div className="flex gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop"
                  alt="Kreo Swarm X Wireless Keyboard"
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h1 className="text-base font-normal text-gray-800 mb-1">
                    Kreo Swarm X Wireless 75% Mechanical Keyboard Red Switches with Light Shine Through Wireless Tenkeyless Gaming Keyboard Compatible with Desktop
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">Tenkeyless, White</p>
                  <p className="text-sm text-gray-500 mb-2">
                    Seller: LukusBrandsPvtLtd
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium">₹4,006</span>
                    <span className="text-sm text-green-600 bg-green-50 px-2 py-0.5 rounded">
                      1 offer
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Timeline */}
              <div className="relative space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="relative flex flex-col items-center">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center z-10">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-0.5 h-8 bg-green-600"></div>
                  </div>
                  <div className="pt-0.5">
                    <p className="font-medium text-gray-800">Order Confirmed, Sep 23, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <p className="font-medium text-gray-800">Delivered, Sep 26, 2025</p>
                  </div>
                </div>
              </div>

              {/* See All Updates Link */}
              <button className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1 mb-6">
                See All Updates
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Chat Button */}
              <button className="w-full border border-gray-300 rounded py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat with us
              </button>
            </div>

            {/* Rate Your Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Rate your experience</h2>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-sm">Rate the product</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
                        fill="none"
                        strokeWidth={2}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order ID */}
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span>Order #OD33554548962484S100</span>
              <button className="text-blue-600 hover:text-blue-700">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-80">
            {/* Delivery Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Delivery details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div className="text-sm text-gray-700 flex-1">
                    <span className="font-medium">Home</span> Shree sant Ramdas Ji Nagar, nagar kaleshwar road Vish...
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div className="text-sm">
                    <span className="font-medium text-gray-800">Gajanan Ramrao Palepwad</span>
                    <span className="text-gray-600"> 7757085531</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Price details</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Listing price</span>
                  <span className="text-gray-800">₹10,000</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Special price</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-800">₹4,444</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Total fees</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-gray-800">₹7</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Other discount</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-green-600">-₹445</span>
                </div>

                <div className="border-t border-dashed border-gray-300 my-3"></div>

                <div className="flex justify-between font-medium">
                  <span className="text-gray-800">Total amount</span>
                  <span className="text-gray-800">₹4,006</span>
                </div>

                <div className="flex justify-between text-xs text-gray-500 pt-2">
                  <span>Payment method</span>
                  <span>Flipkart Wallet, UPI</span>
                </div>
              </div>

              {/* Download Invoice Button */}
              <button className="w-full border border-gray-300 rounded mt-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Invoice
              </button>

              {/* Offers Earned */}
              <button className="w-full border border-gray-300 rounded mt-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <span>Offers earned</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}