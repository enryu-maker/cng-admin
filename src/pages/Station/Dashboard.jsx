import React, { Suspense, lazy } from 'react';
import StationSidebar from './components/StationSidebar'
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { getFuelStatus, getOrders, getPrice, getStationStatus, getWorker } from '../../store/actions/stationActions';
const Main = lazy(() => import('./Screens/Main'));
const Order = lazy(() => import('./Screens/Order'));
const Fuel = lazy(() => import('./Screens/Fuel'));
const Worker = lazy(() => import('./Screens/Worker'));
const Station = lazy(() => import('./Screens/Station'));
const Price = lazy(() => import('./Screens/Price'));



export default function Dashboard() {
    const [path, setPath] = React.useState("dashboard");
    const dispatch = useDispatch()
    const renderComponent = () => {
        switch (path) {
            case 'dashboard':
                return <Main />;
            case 'order':
                return <Order />;
            case 'fuel':
                return <Fuel />;
            case 'worker':
                return <Worker />;
            case 'station':
                return <Station />;
            case 'price':
                return <Price />;
            default:
                return <Main />;
        }
    };
    React.useEffect(() => {
        setPath('dashboard');
        dispatch(getOrders())
        dispatch(getWorker())
        dispatch(getFuelStatus())
        dispatch(getStationStatus())
        dispatch(getPrice())
    }, [dispatch])
    return (
        <div className="w-[100vw] flex justify-between bg-slate-50">
            <div className={`transition-all duration-300 ease-in-out w-64 opacity-100`}>
                <StationSidebar setPath={setPath} />
            </div>
            <div className={`transition-all duration-300 ease-in-out w-[90%] p-1`}>
                <Suspense fallback={
                    <div className='w-full h-full flex justify-center items-center'>
                        <ThreeDots
                            visible={true}
                            height="40"
                            width="40"
                            color="#007bff"
                            radius="5"
                            ariaLabel="three-dots-loading"
                        />
                    </div>
                }>
                    {renderComponent()}
                </Suspense>
            </div>
        </div>
    )
}
