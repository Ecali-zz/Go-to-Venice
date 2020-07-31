import React from 'react';
import './App.css'
import MenuViaggi from './components/menuviaggi'
import MenuRichieste from './components/menurichieste'
import Map from './components/maps'


function Home(){
    return(
        <div id='Map'>
            <Map></Map>
            <MenuViaggi></MenuViaggi>
            <MenuRichieste></MenuRichieste>
        </div>
    )
}

export default Home;