export default function Gifting() {
  return (
    <div>
      {/* Header */}
      <h3 className="font-semibold text-sm mb-3">Gifting</h3>

      {/* Gifting Option - Colored box */}
      <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg border border-gray-300">
        {/* Gift Icon */}
        <div className="text-5xl leading-none text-purple-500">
          🎀
        </div>

        

        {/* Content */}
        <div className="flex-1">
          <h4 className="font-medium text-sm mb-1">Buying for a loved one?</h4>
          <p className="text-xs text-gray-500 mb-2">
            Send personalized message at $20
          </p>
          <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            Add gift wrap
          </button>
        </div>
      </div>
    </div>
  )
}


{/* <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg border border-gray-300">
        {/* Gift Icon - SVG */}
        // <div className="text-purple-500">
        //   <svg 
        //     xmlns="http://www.w3.org/2000/svg" 
        //     width="48" 
        //     height="48" 
        //     viewBox="0 0 24 24" 
        //     fill="none" 
        //     stroke="currentColor" 
        //     strokeWidth="2" 
        //     strokeLinecap="round" 
        //     strokeLinejoin="round"
        //   >
        //     <polyline points="20 12 20 22 4 22 4 12"></polyline>
        //     <rect x="2" y="7" width="20" height="5"></rect>
        //     <line x1="12" y1="22" x2="12" y2="7"></line>
        //     <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
        //     <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        //   </svg>
        // </div> */}

