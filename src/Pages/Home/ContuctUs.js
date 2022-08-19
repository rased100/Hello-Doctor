import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const ContuctUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center">
            <div className='grid grid-cols-1 gap-5 w-96 py-10'>
                <h4 className="text-xl text-primary font-bold">Contuct Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
                <input type="text" placeholder="Email Address" className="input" />
                <input type="text" placeholder="Subject" className="input" />
                <textarea className="textarea" placeholder="Your message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>

    );
};

export default ContuctUs;