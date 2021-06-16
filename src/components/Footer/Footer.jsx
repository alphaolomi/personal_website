import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ScrollLink } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <ScrollLink to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </ScrollLink>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          &copy; 2017 - {new Date().getFullYear()} - made with{' '}
          <i className="fa fa-heart fa-inverse text-warning" />{' '}
          <a href="https://github.com/alphaolomi" target="_blank" rel="noopener noreferrer">
            Alpha Olomi
          </a>
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
