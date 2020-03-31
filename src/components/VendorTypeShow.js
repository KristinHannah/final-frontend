import React from 'react';


const VendorTypeShow = (props) => {



    const vendorr = props.vendorTypes.find(element => element.id === props.match.params.id)
    let vendorType = props.vendorTypes[props.match.params.id - 1]


    return (
        <li>
            {vendorr ? vendorr.attributes.name : null}
        </li>
    )

}

// 

export default VendorTypeShow