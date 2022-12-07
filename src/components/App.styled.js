import styled from 'styled-components';

// App
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  justify-content: center;
  border: 1px solid black;
  width: 280px;
  background: gainsboro;
  margin: 50px auto;
  height: 100%;
  border-radius: 10px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const SubTitle = styled.h2`
  text-align: center;
`;

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
