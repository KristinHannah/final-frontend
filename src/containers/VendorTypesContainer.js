import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { fetchVendorTypes } from '../actions/fetchVendorTypes';
import VendorTypeShow from '../components/VendorTypeShow';
import VendorTypeList from '../components/VendorTypeList';
import VendorTypeInput from '../components/VendorTypeInput'

class VendorTypesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchVendorTypes()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/api/v1/vendor_types/new' component={VendorTypeInput} />
                    <Route path='/vendor_types/:id' render={(routerProps) => <VendorTypeShow vendorTypes={this.props.vendorTypes} {...routerProps} />} />
                    <Route path='/vendor_types' render={() => <VendorTypeList vendorTypes={this.props.vendorTypes} />} />
                </Switch>
            </div>
        )
    }
}

//component={VendorTypeInput} />

//maybe vendor_types
const mapStateToProps = state => {
    return {
        vendorTypes: state.vendorTypes
    }
}

export default connect(mapStateToProps, { fetchVendorTypes })(VendorTypesContainer); 