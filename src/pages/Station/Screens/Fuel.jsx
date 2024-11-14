import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleFuel } from '../../../store/actions/stationActions'
export default function Fuel() {
    const fuel = useSelector(state => state.Reducers.fuel)
    const dispatch = useDispatch()
    return (
        <div className='font-Poppins flex flex-col justify-center items-center h-screen'>
            {/* Page Title */}
            <button
                onClick={() => {
                    dispatch(toogleFuel())
                }}
                className={`h-[200px] w-[200px] text-xl font-bold rounded-full ${fuel ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
            >
                {fuel ? "Available" : "Not Available"}
            </button>
            <h2 className='text-2xl py-6 px-2 font-bold '>Fuel Available</h2>
        </div>
    )
}
