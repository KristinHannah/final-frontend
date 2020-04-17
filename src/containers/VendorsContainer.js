import React from 'react'
import VendorInput from '../components/VendorInput';
import VendorsList from '../components/VendorsList'
import vendorTypeReducer from '../reducers/vendorTypeReducer';
import { Route } from 'react-router-dom'

class VendorsContainer extends React.Component {


    render() {
        return (
            <div>
                <VendorInput vendorType={this.props.vendorType} />
                <VendorsList vendors={this.props.vendorType && this.props.vendorType.attributes.vendors} />
            </div>
        )
    }


}

export default VendorsContainer