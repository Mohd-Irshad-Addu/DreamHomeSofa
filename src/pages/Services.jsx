import React from 'react'

function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
  <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
    Our Services
  </h1>

  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* 👇 Service Cards yahan map() se render karo later */}
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <img
        src="/path-to-img.jpg"
        alt="Service Name"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Sofa Repair
      </h2>
      <p className="text-gray-600 text-sm">
        Restore your sofa's comfort and look with our expert repair service.
      </p>
    </div>

    {/* Add more cards... */}
  </div>
</div>

  )
}

export default Services
