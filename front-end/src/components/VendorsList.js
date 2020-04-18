import React from 'react'
import { connect } from 'react-redux'
import { deleteVendor } from '../actions/deleteVendor'
import VendorShow from './VendorShow'

const VendorsList = (props) => {

    const handleDelete = (vendor) => {
        props.deleteVendor(vendor.id, vendor.attributes.vendor_type_id)
    }

    return (
        <div>
            <ul className="vendor-list">
                {props.vendors && props.vendors.map(vendor =>
                    <li className="vendor-card" key={vendor.attributes.id}>{vendor.attributes.name} <br />
                        Location: {vendor.attributes.location} <br />
                        Availability: {vendor.attributes.availability} <br />
                        Quote: {vendor.attributes.quote} <br />
                        <VendorShow vendor={vendor} />
                        <button onClick={() => handleDelete(vendor)}> Delete </button>

                    </li>
                )}
            </ul>
        </div>
    )
}

export default connect(null, { deleteVendor })(VendorsList)

