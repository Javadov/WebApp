import React from 'react'
import Navbar from '../sections/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import ContactForm from '../components/ContactForm';
import Footer from '../sections/Footer';

const ContactsView: React.FC = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb currentPage="Contacts" />

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.2102133609883!2d15.218762112017908!3d59.27274627311137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1650f85a12de42bb!2sKulturkvarteret!5e0!3m2!1sen!2sse!4v1665341915094!5m2!1sen!2sse" className='map' allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactsView