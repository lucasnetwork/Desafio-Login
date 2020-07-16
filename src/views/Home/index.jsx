import Container from './styles';

import AppContext from 'services/context';

import Title from 'components/Title';
import MainLayout from 'layouts/main';
import React, { useContext } from 'react';

const Home = () => {
  const { appName, description } = useContext(AppContext);

  return (
    <MainLayout>
      <Container>
        <Title>Home</Title>
        <p>{appName}</p>
        <hr />
        <small>{description}</small>
      </Container>
    </MainLayout>
  );
};

export default Home;
