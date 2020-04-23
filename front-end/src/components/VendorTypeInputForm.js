import React from 'react';

const VendorTypeInputForm = (props) => {

    const errors = props.formData.errors
    return (
        <div>
            <h1> Add a new type of vendor you are looking to hire here (such as florist, photographer):</h1>
            <form onSubmit={event => props.handleSubmit(event)}>
                {errors.map(error => <p key={error}>Error: {error}</p>)}
                <label>Vendor Type: </label> <br />
                <input type="text" placeholder="name" name="name" value={props.formData.name} onChange={event => props.handleChange(event)} /> <br /> <br />
                <label>Image (should be an URL): </label> <br />
                <input type="text" placeholder="Image URL" name="img" value={props.formData.img} onChange={event => props.handleChange(event)} />
                <input type="submit" />
            </form>
        </div>
    )

}

export default VendorTypeInputForm;