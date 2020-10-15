import React from 'react';
import imgLogo from '../images/mapmaker.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function orphanagesMap () {
    return(
        <div id="page-map">
            <aside>
            <header>
                <img src={imgLogo} alt="Happy"></img>
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
                <strong>Santo André</strong>
                <span>São Paulo</span>
            </footer>
            </aside>

                <Map center={[-23.6683264,-46.563328]}
                zoom={15}
                style={{ width:'100%', height:'100%' }}
                >
                  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>  
                </Map>
                

            <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    );
}

export default orphanagesMap;