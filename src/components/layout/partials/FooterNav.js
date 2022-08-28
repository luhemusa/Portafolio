import React from 'react';
import classNames from 'classnames';
import { Link, animateScroll as scroll } from "react-scroll";

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
      <li style={{cursor:"pointer"}}>
                      <Link
                        activeClass="active"
                        to="lenguajes"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Lenguajes
                      </Link>
                    </li>
                    <li style={{cursor:"pointer"}}>
                      <Link
                        activeClass="active"
                        to="proyectos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Proyectos
                      </Link>
                    </li>
                    <li style={{cursor:"pointer"}}>
                      <Link
                        activeClass="active"
                        to="clientes"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Clientes
                      </Link>
                    </li>
                    <li style={{cursor:"pointer"}}>
                      <Link
                        activeClass="active"
                        to="contacto"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Contacto
                      </Link>
                    </li>
      </ul>
    </nav>
  );
}

export default FooterNav;