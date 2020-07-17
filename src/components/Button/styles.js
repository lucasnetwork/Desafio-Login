import styled from 'styled-components';

export default styled.button`
  position: relative;
  display: block;
  width: 348px;
  height: 71px;
  border: 1px solid #fff;
  outline: none;
  overflow: hidden;
  background: none;
  color: #fff;
  font-weight: 800;
  font-size: 22px;
  line-height: 27px;
  transition: all 1s ease;
  z-index: 2;
  cursor: pointer;

  ::before {
    background: #731a65;
    content: '';
    width: 0;

    position: absolute;
    top: -300px;
    left: -25px;
    transform: rotate(30deg);
    z-index: -1;
    transition: width 0.4s ease;
  }

  :hover::before {
    width: 100%;
    height: 800%;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
