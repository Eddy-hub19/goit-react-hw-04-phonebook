import styled from 'styled-components';

// ContactForm

export const Submit = styled.button`
  background: #009688;
  color: white;
  padding: 6px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  font-size: 13px;
  margin-bottom: 10px;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  :hover {
    box-shadow: 0px 0px 19px 1px grey;
    transition: box-shadow 1s ease;
  }
`;

//Filter

export const WrapFilter = styled.div`
  text-align: center;
`;
