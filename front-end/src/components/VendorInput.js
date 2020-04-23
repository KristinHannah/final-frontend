import React from 'react';
import { connect } from 'react-redux'
import { addVendor } from '../actions/addVendor';

class VendorInput extends React.Component {

    state = {
        name: '',
        location: '',
        availability: '',
        quote: '',
        hired: false,

        errors: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = (name, location, availability, quote) => {
        const errors = []
        if (name.length === 0) {
            errors.push("Name can't be empty")
        }
        if (location.length === 0) {
            errors.push("Location can't be empty")
        }
        if (availability.length === 0) {
            errors.push("Availability can't be empty")
        }
        if (quote.length === 0) {
            errors.push("Quote can't be empty")
        }
        return errors;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, location, availability, quote } = this.state
        const errors = this.validate(name, location, availability, quote);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
        else {
            this.props.addVendor(this.state, this.props.vendorType.id)
        }
        this.setState({
            name: '',
            location: '',
            availability: '',
            quote: '',
            hired: 'false'
        })
    }

    render() {
        const { errors } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {errors.map(error => <p key={error}>Error: {error}</p>)}
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