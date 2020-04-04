import React from 'react';
import { Link } from 'gatsby';

import Container from './src/components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Global Impact of Corona Virus</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">Preventive Measures</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
