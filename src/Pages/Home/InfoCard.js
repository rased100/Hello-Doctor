import React from 'react';

const InfoCard = ({ img, cardTitle, p, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl p-5 ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body text-white text-left">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{p}</p>
            </div>
        </div>
    );
};

export default InfoCard;