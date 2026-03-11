import { useNavigate } from "react-router-dom"

export default function ReturnsSupport() {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Returns & Refunds</h1>

      <ul className="space-y-3 text-gray-700">
        <li>• Return policy details</li>
        <li>• How to request a return</li>
        <li>• Refund timeline</li>
        <li>• Exchange options</li>
      </ul>
    </div>
  )
}
