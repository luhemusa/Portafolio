import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Contact from '../components/sections/Contact';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles title="lenguajes" id="lenguajes" />
      <FeaturesSplit title="proyectos" id="proyectos" invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial title="clientes" id="clientes" topDivider />
      <Contact title="contacto" id="contacto" topDivider />
    </>
  );
}

export default Home;