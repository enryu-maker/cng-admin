import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; // Example for pie chart
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer as ResponsiveLineChart } from 'recharts'; // Example for line chart

export default function Main() {
    const worker = useSelector(state => state.Reducers.worker);
    const order = useSelector(state => state.Reducers.order);
    const income = useSelector(state => state.Reducers.income);

    const revenueData = [
        { name: 'January', revenue: 4000 },
        { name: 'February', revenue: 3000 },
        { name: 'March', revenue: 5000 },
        { name: 'April', revenue: 4500 },
    ]; // Example data for revenue chart

    const bookingData = [
        { name: 'January', bookings: 120 },
        { name: 'February', bookings: 150 },
        { name: 'March', bookings: 180 },
        { name: 'April', bookings: 160 },
    ]; // Example data for booking trend

    return (
        <div className='font-Poppins'>
            <h3 className="text-3xl py-5 px-2 font-semibold mt-2 text-gray-700">Dashboard Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Total Booking */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-lg font-medium text-gray-700">Total Bookings</h3>
                    <p className="text-3xl font-bold text-blue-600">{order?.length}</p>
                    <div className="mt-3">
                        <ResponsiveLineChart width="100%" height={150}>
                            <LineChart data={bookingData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
                                <Legend />
                            </LineChart>
                        </ResponsiveLineChart>
                    </div>
                </div>

                {/* Card 2: Available Workers */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-lg font-medium text-gray-700">Available Workers</h3>
                    <p className="text-3xl font-bold text-yellow-600">{worker?.length}</p>
                    <div className="mt-3">
                        <ResponsiveContainer width="100%" height={150}>
                            <PieChart>
                                <Pie
                                    data={[
                                        { name: 'Available', value: worker?.length || 0 },
                                        { name: 'Busy', value: 10 }, // Example value
                                    ]}
                                    dataKey="value"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {worker?.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#0088FE' : '#FF8042'} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Card 3: Revenue */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-lg font-medium text-gray-700">Revenue</h3>
                    <p className="text-3xl font-bold text-indigo-600">₹{income}</p>
                    <div className="mt-3">
                        <ResponsiveLineChart width="100%" height={150}>
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                                <Legend />
                            </LineChart>
                        </ResponsiveLineChart>
                    </div>
                </div>
            </div>

            {/* Latest Bookings */}
            <h3 className="text-3xl py-5 px-2 font-semibold mt-2 text-gray-700">Latest Bookings</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="space-y-4">
                    {order?.map((item, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <span className="font-medium">by {item?.user_name}</span>
                            <span className="text-xl font-semibold">₹{item?.amount}</span>
                            <span className="text-xl font-semibold">{item?.status}</span>
                            <span className="text-gray-600 text-sm">{item?.order_id}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
