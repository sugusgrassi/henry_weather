import React from "react";
import E404 from "./E404";
import './Ciudad.css';
import { Link } from 'react-router-dom';

export default function Ciudad({city}) {
    if (city) {
    return (
        <div className="cityContainer">
                <div className="cityCard">
                    <Link to="/">
                        <div id="closeIcon" className="row">
                        <button className="xbutton">X</button>
                        </div>
                    </Link>
                    <h2>{city.name}, {city.country}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
    } else {
        return (
            <div>
                <E404 />
            </div>
        )
    }
}