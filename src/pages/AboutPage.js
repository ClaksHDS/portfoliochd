import React from "react";
import { PageHero, AboutContent } from "../components";

const AboutPage = () => {
  return (
    <main role='main'>
      <PageHero title='about' />
      <AboutContent />
    </main>
  );
};

export default AboutPage;
