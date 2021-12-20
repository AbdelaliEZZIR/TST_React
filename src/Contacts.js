import React from "react";
import ContactItem from "./ContactItem";
import AddContact from "./AddContact";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "abdou",
          phone: 22232220
        },
        {
          name: "abdelali",
          phone: 232222233
        }
      ]
    };
  }
  addContacts = contact => {
    let updatedContacts = this.state.contacts;
    updatedContacts.push(contact);
    this.setState({ contacts: updatedContacts });
  };

  suppContacts = (name) => {
    let Ocontact = this.state.contacts;
    let updatedContacts = Ocontact.filter(contact =>contact.name !== name);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <div className="container">
        <AddContact addContacts={this.addContacts} />
        <div className="row my-5">
          <div className="col-md-6 mx-auto">
            <table className="table">
              <thead>
                <th> Nom </th>
                <th> Tel </th>
                <th> Action </th>
              </thead>
              <tbody>
                {this.state.contacts.map((contact, index) => (
                  <ContactItem key={index} contact={contact} 
                  suppContacts = {this.suppContacts}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
