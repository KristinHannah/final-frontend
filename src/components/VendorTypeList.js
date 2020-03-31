import React from 'react';
import VendorTypeShow from "./VendorTypeShow";
import { Route } from 'react-router-dom'

const VendorTypeList = (props) => {

    console.log(props)
    return (
        <div>
            {props.vendorTypes.map(vendorType => <div key={vendorType.attributes.id}> <VendorTypeShow vendorType={vendorType} />  </div>)}
        </div>
    )

}

export default VendorTypeList

//  