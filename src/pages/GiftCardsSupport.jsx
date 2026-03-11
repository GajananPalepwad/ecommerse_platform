import { useNavigate } from "react-router-dom"

export default function GiftCardsSupport() {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Gift Cards</h1>

      <ul className="space-y-3 text-gray-700">
        <li>• How to buy gift cards</li>
        <li>• Redeem gift card</li>
        <li>• Gift card balance check</li>
      </ul>
    </div>
  )
}
