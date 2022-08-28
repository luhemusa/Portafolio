import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Modal, ModalBody, ModalHeader, ModalFooter, Row } from 'reactstrap'

//form
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Label, FormGroup } from 'reactstrap'

//email
import emailjs from '@emailjs/browser';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../utils/constants';
import Swal from 'sweetalert2'



const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Contact = ({
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

  const form = useRef();

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
    title: 'Contacto',
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

          <div className="container-link-redes reveal-from-bottom" data-reveal-delay="400">
            <a href="https://www.linkedin.com/in/luis-hernan-mujica/" target="_blank" style={{ cursor: "pointer" }}>
              <Image
                src={require('./../../assets/images/linkin.png')}
                alt="Features split 01"
                width={50}
                height={50} />
            </a>
            <a href="https://wa.link/jy93i2" target="_blank" style={{ cursor: "pointer" }}>
              <Image
                src={require('./../../assets/images/whatsapp.png')}
                alt="Features split 01"
                width={50}
                height={50} />
            </a>
            <a href="https://www.instagram.com/luishms10/" target="_blank" style={{ cursor: "pointer" }}>
              <Image
                src={require('./../../assets/images/instagram.png')}
                alt="Features split 01"
                width={50}
                height={50} />
            </a>
            <a href="https://github.com/luhemusa" target="_blank" style={{ cursor: "pointer" }}>
            <Image
              src={require('./../../assets/images/gmail.png')}
              alt="Features split 01"
              width={50}
              height={50}
            />
          </a>
          <a href="https://github.com/luhemusa" target="_blank" style={{ cursor: "pointer" }}>
            <Image
              src={require('./../../assets/images/github.png')}
              alt="Features split 01"
              width={50}
              height={50} />
          </a>

        </div>

        <br />

        <div className="reveal-from-bottom" data-reveal-delay="400">
          <Formik
            initialValues={{
              name: '',
              email: '',
              text: '',
            }}

            validationSchema={Yup.object().shape({

              name: Yup.string().required('Requerido'),
              email: Yup.string().email().required('Requerido'),
              text: Yup.string().required('Requerido')

            })}

            onSubmit={(fields, { resetForm }) => {

              emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
              .then((result) => {
                Swal.fire(
                  result.text,
                  'Mensaje Enviado!',
                  'success'
                )
                 resetForm();
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });

              console.log(fields)
            }} >

            {({ values, errors, status, touched, setFieldValue, onSubmit }) => (

              <div className="card-body">
                <Form className="form-main" ref={form}>

                  <div className="form-contact">
                    <FormGroup>
                      <Label for="exampleEmail">
                        Nombre
                      </Label>
                      <Field className='form-control' name="name" placeholder="Ingrese Nombre completo" />
                      <p style={{ color: "red" }}><ErrorMessage name="name" /></p>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">
                        Correo electronico
                      </Label>
                      <Field className='form-control' name="email" placeholder="Ingrese Email" />
                      <p style={{ color: "red" }}><ErrorMessage name="email" /></p>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">
                        Texto
                      </Label>
                      <Field className='form-control' name="text" placeholder="Ingrese Texto" as="textarea" style={{ height: "150px" }}/>
                      <p style={{ color: "red" }}><ErrorMessage name="text" /></p>
                    </FormGroup>
                  </div>
                  <br />
                  <div>
                    <Button varian="contained" type="submit" className="btn btn-primary me-1">Enviar</Button>
                    <Button varian="contained" type="reset" className="btn btn-secondary">Reset</Button>
                  </div>

                </Form>
              </div>
            )}

          </Formik>
        </div>

        <br /><br />


      </div>
    </div>
    </section >
  );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;