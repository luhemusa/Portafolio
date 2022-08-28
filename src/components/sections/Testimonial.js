import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Clientes',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Responsable y eficiente, en el desarrollo de modulo JavaScript para nuestros sistemas. Lo recomendamos al 100%
                  </p>
                  <br />
                  <Image
                    src={require('./../../assets/images/papaya25.png')}
                    alt="Features split 01"
                    width={300}
                    height={300} />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Miguel Quilarquez</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://papaya25.com">www.papaya25.com</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Luhemusa nos ayudo a desarrollar un sistema necesario para nuestro departamento de calidad, actualmente nos sigue brindando soporte en varios temas de informática
                  </p>
                  <br /><br />
                  <Image
                    src={require('./../../assets/images/logogml.png')}
                    alt="Features split 01"
                    width={300}
                    height={300} />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Adriana Leon   </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.gmedical.net/">www.gmedical.net</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Persona de confianza, en Acuarela Panamá estamos agradecidos con Luis Mujica ya que pudimos crear la web para nuestro negocio la cual nos ha ayudado a conectar con varios clientes y aumentar nuestra visibilidad
                  </p>
                  <br />
                  <Image
                    src={require('./../../assets/images/acuarela.png')}
                    alt="Features split 01"
                    width={300}
                    height={300} />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Omar Solorzano | Gaby Rivas</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://acuarelapanama.com/">www.acuarelapanama.com</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;