import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { ScrollLink } from 'react-scroll';
import TextLoop from 'react-text-loop';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  // const { title, name, subtitle, cta } = hero;
  const { title, name, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            I&apos;m the{' '}
            <TextLoop>
              <span>Unknown Developer.</span>
              <span>Missing Developer.</span>
              <span>Unicorn Developer.</span>
            </TextLoop>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <ScrollLink to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </ScrollLink>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
