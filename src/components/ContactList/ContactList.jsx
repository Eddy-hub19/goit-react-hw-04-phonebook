import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';
import { List, ContactItem } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func,
};
