import css from '../phoneBook.module.css';
const ContactList = ({ contacts, onRemove }) => {
  // console.log(contacts);
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <p className={css.contactsName}>{contact.name}:</p>
          <span className={css.contactsNumber}>{contact.number}</span>
          <button
            onClick={() => onRemove()}
            className={css.contactsBtn}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
