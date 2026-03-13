import { useNavigate } from "react-router-dom"

export default function AccountSupport() {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>

      <ul className="space-y-3 text-gray-700">
        <li>• Change password</li>
        <li>• Update email</li>
        <li>• Delete account</li>
        <li>• Manage notifications</li>
      </ul>
    </div>
  )
}
