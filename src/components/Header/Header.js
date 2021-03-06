import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useStats } from '../../context/statContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

function Header({ refreshData }) {
  const { Date: apiDate } = useStats();
  let formattedDate = new Date(apiDate).toISOString().substring(0, 10);

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#" as={Link} to={{ pathname: '/' }}>
          <FontAwesomeIcon
            icon={faVirus}
            size="2x"
            style={{ color: '#ff3860' }}
          ></FontAwesomeIcon>
          Covid-tracker
        </Navbar.Brand>
        <Button
          variant="dark"
          style={{ alignSelf: 'center' }}
          as={Link}
          to={{ pathname: '/countries' }}
          style={{
            textDecoration: 'none',
          }}
        >
          Országok
        </Button>
        <Nav style={{ marginLeft: 'auto' }}>
          <Nav.Link as="li" style={{ alignSelf: 'center' }}>
            Utolsó API frissítés dátuma: {formattedDate}
          </Nav.Link>
          <Button
            variant="dark"
            onClick={refreshData}
            style={{ alignSelf: 'center' }}
          >
            Adatok frissítése
          </Button>

          <Nav.Link
            href="https://github.com/raczmate/covid-tracker"
            target="_blank"
            style={{ color: 'white' }}
          >
            <FontAwesomeIcon icon={faGithub} size={'3x'} color="white" />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
