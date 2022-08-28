import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import '../../assets/css/utils.css'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Proyectos Desarrollados',
    paragraph: 'Algunos de los proyectos desarrollados en diferentes tecnologías para diferentes clientes o para uso propio'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            {/* AllTracking */}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Android App
                </div>
                <div className="icons-header" >
                  <Image
                    src={require('./../../assets/images/kotlin.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                  <Image
                    src={require('./../../assets/images/jet.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                  <Image
                    src={require('./../../assets/images/mysql.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                  <Image
                    src={require('./../../assets/images/git.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                </div>
                <h3 className="mt-0 mb-12">
                  <a href="https://play.google.com/store/apps/details?id=com.luhemusadev.alltracking" target="_blank">AllTracking</a>
                </h3>
                <p className="m-0">
                  App Android diseñada y desarrollada en Kotlin y Jetpack Compose para la UI, la cual permite hacer seguimiento de envíos o
                  recepción de paquetes a nivel internacional, la misma utiliza diferentes servicios como : Firebase, MySQL, Node JS
                  (para webservices API), Google Auth entre otros.
                  <br /><br />
                  <div className="link-descarga">
                    <a href="https://play.google.com/store/apps/details?id=com.luhemusadev.alltracking" target="_blank">Link de descargar de la App en tienda Play Store</a>
                    <br /><br />
                    <a href="https://luhemusadev.com/AllTracking" target="_blank"> Web de información </a>
                  </div>
                  <br />
                  <div>
                    <video width="750" height="500" controls >
                      <source src={require('./../../assets/video/moure.mp4')} type="video/mp4" />
                    </video>
                  </div>



                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/AllTracking2.png')}
                  alt="Features split 01"
                  width={300}
                  height={250} />
              </div>
            </div>
            {/* Octopus*/}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  React JS  /  Node JS
                </div>
                <div className="icons-header" >
                  <Image
                    src={require('./../../assets/images/react.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                  <Image
                    src={require('./../../assets/images/node.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                  <Image
                    src={require('./../../assets/images/mysql.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                  <Image
                    src={require('./../../assets/images/git.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                </div>
                <h3 className="mt-0 mb-12">
                  Octopus GML
                </h3>
                <p className="m-0">
                  Octopus GML es un sistema cerrado que fue diseñado y desarrollado para la empresa de logística llamada  Global Medical Logistics, este sistema realiza funciones administrativas en el área de calidad y procesos. Maneja diferentes servicios y librerías como: Socket io , Sequelize, Express, cors, variables de entorno (DotEnv), entre otros.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/octopus.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
            {/* Decoraciones y servicios */}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  WordPress
                </div>
                <div className="icons-header" >
                  <Image
                    src={require('./../../assets/images/wordpress.png')}
                    alt="Features split 01"
                    width={50}
                    height={50}
                    style={{ marginRight: '15px' }} />
                  <Image
                    src={require('./../../assets/images/mysql.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                </div>
                <h3 className="mt-0 mb-12">
                  Decoraciones, Servicios y Remodelaciones Panamá
                </h3>
                <p className="m-0">
                  Pagina web desarrollada en CMS Wordpress para empresa de remodelaciones, maneja diferentes plugins y servicios como conexión directa con WhatsApp, Redes sociales y gestión de correos electrónicos
                </p>
                <div className="link-descarga">
                  <a href="https://decoracionesserviciosyremodelaciones.com/" target="_blank"> Ir a Web </a>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/deco.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            {/*Acuarela*/}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  WordPress
                </div>
                <div className="icons-header" >
                  <Image
                    src={require('./../../assets/images/wordpress.png')}
                    alt="LuhemusaDev"
                    width={50}
                    height={50}
                    style={{ marginRight: '15px' }} />
                  <Image
                    src={require('./../../assets/images/mysql.png')}
                    alt="LuhemusaDev"
                    width={50}
                    height={50} />
                </div>
                <h3 className="mt-0 mb-12">
                  Acuarela Panamá
                </h3>
                <p className="m-0">
                  Acuarela Panamá es una empresa de educación primaria y tutorías la cual se le desarrollo una pagina web en Wordpress con un enfoque de SEO para posicionamiento y aumentar visibilidad del negocio.
                </p>
                <div className="link-descarga">
                  <a href="https://acuarelapanama.com/" target="_blank"> Ir a Web </a>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/acuarelaweb.png')}
                  alt="desarrollo luhemusa"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;