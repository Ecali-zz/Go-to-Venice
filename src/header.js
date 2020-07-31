import React from 'react';
import './App.css';
import BackgroundImageHeader from './img/redPhone.jpg'

import * as Icon from 'react-bootstrap-icons';

import './custom.scss';

import {ButtonGroup, Button} from 'react-bootstrap';

function Header(){
    const iconStyle = {
        fill : '#fff',
        height: 24,
        verticalAlign: 'top',
        width: 24,
        margin: 5,
    }
    const headerStyle = {
        backgroundImage : "url(" + BackgroundImageHeader + ")",
        backgroundSize : 'cover',
        overflow: 'hidden',
        BackgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const buttonStyle ={
        width: '30%',
        margin: '10px',
    }
    return(
        <div style={headerStyle}>
            <div className='header-info'>
                <h1 class="display-4">Benvenuto!</h1>
                <p class="lead">
                    Quest'app vuole mettere in movimento l'economia e le persone!
                </p>
                <p class="lead">
                    Entra è scopri come muoverti in sicurezza e liberta <br/>o come guadagnare lavorando per noi.
                </p>
                <p class="lead">
                   Inizia subito seleziona la tua categoria:
                </p>
                <div class="divider"></div>
                    <Button size="lg" style={buttonStyle} >
                        <Icon.People style={iconStyle} />
                        Utente
                    </Button>
                    <Button size="lg" className='btn-dark' style={buttonStyle} >
                        <Icon.Shuffle style={iconStyle} />
                        Driver
                        </Button>
            </div>
        </div>
    )
}

export default Header;