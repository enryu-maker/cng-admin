import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleFuel } from '../../../store/actions/stationActions';

export default function Fuel() {
    const fuel = useSelector(state => state.Reducers.fuel);
    const dispatch = useDispatch();

    return (
        <div className="font-Poppins flex flex-col justify-center items-center h-screen bg-gray-100">
            {/* Page Title */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Fuel Availability</h2>

            {/* Availability Button */}
            <button
                onClick={() => dispatch(toogleFuel())}
                className={`h-[200px] w-[200px] text-2xl font-bold rounded-full transition-all duration-300 ease-in-out shadow-lg transform hover:scale-110 ${fuel ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
            >
                {fuel ? "Available" : "Not Available"}
            </button>

            {/* Subtitle */}
            <p className="text-lg mt-4 text-gray-600">
                Current Status: <span className="font-semibold">{fuel ? "Available" : "Not Available"}</span>
            </p>
        </div>
    );
}
