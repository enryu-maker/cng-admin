import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleStatus } from '../../../store/actions/stationActions'
export default function Station() {
    const station_status = useSelector(state => state.Reducers.station_status)
    const dispatch = useDispatch()

    return (
        <div className='font-Poppins flex flex-col justify-center items-center h-screen'>
            {/* Page Title */}
            <button
                onClick={() => {
                    dispatch(toogleStatus())
                }}
                className={`h-[200px] w-[200px] text-xl font-bold rounded-full ${station_status ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
            >
                {station_status ? "Online" : "Offline"}
            </button>
            <h2 className='text-2xl py-6 px-2 font-bold '>Station Status</h2>
        </div>
    )
}
