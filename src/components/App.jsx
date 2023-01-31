import { Container, SubTitle, Title } from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const formSubmit = (name, number) => {
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([
          ...contacts,
          {
            id: nanoid(),
            name,
            number,
          },
        ]);
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  const deleteContacts = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = [];
  contacts.forEach(contact => {
    contact.name.toLowerCase().includes(filter.toLowerCase()) &&
      filteredContacts.push(contact);
  });
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmit} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={handleChange} />
      {contacts.length === 0 && <div>There is not any contacts</div>}
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContacts}
      />
    </Container>
  );
};
