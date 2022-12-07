import {Container,Title, SubTitle} from './PhoneBook/PhoneBook.styled.js'
import ContactForm from './PhoneBook/ContactForm';
import Filter from './PhoneBook/Filter/Filter';
import ContactList from './PhoneBook/ContactList';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const Contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === Contact.name.toLowerCase()
      )
    ) {
      return alert(`${Contact.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [Contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContacts}
        />
      </Container>
    );
  }
}
