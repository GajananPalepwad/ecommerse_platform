import { useNavigate } from "react-router-dom"

export default function OrdersSupport() {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Orders & Shipping</h1>

      <ul className="space-y-3 text-gray-700">
        <li>• How to track my order?</li>
        <li>• Change delivery address</li>
        <li>• Cancel an order</li>
        <li>• Shipping charges information</li>
      </ul>
    </div>
  )
}
