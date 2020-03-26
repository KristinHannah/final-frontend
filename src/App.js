import React from 'react';
import { connect } from 'react-redux';
import { fetchVendorTypes } from './actions/fetchVendorTypes';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchVendorTypes({ type: "FETCH_VENDOR_TYPES", payload: { name: 'cehcking' } })
  }

  render() {
    return (
      <div className="App">
        App
        <p>App </p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    vendors: state.vendors
  }
}
// second argument mapdispatchtoprops or { actioncreater}
export default connect(mapStateToProps, { fetchVendorTypes })(App);
