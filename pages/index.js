import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <Container>
    <Head>
      <title>Title</title>
    </Head>

    <Main>
      <h1>Hello World</h1>

      <p>
        Get started by editing <code>pages/index.js</code>
      </p>
    </Main>
  </Container>
);

export default Home;
