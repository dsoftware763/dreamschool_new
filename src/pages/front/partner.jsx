import React from 'react';
import ProvideHero from '../../components/front/partner/ProvideHero';
import ApplicationForm from '../../components/front/partner/ApplicationForm';
import WhyPartner from '../../components/front/partner/WhyPartner';
import Benefits from '../../components/front/partner/Benefits';
import ContactForm from '../../components/front/partner/ContactForm';
import { Helmet } from 'react-helmet';

const Partner = () => {
    return (
        <>
            <Helmet>
                <title>Dreamschools - Partner with Us</title>
                <link rel="canonical" href="https://www.dreamschools.com/partner" />
            </Helmet>
            <ProvideHero/>
            <ApplicationForm/>
            <Benefits/>
            <WhyPartner/>
            <ContactForm/>
        </>
    );
}

export default Partner;