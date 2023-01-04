import styled from 'styled-components';

// ContactList

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  :hover {
    background: #666f6e;
    box-shadow: 1px 1px 1px 1px;
    transition: background 1.3s ease;
    color: white;
  }
`;

export const ContactBtn = styled.button`
  margin-left: auto;
  width: auto;
  height: 25px;
  border: 1px solid gray;
  font-size: 13px;
  padding: 4px;
  margin-right: 1px;
  background: cadetblue;
  color: white;
  cursor: pointer;
  :hover {
    background: #d50a0af0;
    border: 1px solid gray;
    color: white;
    transition: background 1s ease;
  }
`;

export const Name = styled.p`
  padding: 5px;
`;

export const Number = styled.span`
  margin-left: 7px;
  margin-right: 8px;
`;
