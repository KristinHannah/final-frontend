import React from 'react';

class VendorInputForm extends React.Component {
    render() {
        const errors = this.props.formData.errors
        return (
            <div>
                <form onSubmit={event => this.props.handleSubmit(event)}>
                    {errors.map(error => <p key={error}>Error: {error}</p>)}
                    <label>
                        Vendor Name:
                    </label>
                    <input type="text" placeholder="name" name="name" value={this.props.formData.name} onChange={event => this.props.handleChange(event)} /> <br></br>
                    <label>
                        Location:
                    </label>
                    <input type="text" placeholder="location" name="location" value={this.props.formData.location} onChange={event => this.props.handleChange(event)} /> <br />
                    <label>
                        Availability:
                    </label>
                    <input type="text" placeholder="availability" name="availability" value={this.props.formData.availability} onChange={event => this.props.handleChange(event)} /> <br />
                    <label>
                        Quote:
                    </label>
                    <input type="text" placeholder="quote" name="quote" value={this.props.formData.quote} onChange={event => this.props.handleChange(event)} /> <br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default VendorInputForm;