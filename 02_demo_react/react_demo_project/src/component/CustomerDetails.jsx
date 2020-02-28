import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Axios from 'axios';

export default class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Function to load the customer details from json files
  getCustomerDetails(id) {
    //console.log('samplejson/customer' + id + '.json');
    Axios.get('samplejson/customer' + id + '.json').then(response => {
      this.setState({ CustomerDetails: response });
    });
    console.log(CustomerDetails);
  }
  //Function will called by react once the component will load for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.value);
  }
  // Function will called whenever component gets updated
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.getCustomerDetails(this.props.value);
    }
  }
  render() {
    if (!this.state.CustomerDetails) return <p>Loading Data...</p>;
    return (
      <div className="customer-details">
        <Panel bsStyle="info" className="centeralign">
          <Panel.Heading>
            <Panel.Title className="h3">
              {this.state.CustomerDetails.data.name}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>Name:{this.state.CustomerDetails.data.name}</p>
            <p>Email:{this.state.CustomerDetails.data.email}</p>
            <p>Phone:{this.state.CustomerDetails.data.phone}</p>
            <p>City:{this.state.CustomerDetails.data.city}</p>
            <p>State:{this.state.CustomerDetails.data.state}</p>
            <p>Country:{this.state.CustomerDetails.data.country}</p>
            <p>Organization:{this.state.CustomerDetails.data.organization}</p>
            <p>JobProfile:{this.state.CustomerDetails.data.jobProfile}</p>
            <p>
              AdditionalInfo{this.state.CustomerDetails.data.additionalInfo}
            </p>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
