import React from 'react'
import { connect } from 'react-redux'
import { deleteVendor } from '../actions/deleteVendor'
import { Route, Switch } from 'react-router-dom'

const VendorsList = (props) => {

    const handleDelete = (vendor) => {
        props.deleteVendor(vendor.id, vendor.attributes.vendor_type_id)
    }

    return (
        <div>
            {props.vendors && props.vendors.map(vendor =>
                <li key={vendor.attributes.id}>{vendor.attributes.name} <br />
                    Location: {vendor.attributes.location} <br />
                    Availability: {vendor.attributes.availability} <br />
                    Quote: {vendor.attributes.quote}
                    <button onClick={() => handleDelete(vendor)}> Delete </button>

                </li>
            )}
        </div>
    )
}

export default connect(null, { deleteVendor })(VendorsList)

