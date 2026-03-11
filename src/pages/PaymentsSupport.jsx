import { useNavigate } from "react-router-dom"

export default function PaymentsSupport() {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Payments & Billing</h1>

      <ul className="space-y-3 text-gray-700">
        <li>• Accepted payment methods</li>
        <li>• Payment failure issues</li>
        <li>• Billing address changes</li>
        <li>• EMI options</li>
      </ul>
    </div>
  )
}
