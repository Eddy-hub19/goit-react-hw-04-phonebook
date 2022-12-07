import PropTypes from 'prop-types';
import { WrapFilter, Input } from '../PhoneBook.styled';

const Filter = ({ onChange, value }) => {
  return (
    <WrapFilter>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
    </WrapFilter>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
