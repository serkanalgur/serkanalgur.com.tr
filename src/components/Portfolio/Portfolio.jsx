import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  Wordpress,
  Youtube,
  Googlemaps,
  Codeigniter,
  Woo,
  Contactlesspayment,
} from '@styled-icons/simple-icons';
import { Vuejs } from '@styled-icons/boxicons-logos';
import { Customize } from '@styled-icons/boxicons-regular';
import { NodeJs, ReactLogo, Elementor } from '@styled-icons/fa-brands';

import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import PortfolioImg from '../Image/PortfolioImg';

const Portfolio = () => {
  const { portfolio } = useContext(PortfolioContext);

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

  const projectIcons = (title, standartData) => {
    switch (title) {
      case 'Bebedu':
      case 'cPartner':
      case 'PGS Estates':
        return (
          <>
            <Wordpress width="30" alt="WordPress" title="WordPress" />{' '}
            <Googlemaps width="30" alt="Google Maps API" title="Google Maps Apı" />{' '}
            <Customize width="30" alt="Custom Theme and Plugins" title="Custom Theme and Plugins" />
          </>
        );
      case 'Ailemizle TV':
        return (
          <>
            <Wordpress width="30" alt="WordPress" title="WordPress" />{' '}
            <Youtube width="30" alt="YouTube Data API" title="YouTube Data API" />{' '}
          </>
        );
      case 'Intime News':
        return (
          <>
            <Codeigniter width="30" alt="Codeigniter" title="Codeigniter" />{' '}
          </>
        );
      case 'Lokal Plants':
        return (
          <>
            <Wordpress width="30" alt="WordPress" title="WordPress" />{' '}
            <Woo width="35" alt="WooCommerce" title="WooCommerce" />{' '}
            <Contactlesspayment
              width="35"
              alt="PayTR Payment System"
              title="PayTR Payment System"
            />
          </>
        );
      case 'Nâzım Hikmet Culture and Art Foundation':
      case 'ONG Center':
        return (
          <>
            <Wordpress width="30" alt="WordPress" title="WordPress" />{' '}
            <Woo width="35" alt="WooCommerce" title="WooCommerce" />{' '}
          </>
        );
      case 'NovasHome':
        return (
          <>
            <Wordpress width="30" alt="WordPress" title="WordPress" />{' '}
            <Woo width="35" alt="WooCommerce" title="WooCommerce" />{' '}
            <Vuejs width="30" alt="Vuejs" title="Vuejs" />{' '}
            <Contactlesspayment
              width="35"
              alt="Azerbaijani Payment Systems"
              title="Azerbaijani Payment Systems"
            />
          </>
        );
      case 'Novruzun Səsi Ol!':
        return (
          <>
            <Wordpress width="30" alt="WordPress" title="WordPress" />{' '}
            <NodeJs width="30" alt="NodeJS" title="NodeJS" />{' '}
            <ReactLogo width="30" alt="React" title="React" />{' '}
            <Customize width="30" alt="Custom Theme and Plugins" title="Custom Theme and Plugins" />
          </>
        );
      case 'Araz Supermarket Promo Website & System':
      case 'Digital Media Agency - Publi Citi':
      case 'WpAdamı':
        return (
          <>
            <Wordpress width="30" alt="WordPress" title="WordPress" />{' '}
            <Customize width="30" alt="Custom Theme and Plugins" title="Custom Theme and Plugins" />
          </>
        );
      case 'SMarketing Solutions':
        return (
          <>
            <Wordpress width="30" alt="WordPress" title="WordPress" />{' '}
            <Elementor width="30" alt="Elementor" title="Elementor" />
          </>
        );
      default:
        return <strong>{standartData || ''}</strong>;
    }
  };

  return (
    <section id="portfolios">
      <Container>
        <div className="project-wrapper">
          <Title title="Portfolio" />
          {portfolio.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{projectIcons(title, info2)}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <PortfolioImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
