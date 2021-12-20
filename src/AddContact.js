import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };
  }
  submitForm = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };
    this.props.addContacts(contact);
  };


  render() {
    return (
      <div className="row my-5">
        <div className="col-md-6 mx-auto card bg-white">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="form-group my-2">
              <label> Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </div>
            <div className="form-group my-2">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone"
                value={this.state.phone}
                onChange={event => this.setState({ phone: event.target.value })}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="submit"
                className="btn btn-primary"
                value="Valider"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
