import React from 'react';
import Hero from '../../components/front/Hero';
import Benefits from '../../components/front/Benefits';
import WhoWeAre from '../../components/front/WhoWeAre';
import HowItWorks from '../../components/front/HowItWorks';
import Featured from '../../components/front/Featured';
import Testimonials from '../../components/front/Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dreamschools</title>
        <link rel="canonical" href="https://www.dreamschools.com" />
      </Helmet>
      <Hero/>
      <Benefits/>
      <WhoWeAre/>
      <HowItWorks/>
      <Featured/>
      <Testimonials/>
    </>
  ); 
}
export default Home;