import React from 'react';
import { connect } from 'react-redux'
import { addVendor } from '../actions/addVendor';

class VendorInput extends React.Component {

    state = {
        name: '',
        location: '',
        availability: '',
        quote: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addVendor(this.state, this.props.vendorType.id)
        this.setState({
            name: '',
            location: '',
            availability: '',
            quote: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Vendor Name:
                    </label>
                    <input type="text" placeholder="name" name="name" onChange={this.handleChange} value={this.state.name} /> <br></br>
                    <label>
                        Location:
                    </label>
                    <input type="text" placeholder="location" name="location" onChange={this.handleChange} value={this.state.location} /> <br />
                    <label>
                        Availability:
                    </label>
                    <input type="text" placeholder="availability" name="availability" onChange={this.handleChange} value={this.state.availability} /> <br />
                    <label>
                        Quote:
                    </label>
                    <input type="text" placeholder="quote" name="quote" onChange={this.handleChange} value={this.state.quote} /> <br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}



export default connect(null, { addVendor })(VendorInput)