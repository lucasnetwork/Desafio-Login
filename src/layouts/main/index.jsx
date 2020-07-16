import { Container } from './styles';

import PropTypes from 'prop-types';
import React from 'react';

const MainLayout = ({ children }) => <Container>{children}</Container>;

MainLayout.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default MainLayout;
