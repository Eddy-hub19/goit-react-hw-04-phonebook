import React, { Component } from 'react';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <div></div>;
  }
}

export default Phonebook;


// Шаг 1
// Приложение должно состоять из формы и списка контактов. На текущем шаге реализуй добавление имени контакта и отображение списка контактов. Приложение не должно сохранять контакты между разными сессиями (обновление страницы).

// Используй эту разметку инпута с встроенной валидацией для имени контакта.

// <input
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />