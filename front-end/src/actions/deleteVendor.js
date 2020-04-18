export const deleteVendor = (vendorId, vendorTypeId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/vendor_types/${vendorTypeId}/vendors/${vendorId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(vendorType => dispatch({ type: 'DELETE_VENDOR', payload: vendorType }))
    }
}