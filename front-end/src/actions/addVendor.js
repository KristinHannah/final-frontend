export const addVendor = (vendor, vendorTypeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/vendor_types/${vendorTypeId}/vendors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vendor)
        })
            .then(resp => resp.json())
            .then(vendorType => dispatch({ type: 'ADD_VENDOR', payload: vendorType }))
    }
}