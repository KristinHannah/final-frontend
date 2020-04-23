import React from 'react';
import { connect } from 'react-redux';
import { addVendorType } from '../actions/addVendorType';
import { Redirect } from 'react-router-dom';
import VendorTypeInputForm from './VendorTypeInputForm';

class VendorTypeInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            img: '',

            errors: [],
            redirect: null
        }
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
            this.props.addVendorType(this.state);
            this.setState({
                name: '',
                img: '',
                redirect: '/vendor_types'
            });
        }
        event.preventDefault();

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <VendorTypeInputForm formData={this.state} validate={this.validate} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default connect(null, { addVendorType })(VendorTypeInput)

// const { errors } = this.state;