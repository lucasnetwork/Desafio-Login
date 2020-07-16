import styled from 'styled-components';

export default styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #3a3a3a;
  width: 444px;
  height: 400px;
  justify-content: space-around;
  align-items: center;
  div {
    height: 100%;
    margin: 0 auto;
    margin-top: 30px;
    form {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
  .error {
    display: ${props => (props.error ? 'block' : 'none')};
    font-weight: 600;
    font-size: 16px;
    color: #8a3434;
    margin: 15px auto;
  }
  .trapezoid {
    margin: 0 auto;
    margin-top: 0px;
    border-top: 17px solid #da7f15;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    height: 0;
    width: 112px;
  }
  .span {
    position: absolute;
    top: 400px;
    left: 15px;
    width: 430px;
    height: 11px;
    border-top: 11px solid #da7f15;
    border-right: 10px solid transparent;
    margin-left: -15px;
  }
  @media (max-width: 411px) {
    width: 400px;
    .span {
      width: 386px;
    }
  }
`;
