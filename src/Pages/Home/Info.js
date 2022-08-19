import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" p="9:00am" cardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgClass="bg-accent" p="Mirpur-10, Dhaka-1216" cardTitle="Our Location" img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" p="+8801716738111" cardTitle="Contact Us" img={phone}></InfoCard>
        </div>
    );
};

export default info;