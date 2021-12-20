import React from "react";

function ContactItem({ contact, suppContacts }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>
        <span style={{ cursor: "pointer" }}>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => suppContacts(contact.name)}
          >
            X
          </button>
        </span>
      </td>
    </tr>
  );
}

export default ContactItem;
