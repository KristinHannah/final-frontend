export const hireVendor = (vendor, vendorTypeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/vendor_types/${vendorTypeId}/vendors/${vendor.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vendor)
        })
            .then(resp => resp.json())
            .then(vendorType => dispatch({ type: 'HIRE_VENDOR', payload: vendorType }))
    }
}