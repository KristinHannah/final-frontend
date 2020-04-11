import React from 'react';
import VendorTypesContainer from './containers/VendorTypesContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <VendorTypesContainer />
      </div>
    );
  }
};


// second argument mapdispatchtoprops or { actioncreater}
export default App;
