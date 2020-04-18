import React from 'react'
import VendorInput from '../components/VendorInput';
import VendorsList from '../components/VendorsList'


const VendorsContainer = (props) => {



    return (
        <div>
            <div className="vendor-list">
                <VendorInput vendorType={props.vendorType} />
                <VendorsList vendors={props.vendorType && props.vendorType.attributes.vendors} />
            </div>

        </div >
    )


}


export default VendorsContainer

