import React from 'react';

const VendorInputForm = (props) => {

    const errors = props.formData.errors
    return (
        <div>
            <form onSubmit={event => props.handleSubmit(event)}>
                {errors.map(error => <p key={error}>Error: {error}</p>)}
                <label>
                    Vendor Name:
                    </label>
                <input type="text" placeholder="name" name="name" value={props.formData.name} onChange={event => props.handleChange(event)} /> <br></br>
                <label>
                    Location:
                    </label>
                <input type="text" placeholder="location" name="location" value={props.formData.location} onChange={event => props.handleChange(event)} /> <br />
                <label>
                    Availability:
                    </label>
                <input type="text" placeholder="availability" name="availability" value={props.formData.availability} onChange={event => props.handleChange(event)} /> <br />
                <label>
                    Quote:
                    </label>
                <input type="text" placeholder="quote" name="quote" value={props.formData.quote} onChange={event => props.handleChange(event)} /> <br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default VendorInputForm;