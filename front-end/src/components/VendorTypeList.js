import React from 'react';
import { Link } from 'react-router-dom'

const VendorTypeList = (props) => {


    return (
        <div>
            <ul className="VendorTypeList">
                {props.vendorTypes.map(vendorType => <li className="vendor-type" key={vendorType.attributes.id}>
                    <h2> {vendorType.attributes.name} </h2>
                    <img src={vendorType.attributes.img} alt={vendorType.attributes.name} height="130px" />
                    <br />
                    <Link className="vendor-type-link" to={`/vendor_types/${vendorType.attributes.id}`}>
                        See {vendorType.attributes.name}s here
                    </Link>
                </li>)}
            </ul>
        </div>
    )

}

export default VendorTypeList

