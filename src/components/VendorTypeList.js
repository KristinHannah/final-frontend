import React from 'react';
import VendorTypeShow from "./VendorTypeShow";
import { Route, Link } from 'react-router-dom'

const VendorTypeList = (props) => {

    console.log(props)
    return (
        <div>
            {props.vendorTypes.map(vendorType => <li key={vendorType.attributes.id}>
                <Link to={`/vendor_types/${vendorType.attributes.id}`}>
                    {vendorType.attributes.name}
                </Link>
            </li>)}
        </div>
    )

}

export default VendorTypeList

