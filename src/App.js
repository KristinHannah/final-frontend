import React from 'react';
import VendorTypesContainer from './containers/VendorTypesContainer';
import styles from './styles.css';
import { Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (

      <div className="App">
        <h1> Bride Book </h1>
        <nav>
          <button class="button">     <Link to={`/vendor_types`}>
            All Vendors
                </Link></button>

          <button class="button">     <Link to={`/vendor_types/new`}>
            Add A Vendor
                </Link></button>
        </nav>

        <VendorTypesContainer />
      </div>

    );
  }
};


// second argument mapdispatchtoprops or { actioncreater}
export default App;
