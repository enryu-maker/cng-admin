import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePrice } from '../../../store/actions/stationActions'
export default function Price() {
    const fuel_price = useSelector(state => state.Reducers.fuel_price)
    const [amount, setAmount] = React.useState('')
    const dispatch = useDispatch()
    return (
        <div className='font-Poppins flex flex-col justify-center items-center h-screen'>
            <h2 className='text-6xl py-6 px-2 font-bold '>Current Fuel Price : ₹{fuel_price}</h2>
            <div className="felx space-x-10">
                <input
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value)
                    }}
                    type="text" className='w-[300px] h-[50px] rounded border px-3 ' placeholder='Updated price' />
                <button
                    onClick={() => {
                        dispatch(updatePrice(amount))
                        setAmount('')
                    }}
                    type="button"
                    class="px-4 h-[48px] rounded text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                    Update
                </button>
            </div>
        </div>
    )
}
