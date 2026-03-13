import { useNavigate } from "react-router-dom"

export default function PrivacySupport() {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Privacy & Security</h1>

      <ul className="space-y-3 text-gray-700">
        <li>• Data protection policy</li>
        <li>• Two-factor authentication</li>
        <li>• Account security tips</li>
      </ul>
    </div>
  )
}
