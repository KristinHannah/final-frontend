import React from 'react';
import { connect } from 'react-redux';
import { fetchVendorTypes } from '../actions/fetchVendorTypes';
import VendorTypeList from '../components/VendorTypeList';
import VendorTypeInput from '../components/VendorTypeInput'

class VendorTypesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchVendorTypes()
    }

    render() {
        return (
            <div>
                <VendorTypeInput />
                <VendorTypeList vendorTypes={this.props.vendorTypes} />
            </div>
        )
    }
}

//maybe vendor_types
const mapStateToProps = state => {
    return {
        vendorTypes: state.vendorTypes
    }
}

export default connect(mapStateToProps, { fetchVendorTypes })(VendorTypesContainer); 