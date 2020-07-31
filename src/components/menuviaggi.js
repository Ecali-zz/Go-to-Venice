import React, {useState} from 'react';
import { Accordion, Card } from 'react-bootstrap';

import '../App.css';

import * as Icon from 'react-bootstrap-icons';

function MenuViaggi(){

    const accordionStyle = {
        textAlign: 'left',
        color: '#0070c7',
        borderColor: '#0070c7',
        border: 'solid 1px',
        borderRadius: 5
    }

    const iconStyle = {
        fill : '#0070c7',
        height: 24,
        width: 24,
        verticalAlign: 'bottom',
        marginRight: 5
        
    }
    const cardBodyStyle = {
        background: 'rgba(0,112,199,0.2)',
    }
    const cardTitleStyle = {
        borderBottom: 'solid 1px'
    }
    return(
        <div className="menu-viaggi">
        <Accordion style={accordionStyle} className=' border-primary'>
            <Card >
                <Accordion.Toggle  style={cardTitleStyle} as={Card.Header} eventKey="0">
                    <Icon.Geo style={iconStyle} />
                Viaggi
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body style={cardBodyStyle}>
                    <ul>
                        <li>Viaggi richiesti  </li>
                        <li>Viaggi in corso</li>
                        <li>Archivio viaggi</li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                <Icon.ClipboardCheck style={iconStyle} />
                Form
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body style={cardBodyStyle}>
                    <ul>
                        <li>Viaggi richiesti</li>
                        <li>Viaggi in corso</li>
                        <li>Archivio viaggi</li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <Icon.PersonCircle style={iconStyle}/>
                Clienti
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body style={cardBodyStyle}>
                    <ul>
                        <li>Viaggi richiesti</li>
                        <li>Viaggi in corso</li>
                        <li>Archivio viaggi</li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    <Icon.Map style={iconStyle}/>
                Tratte
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body style={cardBodyStyle}>
                    <ul>
                        <li>Viaggi richiesti</li>
                        <li>Viaggi in corso</li>
                        <li>Archivio viaggi</li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>
    )
}

export default MenuViaggi;
