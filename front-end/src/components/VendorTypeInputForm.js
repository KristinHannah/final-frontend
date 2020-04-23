import React from 'react';

class VendorTypeInputForm extends React.Component {
    render() {
        const errors = this.props.formData.errors
        return (
            <div>
                <h1> Add a new type of vendor you are looking to hire here (such as florist, photographer):</h1>
                <form onSubmit={event => this.props.handleSubmit(event)}>
                    {errors.map(error => <p key={error}>Error: {error}</p>)}
                    <label>Vendor Type: </label> <br />
                    <input type="text" placeholder="name" name="name" value={this.props.formData.name} onChange={event => this.props.handleChange(event)} /> <br /> <br />
                    <label>Image (should be an URL): </label> <br />
                    <input type="text" placeholder="Image URL" name="img" value={this.props.formData.img} onChange={event => this.props.handleChange(event)} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default VendorTypeInputForm;