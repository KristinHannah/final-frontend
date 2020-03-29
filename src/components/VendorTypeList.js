import React from 'react';

const VendorTypeList = (props) => {

    console.log(props)
    return (
        <div>
            {props.vendorTypes.map(vendorType => <li key={vendorType.attributes.id}>
                {vendorType.attributes.name} </li>)}
        </div>
    )

}

export default VendorTypeList

