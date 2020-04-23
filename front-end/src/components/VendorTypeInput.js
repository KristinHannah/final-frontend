import React from 'react';
import { connect } from 'react-redux';
import { addVendorType } from '../actions/addVendorType';
import VendorTypeInputForm from './VendorTypeInputForm';

class VendorTypeInput extends React.Component {

    state = {
        name: '',
        img: '',

        errors: []
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = (name, img) => {
        const errors = []
        if (name.length === 0) {
            errors.push("Name can't be empty")
        }
        if (img.length === 0) {
            errors.push("Image can't be empty")
        }
        return errors;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, img } = this.state;
        const errors = this.validate(name, img);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
        else {
            this.props.addVendorType(this.state)
        }
        this.setState({
            name: '',
            img: ''
        })

    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <VendorTypeInputForm formData={this.state} validate={this.validate} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default connect(null, { addVendorType })(VendorTypeInput)