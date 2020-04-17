import React from 'react';
import VendorTypeShow from "./VendorTypeShow";
import { Link } from 'react-router-dom'

const VendorTypeList = (props) => {

    console.log(props)
    return (
        <div>
            <ul class="VendorTypeList">
                {props.vendorTypes.map(vendorType => <li class="vendor-type" key={vendorType.attributes.id}>
                    <h2> {vendorType.attributes.name} </h2>
                    <img src={vendorType.attributes.img} alt={vendorType.attributes.name} height="130px" /> <br />
                    <Link to={`/vendor_types/${vendorType.attributes.id}`}>
                        See {vendorType.attributes.name}s here
                    </Link>
                </li>)}
            </ul>
        </div>
    )

}

export default VendorTypeList

