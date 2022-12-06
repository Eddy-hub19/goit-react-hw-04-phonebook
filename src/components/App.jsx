import css from '../components/PhoneBook/phoneBook.module.css';
import ContactForm from './PhoneBook/ContactForm';
import Filter from './PhoneBook/Filter/Filter';
import ContactList from './PhoneBook/ContactList';
import React, { Component } from 'react';
import { Button } from './PhoneBook/styled';

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

  formSubmitHandler = data => {
    console.log(data);

    this.setState(prevState => {
      return {
        contacts: [(prevState = data)],
      };
    });
  };

  handleRemoveEl = () => {
    console.log('remove');
  };

  render() {
    return (
      <div className={css.contactsForm}>
        <ContactForm onSubmit={this.formSubmitHandler} />
        {/* <Button /> */}
        <Filter />

        <ContactList
          contacts={this.state.contacts}
          onRemove={this.handleRemoveEl}
        />
      </div>
    );
  }
}
