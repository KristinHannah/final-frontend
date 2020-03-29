import React from 'react';
import { connect } from 'react-redux';
import { addVendorType } from '../actions/addVendorType';

class VendorTypeInput extends React.Component {

    state = {
        name: '',
        img: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addVendorType(this.state)
    }

    render() {
        return (
            <div>
                <h1> Add a new type of vendor you are looking to hire here (such as florist, photographer):</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Vendor Type: </label> <br />
                    <input type="text" placeholder="name" name="name" onChange={this.handleChange} value={this.state.name} /> <br /> <br />
                    <label>Image (should be an URL): </label> <br />
                    <input type="text" placeholder="Image URL" name="img" value={this.state.img} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addVendorType })(VendorTypeInput)