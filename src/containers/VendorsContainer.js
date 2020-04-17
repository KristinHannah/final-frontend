import React from 'react'
import VendorInput from '../components/VendorInput';
import VendorsList from '../components/VendorsList'


class VendorsContainer extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <VendorInput vendorType={this.props.vendorType} />
                    <VendorsList vendors={this.props.vendorType && this.props.vendorType.attributes.vendors} />
                </div>

            </div >
        )
    }


}

export default VendorsContainer

