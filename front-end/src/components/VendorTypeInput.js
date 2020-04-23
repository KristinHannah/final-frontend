import React from 'react';
import { connect } from 'react-redux';
import { addVendorType } from '../actions/addVendorType';

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
                <h1> Add a new type of vendor you are looking to hire here (such as florist, photographer):</h1>
                <form onSubmit={this.handleSubmit}>
                    {errors.map(error => <p key={error}>Error: {error}</p>)}
                    <label>Vendor Type: </label> <br />
                    <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} /> <br /> <br />
                    <label>Image (should be an URL): </label> <br />
                    <input type="text" placeholder="Image URL" name="img" value={this.state.img} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addVendorType })(VendorTypeInput)