import React from 'react'
import moment from 'moment';
import Photos from './Photos'
import './card.css';

const Card = (props) => {
    const dateNow = (dt) => {
        let str = dt;
        let date = moment(str);
        return date.format('llll');
    }
    return (
        
        <div className='card'>
                
            <img className="card-img-top img" src={Photos[props.image]} alt='img' />
            
            <div className='card-body'>
            <h4 className='card-title m1'>{props.name}</h4>
                <p>Start Time: {dateNow(props.stime)} </p>
                <p>End Time:{dateNow(props.etime)} </p>
                <a href={props.link} className="btn btn-dark" target="_blank" rel="noreferrer">Participate</a>
            </div>
        </div>
    )
}

export default Card;
