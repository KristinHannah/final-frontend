
export default function vendorTypeReducer(state = { vendorTypes: [] }, action) {
    switch (action.type) {
        case 'FETCH_VENDORTYPES':
            return { vendorTypes: action.payload.data }
        case 'ADD_VENDORTYPE':
            return { ...state, vendorTypes: [...state.vendorTypes, action.payload.data] }
        case 'ADD_VENDOR':
            let vendorTypes = state.vendorTypes.map(vendorType => {
                if (vendorType.id === action.payload.data.id) {
                    return action.payload.data
                }
                else {
                    return vendorType
                }
            })

            return { ...state, vendorTypes: vendorTypes }
        case 'DELETE_VENDOR':
            let vendorTypesTwo = state.vendorTypes.map(vendorType => {
                if (vendorType.id === action.payload.data.id) {
                    return action.payload.data
                }
                else {
                    return vendorType
                }
            })
            return { ...state, vendorTypes: vendorTypesTwo }
        case 'HIRE_VENDOR':
            let vendorTypesThree = state.vendorTypes.map(vendorType => {
                if (vendorType.id === action.payload.data.id) {
                    return action.payload.data
                }
                else {
                    return vendorType
                }
            })
            return { ...state, vendorTypes: vendorTypesThree }
        default:
            return state
    }
}

