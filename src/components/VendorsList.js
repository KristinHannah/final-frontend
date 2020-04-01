import React from 'react'

const VendorsList = (props) => {

    return (
        <div>
            {props.vendors && props.vendors.map(vendor =>
                <li key={vendor.attributes.id}>{vendor.attributes.name} <br />
                    Location: {vendor.attributes.location} <br />
                    Availability:{vendor.attributes.availability} <br />
                    {vendor.attributes.quote} </li>)}
        </div>
    )
}

export default VendorsList

