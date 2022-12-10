import { Number, ContactBtn, Name } from '../ContactList.styled';

export const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <ContactBtn onClick={onDelete} type="button">
        Delete
      </ContactBtn>
    </>
  );
};
