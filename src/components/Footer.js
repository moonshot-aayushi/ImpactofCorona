import React from 'react';

import Container from './src/components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() }, Site by AAYUSHI IYER</p>
      </Container>
    </footer>
  );
};

export default Footer;
