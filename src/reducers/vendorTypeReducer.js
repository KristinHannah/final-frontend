
export default function vendorTypeReducer(state = { vendorTypes: [] }, action) {
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
        case 'DELETE_VENDOR':
            debugger;
            let vendorTypesTwo = state.vendorTypes.map(vendorType => {
                if (vendorType.id === action.payload.data.id) {
                    return action.payload
                }
                else {
                    return vendorType
                }
            })

            return { ...state, vendorTypes: vendorTypesTwo }
        default:
            return state
    }
}

