import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from '@mui/material';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'TSU en Programación y Análisis de Sistemas',
    paragraph: 'Experiencia en el desarrollo en entornos aplicaciones Web y Mobile (Android)'
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

            {/* REACT */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                    <Image
                      src={require('./../../assets/images/react.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    React JS
                    </h4>
                  <p className="m-0 text-sm">
                    Experiencia en desarrollo Web con Framework React JS y uso de HTML5, CSS y JavaScript.
                    </p>
                </div>
              </div>
            </div>
            {/* NODE JS */}
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                    <Image
                      src={require('./../../assets/images/node.png')} 
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Node JS
                    </h4>
                  <p className="m-0 text-sm">
                    Manejo de Node JS para gestionar diferentes funcionalidades y servicios en BackEnd tanto entorno Web como webservice para App Mobile (Android).
                    </p>
                </div>
              </div>
            </div>
            {/* MySQL */}
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                    <Image
                      src={require('./../../assets/images/mysql.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    MySQL
                    </h4>
                  <p className="m-0 text-sm">
                    Uso de Base de datos Relacional MYSQL.
                    </p>
                </div>
              </div>
            </div>
            {/* KOTLIN */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                    <Image
                      src={require('./../../assets/images/kotlin.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Kotlin
                    </h4>
                  <p className="m-0 text-sm">
                    Experiencia en lenguaje en base a objetos para desarrollo de Apps Mobiles para Android.
                    </p>
                </div>
              </div>
            </div>
            {/* JETPACK COMPOSE */}
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                    <Image
                      src={require('./../../assets/images/jet.png')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Jetpack Compose
                    </h4>
                  <p className="m-0 text-sm">
                    Manejo de Jetpack Compose para desarrollo de UI en componentes para Android.
                    </p>
                </div>
              </div>
            </div>
            {/* GIT */}
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                    <Image
                      src={require('./../../assets/images/git.png')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    GIT
                    </h4>
                  <p className="m-0 text-sm">
                    Uso Basico de GIT para el manejo y control de versiones
                    </p>
                </div>
              </div>
            </div>
            {/* Blank */}
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                    
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   
                    </h4>
                  <p className="m-0 text-sm">
                    
                    </p>
                </div>
              </div>
            </div>
            {/* GIT */}
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                  <Image
                      src={require('./../../assets/images/github.png')}
                      alt="Features tile icon 06"
                      width={100}
                      height={100} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    GitHub
                    </h4>
                  <p className="m-0 text-sm">
                    Puedes visitar mi Repositorio de GitHub en el siguiente 
                    </p>
                    <Link href="https://github.com/luhemusa" target="_blank" className="link-github">Link</Link>
                </div>
              </div>
            </div>
            {/* Blank */}
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="">
                   
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   
                    </h4>
                  <p className="m-0 text-sm">
                    
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;