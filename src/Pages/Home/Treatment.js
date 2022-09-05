import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Treatment = () => {
    return (
        <div className="hero min-h-screen py-40">
            <div className="hero-content flex-col lg:flex-row flex justify-evenly">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-2/5 text-left'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Link to="/appointment"><PrimaryButton>Get started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Treatment;