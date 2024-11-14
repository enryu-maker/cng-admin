const initialState = {
    access: null,
    order: [],
    worker: [],
    fuel: null,
    station_status: null,
    fuel_price: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACCESS':
            return { ...state, access: action.payload };
        case 'SET_ORDER':
            return { ...state, order: action.payload };
        case 'SET_WORKER':
            return { ...state, worker: action.payload };
        case 'SET_FUEL':
            return { ...state, fuel: action.payload };
        case 'SET_STATION':
            return { ...state, station_status: action.payload };
        case 'SET_PRICE':
            return { ...state, fuel_price: action.payload };
        default:
            return state;
    }
};