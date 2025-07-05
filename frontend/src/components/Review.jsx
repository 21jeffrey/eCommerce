import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'

function Review({ value, text }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= value ? (
              <StarIcon className="h-5 w-5 text-yellow-400" />
            ) : star - 0.5 <= value ? (
              <div className="relative">
                <StarIconOutline className="h-5 w-5 text-yellow-400" />
                <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            ) : (
              <StarIconOutline className="h-5 w-5 text-yellow-400" />
            )}
          </span>
        ))}
      </div>
      {text && <p className="mt-1 text-sm text-gray-500">{text} </p>}
    </div>
  )
}

export default Review

