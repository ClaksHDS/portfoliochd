import React from "react";
import { PageHero, Contact } from "../components";

const ContactPage = () => {
  return (
    <main role='main'>
      <PageHero title='contact' />
      <Contact className='page section-center' />
    </main>
  );
};

export default ContactPage;
