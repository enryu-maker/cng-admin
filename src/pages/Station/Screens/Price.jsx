import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrice } from '../../../store/actions/stationActions';

export default function Price() {
    const fuel_price = useSelector(state => state.Reducers.fuel_price);
    const [amount, setAmount] = React.useState('');
    const dispatch = useDispatch();

    return (
        <div className="font-Poppins flex flex-col justify-center items-center h-screen bg-gray-100">
            {/* Display Current Fuel Price */}
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Current Fuel Price: ₹{fuel_price}
            </h2>

            {/* Input and Update Button */}
            <div className="flex items-center space-x-4">
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    placeholder="Enter new price"
                    className="w-[250px] h-[50px] rounded-lg border border-gray-300 px-4 text-lg outline-none focus:border-blue-500 transition-all duration-200"
                />
                <button
                    onClick={() => {
                        dispatch(updatePrice(amount));
                        setAmount('');
                    }}
                    type="button"
                    className="h-[50px] px-6 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-600 transition-all duration-200"
                >
                    Update
                </button>
            </div>

            {/* Confirmation Message */}
            {amount && (
                <p className="mt-4 text-gray-600 text-sm">
                    You are updating the price to ₹{amount}
                </p>
            )}
        </div>
    );
}
