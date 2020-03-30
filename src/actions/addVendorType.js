export const addVendorType = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/vendor_types', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'ADD_VENDORTYPE',
                payload: data
            }))
    }
}