import styled from 'styled-components';

export default styled.button`
  position: relative;
  display: block;
  width: 348px;
  height: 71px;
  border: 1px solid #fff;
  background: none;
  font-weight: 800;
  font-size: 22px;
  color: #fff;
  line-height: 27px;
  outline: none;
  overflow: hidden;
  margin-bottom: 48px;
  z-index: 2;
  transition: all 1s ease;
  cursor: pointer;
  ::before {
    background: #731a65;
    content: '';
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-25%, -40%) rotate(30deg);
    z-index: -1;
    transition: width 0.4s ease;
  }
  :hover::before {
    width: 100%;
    height: 1000%;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
