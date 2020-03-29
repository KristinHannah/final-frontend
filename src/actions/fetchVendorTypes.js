export function fetchVendorTypes() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/vendor_types')
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'FETCH_VENDORTYPES',
                payload: data
            }))
    }
}