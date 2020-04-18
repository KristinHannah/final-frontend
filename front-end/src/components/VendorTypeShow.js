import React from 'react';
import VendorsContainer from '../containers/VendorsContainer';

const VendorTypeShow = (props) => {

    const vendorType = props.vendorTypes.find(element => element.id === props.match.params.id)


    return (
        <div>
            <h2>
                {vendorType ? vendorType.attributes.name : null}
            </h2>
            <VendorsContainer vendorType={vendorType} />
        </div>
    )

}


export default VendorTypeShow