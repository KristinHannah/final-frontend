import React from 'react'
import VendorInput from '../components/VendorInput';
import VendorsList from '../components/VendorsList'
import vendorTypeReducer from '../reducers/vendorTypeReducer';

class VendorsContainer extends React.Component {

    debugger;

    render() {
        return (
            <div>
                <VendorInput />
                <VendorsList vendors={this.props.vendorType && this.props.vendorType.relationships.vendors} />
            </div>
        )
    }


}

export default VendorsContainer