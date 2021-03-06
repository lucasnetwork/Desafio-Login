import styled from 'styled-components';

export default styled.input`
  width: 348px;
  height: 71px;
  border: 1px solid #868686;
  outline: none;
  font-size: 18px;
  line-height: 22px;
  font-weight: 800;
  padding: 25px 0 24px 24px;
  color: #868686;

  margin-bottom: 37px;
  background: none;
  text-transform: uppercase;

  :focus {
    border: 1px solid #da7f15;
    color: #da7f15;

    ::placeholder {
      color: #da7f15;
    }
  }

  :valid {
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`;
