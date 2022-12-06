import React, { Component } from 'react';
// import shortId from 'shortid'
import { nanoid } from 'nanoid'


class ContactFrom extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const state = this.state;
    this.props.onSubmit(state);

    this.reset(e);
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Phonebook</h2>
        <label htmlFor="name">
          Name
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // id={shortId.generate()}
            id={nanoid()}
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={nanoid()}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactFrom;

// set event-target

// handleChangeName = e => {
//   this.setState({ name: e.target.value });
// };
// handleChangeNumber = e => {
//   this.setState({ number: e.target.value });
// }
