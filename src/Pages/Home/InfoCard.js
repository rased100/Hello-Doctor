import React from 'react';

const InfoCard = ({ img, cardTitle, p, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl p-5 ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white text-left">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{p}</p>
            </div>
        </div>
    );
};

export default InfoCard;