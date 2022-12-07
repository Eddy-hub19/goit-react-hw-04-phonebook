import PropTypes from 'prop-types';
import { List, Contact, Number, ContactBtn, Name } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <Name>{name}:</Name>
          <Number>{number}</Number>
          <ContactBtn onClick={() => onDeleteContact(id)} type="button">
            Delete
          </ContactBtn>
        </Contact>
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
