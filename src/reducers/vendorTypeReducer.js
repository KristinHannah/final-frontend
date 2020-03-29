
export default function vendorTypeReducer(state = { vendorTypes: [] }, action) {
    switch (action.type) {
        case 'FETCH_VENDORTYPES':
            return { vendorTypes: action.payload.data }
        default:
            return state
    }
}

