import React from 'react';

export default function Card(props) {
    return (
        <div>
            <section className="card-section">
                <article>
                    <img src={props.image} className="card-image" alt="card_image"></img>
                </article>
                <article>
                    <article className="location-section">
                        <img src={require('../images/location.png')} className="location-logo" alt="location_logo"></img>
                        <p className="location-text">{props.location}</p>
                        <a href={props.goggleMapsUrl}>View on Google Maps</a>
                    </article>
                    <h3 className="location-name">{props.title}</h3>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </article>
            </section>
            <hr></hr>
        </div>
    )
}