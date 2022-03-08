import React from 'react';

const Card = ({name, image = ''}) => {

    return (
        <div className='card'>
            <img src={`${image}`} className="card__image" alt="Pablo Giron portfolio"/>
            <h5 className='card__title'>{name}</h5>
        </div>
    );
    
}

export default Card;