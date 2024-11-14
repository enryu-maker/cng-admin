import React from 'react'

export default function Main() {
    return (
        <div className=' font-Poppins'>
            <h3 className="text-3xl py-5 px-2 font-semibold mt-2 text-gray-700">Dashboard Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
                {/* Card 1: Active Users */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-medium text-gray-700">Active Booking</h3>
                    <p className="text-3xl font-bold text-blue-600">320</p>
                </div>

                {/* Card 3: Pending Tasks */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-medium text-gray-700">Available Workers</h3>
                    <p className="text-3xl font-bold text-yellow-600">5</p>
                </div>

                {/* Card 4: Revenue */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-medium text-gray-700">Revenue</h3>
                    <p className="text-3xl font-bold text-indigo-600">$15,000</p>
                </div>
            </div>
            <h3 className="text-3xl py-5 px-2 font-semibold mt-2 text-gray-700">Latest Booking</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="space-y-4">
                    <li className="flex justify-between">
                        <span>Task A completed</span>
                        <span className="text-gray-600 text-sm">2 hours ago</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Fuel refill scheduled</span>
                        <span className="text-gray-600 text-sm">3 hours ago</span>
                    </li>
                    <li className="flex justify-between">
                        <span>New user registered</span>
                        <span className="text-gray-600 text-sm">1 day ago</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
