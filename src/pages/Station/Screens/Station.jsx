import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleStatus } from '../../../store/actions/stationActions';

export default function Station() {
    const station_status = useSelector(state => state.Reducers.station_status);
    const dispatch = useDispatch();

    return (
        <div className="font-Poppins flex flex-col justify-center items-center h-screen bg-gray-100">
            {/* Page Title */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Station Status</h2>

            {/* Status Toggle Button */}
            <button
                onClick={() => dispatch(toogleStatus())}
                className={`h-[200px] w-[200px] text-2xl font-bold rounded-full transition-all duration-300 ease-in-out shadow-lg transform hover:scale-110 ${station_status ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
            >
                {station_status ? "Online" : "Offline"}
            </button>

            {/* Subtitle with Current Status */}
            <p className="text-lg mt-4 text-gray-600">
                Current Status: <span className="font-semibold">{station_status ? "Online" : "Offline"}</span>
            </p>
        </div>
    );
}
