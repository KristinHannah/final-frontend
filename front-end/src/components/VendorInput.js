import React from 'react';
import { connect } from 'react-redux';
import { addVendor } from '../actions/addVendor';
import VendorInputForm from './VendorInputForm';

class VendorInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            availability: '',
            quote: '',
            hired: false,

            errors: []
        }
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
        return (
            <div>
                <VendorInputForm formData={this.state} validate={this.validate} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )
    }
}



export default connect(null, { addVendor })(VendorInput)