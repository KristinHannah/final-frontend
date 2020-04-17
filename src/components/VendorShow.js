import React from 'react';
import { connect } from 'react-redux'
import { hireVendor } from '../actions/hireVendor'
import Celebration from './Celebration'

class VendorShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            availability: '',
            quote: '',
            hired: false,
        };
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.name === 'hired' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let vendor = { ...this.state, id: this.props.vendor.id }
        this.props.hireVendor(vendor, this.props.vendor.attributes.vendor_type_id)
        this.setState({
            name: '',
            location: '',
            availability: '',
            quote: '',
            hired: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Hired?:
                    </label>
                    <label>
                        <input type="checkbox" name="hired" value={this.state.value} onChange={this.handleChange} checked={this.state.hired} />
                    </label>
                    <br />

                    <input type="submit" value="submit" />
                    {this.props.vendor.attributes.hired ?
                        <Celebration /> :
                        null}

                </form>
            </div >
        )
    }
}



export default connect(null, { hireVendor })(VendorShow)