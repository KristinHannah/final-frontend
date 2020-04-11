
export default function vendorTypeReducer(state = { vendorTypes: [] }, action) {
    debugger;
    switch (action.type) {
        case 'FETCH_VENDORTYPES':
            return { vendorTypes: action.payload.data }
        case 'ADD_VENDORTYPE':
            return { ...state, vendorTypes: [...state.vendorTypes, action.payload.data] }
        case 'ADD_VENDOR':
            let vendorTypes = state.vendorTypes.map(vendorType => {
                if (vendorType.id === action.payload.data.id) {
                    return action.payload
                }
                else {
                    return vendorType
                }
            })

            return { ...state, vendorTypes: vendorTypes }
        default:
            return state
    }
}

