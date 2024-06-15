import React from 'react';
import { useLocation } from 'react-router-dom';
const ContactUs: React.FC = () => {
  const { state } = useLocation();
  return <h1>ContactUs {state.id}</h1>;
};

export default ContactUs;
