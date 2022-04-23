import React, { useState } from "react";
import './contactForm.css'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const formSchema = Yup.object().shape({
  name: Yup.string()
  .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string().required("Required")
});

const ContactForm= ({primary,
  dark,
  dark2}) => {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xrgjyndn",
      data: values
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Hemos recibido tu consulta nos comunicaremos a la brevedad!");
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="contenedor" id="contacto">
    
      <Formik
        initialValues={{ email: "", message: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
          
        {({ isSubmitting }) => (
         
         <Form className='formulario' id="fs-frm" noValidate>
           
           <h1>CONTACTANOS</h1>
            <label htmlFor="name">Nombre:</label>
            <Field id="name" type="name" name="name" />
            <ErrorMessage name="name" className="errorMsg" component="p" />
            <label htmlFor="email">Email:</label>
            <Field id="email" type="email" name="email" />
            <ErrorMessage name="email" className="errorMsg" component="p" />
            <label htmlFor="message">Mensaje:</label>
            <Field id="message" name="message" component="textarea" />
            <ErrorMessage name="message" className="errorMsg" component="p" />
            <div className="btn-wrap">
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
            </div>
            {serverState && (
              <p className={!serverState.ok ? "errorMsg" : ""}>
                {serverState.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm